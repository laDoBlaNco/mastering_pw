import { expect, test } from "@playwright/test";

// test.beforeAll()  // executed once at beginning of file

test.beforeEach(async ({ page }) => {
  // global beforeEach
  await page.goto("https://playground.bondaracademy.com");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("Locator Syntax Rules", async ({ page }) => {
  // find by tag
  page.locator("input");

  // find by id
  page.locator("#inputEmail");

  // find by class value
  page.locator(".shape-rectangle");

  // find by any attribute
  page.locator('[placeholder="Email"]');

  // find by full class value as attribute
  page.locator(
    '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]',
  );

  // find by several selectors (NO SPACES IN BETWEEN)
  page.locator('input[placeholder="Email"][nbinput].shape-rectangle');

  // find by Xpath (NOT RECOMMENDED BY PLAYWRIGHT)
  /**
   * warning
   * We recommend prioritizing user-visible locators like text or accessible role instead
   * of using XPath that is tied to the implementation and easily break when the
   * page changes.
   * XPath locators are equivalent to calling Document.evaluate.
   */
  page.locator('//*[@id="inputEmail"]');

  // find by partial text match
  page.locator(':text("Using")');

  // find  by exact text match (must match exactly as it is in the HTML, not as shown
  // on the page)
  page.locator(':text-is("Using the Grid")');
});

test("User-visible locators", async ({ page }) => {
  /**
   * Role is not a tag
   * Role is not a behavior
   * Role is how user assisted tools are reading the html application and understand
   * the web application from the user perspective
   */
  await page.getByRole("button", { name: "Sign in" }).first().click();
  await page
    .getByRole("textbox", { name: "Email" })
    .first()
    .fill("test@test.com");

  await page.getByLabel("Email").first().fill("test@test.com");

  await page.getByPlaceholder("Jane Doe").fill("Artem Bondar");

  await page.getByText("Submit").first().click();

  await page.getByTestId("inputEmail1").fill("test@anotheremail.com");

  await page.getByTitle("IoT Dashboard").click();
});

test("Locating child elements", async ({ page }) => {
  await page
    .locator("nb-card")
    .locator("nb-radio-group")
    .locator(':text-is("Option 1")')
    .click();
  // another way to do the same without the . chain, same method with spaces
  // like we do with css classes
  // NOTE: THIS IS THE SAME AS WHEN WE USED ABOVE TO FIND BY COMBO OF SEVERAL SELECTORS
  // WITHOUT SPACES. SAME SYNTAX WITH SPACES TELLS PW THAT YOU ARE LOOKING FOR
  // CHILD ELEMENTS RATHER THAN A COMBO OF SELECTORS
  await page.locator('nb-card nb-radio-group :text-is("Option 2")').click();

  // coming normal locators with user-visible locators
  await page
    .locator("nb-card")
    .getByRole("button", { name: "Sign In" })
    .first()
    .click();

  // by index - ALSO NOT RECOMMENDED - Unless its the only way.
  await page.locator("nb-card").nth(3).getByRole("button").click();
});

test("Locating parent elements", async ({ page }) => {
  await page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("button")
    .click();
  await page
    .locator("nb-card", { has: page.locator("#inputEmail1") })
    .getByRole("button")
    .click();

  // using filter
  await page
    .locator("nb-card")
    .filter({ hasText: "Using the Grid" })
    .getByRole("button")
    .click();

  // using multiple filters
  await page
    .locator("nb-card")
    .filter({ has: page.locator("nb-checkbox") })
    .filter({ hasText: "Sign In" })
    .getByLabel("Email")
    .fill("email@testerEmail.com");

  await page
    .getByText("Using the Grid")
    .locator("..")
    .getByRole("button")
    .click();
});

test("Reusing locators", async ({ page }) => {
  // instead of copy/pasting the locator 4 times we can create a const

  const basicFormSecton = page.locator("nb-card", { hasText: "Basic form" });
  const emailInputField = basicFormSecton.getByLabel("Email")

  await emailInputField.fill("testAgain@test.com");
  await basicFormSecton.getByLabel("Password").fill("playwrightMaster");
  await basicFormSecton.locator("nb-checkbox").click();
  await basicFormSecton.getByRole("button").click();

  await expect(emailInputField).toHaveValue('testAgain@test.com')
});
