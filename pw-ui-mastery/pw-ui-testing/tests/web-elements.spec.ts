import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("Locator Syntax Rules", async ({ page }) => {
  // find with tag name
  page.locator("input");

  // find with id
  page.locator("#inputEmail");

  // find by class value
  page.locator(".shape-rectangle");

  // find by any attribute
  page.locator('[placeholder="Email"]');

  // find by full class value (since its just another attribute)
  page.locator(
    '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]',
  );

  // find by several selectors (VERY IMPORTANT THAT THERE IS NO SPACES)
  page.locator('input[placeholder="Email"].shape-rectangle');

  // find by xpath - NOT RECOMMENDED by playwright docs
  page.locator('//*[@id="inputEmail"]');

  // find by text - partial text match
  page.locator(':text("Using")');

  // find by text - exact text match
  page.locator(':text-is("Using the Grid")');
});

/**
 * Testing Philosophy from Playwright Docs -
 *
 * Test user-visible behavior:
 * Automated tests should verify that the application code works for the end users, and avoid relying on implementation
 * details such as things which users will not typically use, see, or even know exists, such as the name of a function
 * whether something is an array, or the CSS class of some element. The end user will see or interact with what is
 * rendered on the page, so my test should typically only see/interact with the same rendered output.
 *
 */

// These should be the priority before we try anything else. if they don't work for our case then we can go to something
// else.
test("User-visible-first locators", async ({ page }) => {
  // role isn't a tag or a behavior but how the user assisted tools are reading the application from the user perspective
  // and the locator must be unique in order to take an action, so if our user-visible locator identifies multiple items
  // we need to do something to make them unique
  await page.getByRole("button", { name: "Sign in" }).first().click();
  await page
    .getByRole("textbox", { name: "Email" })
    .first()
    .fill("test@test.com");

  await page.getByLabel("Email").first().fill("test@test.com");
  await page.getByPlaceholder("Jane Doe").fill("Kevin Whiteside");
  await page.getByText("Submit").first().click();
  await page.getByTestId("inputEmail1").fill("test@test.com");
  await page.getByTitle("IoT Dashboard").click();
});

// we can also use the combination of locators to find child elements by chaining them together
test("Locating child elements", async ({ page }) => {
  await page
    .locator("nb-card")
    .locator("nb-radio-group")
    .locator(':text-is("Option 1")')
    .click();

  // we can also do the chaining but putting them all in the same locator as we did with attributes but this time
  // using a space to tell playwright we are looking for nested elements
  await page.locator('nb-card nb-radio-group :text-is("Option 2")').click();

  // we can also combine both types of locators
  await page
    .locator("nb-card")
    .getByRole("button", { name: "Sign in" })
    .nth(1) // not recommended approach as this is a hard coded index and less agile
    .click();
});

// we can also do another method for finding and locking in a parent element and then the nested element after
test("Locating pareent elements", async ({ page }) => {
  // using a unique element on the form we can lock in the parent
  await page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("button")
    .click();
  await page
    .locator("nb-card", { has: page.locator("#inputEmail1") })
    .getByRole("button")
    .click();

  // another version of the {has...} method would be using a filter method
  // IN FACT SOMETHING i NOTICED IS THAT UNDER THE HOOD IF YOU LOOK AT THE TRACE, THE ABOVE IS ACTUALLY TURNED INTO A
  // .filter({has...}) 🤔🤔🤯
  await page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByRole("button")
    .click();

  // it seems that under the hood playwright uses the .filter always, but putting the filter argument direclty inside
  // the locator a an arg is cleaner syntax. But when I need a more complex filter or multiple filters then I need to
  // use filter obligado
  await page
    .locator("nb-card")
    .filter({ has: page.locator("nb-checkbox") })
    .filter({ hasText: "Sign in" })
    .getByLabel("Email")
    .fill("testAgain@test.com");

  // we can also go direclty to a specific child element and then travel up through the dom to find a specific parent element
  await page
    .getByText("Using the Grid")
    .locator("..")
    .getByRole("button")
    .click();
});

test("Reusing locators", async ({ page }) => {
  // looks like the filter 'hasText: ...' is NOT case sensitive
  // rather than copy pasting and using the same locator 4 times, we can create a const
  // and though not necessary here, we can even double up on the reusability
  const basicFormSection = page.locator("nb-card", { hasText: "basic form" });
  const emailInputField = basicFormSection.getByLabel("Email");

  await emailInputField.fill("anotherTest@email.com");
  await basicFormSection.getByLabel("Password").fill("my-password");
  await basicFormSection.locator("nb-checkbox").click();
  await basicFormSection.getByRole("button").click();

  // a quick look at assertions (autimatically imported to our file)
  // and locator assertions also return a promise so we need to use await
  await expect(emailInputField).toHaveValue("anotherTest@email.com");
});
