import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com/");
});

test.describe("Form Layouts page", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("Input fields", async ({ page }) => {
    const usingTheGridEmailInput = page
      .locator("nb-card", { hasText: "Using the Grid" })
      .getByRole("textbox", { name: "Email" });

    await usingTheGridEmailInput.fill("test@test.com"); // also note that theer is no need to click into the input field
    // prior to typing (fill) as .fill handles that. Even though when we record (macros) it generates that line of code
    await usingTheGridEmailInput.clear(); // don't necessarily need this if I'm just going to insert something else as
    // .fill will overwrite.
    await usingTheGridEmailInput.pressSequentially("test2@test.com", {
      delay: 200, // this allows us to mimick the actual  keystrokes and watch with a delay
    });

    // extract the value
    const inputValue = await usingTheGridEmailInput.inputValue();

    // assertions - locator assertions prioritized
    await expect(usingTheGridEmailInput).toHaveValue("test2@test.com");
    // for partial match we can't use toContainText as that's for the HTML text not the input text
    // so we need to use regexp
    await expect(usingTheGridEmailInput).toHaveValue(/test.com/)
  });
});
