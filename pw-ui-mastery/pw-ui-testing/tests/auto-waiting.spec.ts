import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com/");
  await page.getByText("Modal & Overlays").click();
  await page.getByText("Dialog").click();
});

test("Auto Waiting", async ({ page }) => {
  const dialogWithDelayForm = page.locator("nb-card", {
    hasText: "Open Dialog With Delay",
  });
  await dialogWithDelayForm.getByRole("button", { name: "3 seconds" }).click();

  const dialogContainer = page.locator("nb-dialog-container");
  // await dialogContainer.getByRole("button", { name: "Ok" }).click();// this waits for all conditions before its executed

  // const dialogHeaderText = await dialogContainer
  //   .locator("nb-card-header")
  //   .textContent(); // even though its not on the
  // table, its waiting for things to be ready, but if we try with .allTextContents()
  // console.log(dialogHeaderText);

  const dialogHeaderText = await dialogContainer
    .locator("nb-card-header")
    .allTextContents();

  console.log(dialogHeaderText);
  expect(dialogHeaderText).toEqual("Friendly reminder"); // it breaks with .allTextContents as it doesn't wait and returns
  // an empty array and thus fails the assertion

  // but what if we need to use a non-auto-waiting method? Then we have alternative methods to add in dynamic waiting
});

test("Alternative Waits", async ({ page }) => {
  const dialogWithDelayForm = page.locator("nb-card", {
    hasText: "Open Dialog With Delay",
  });
  await dialogWithDelayForm.getByRole("button", { name: "3 seconds" }).click();
  const dialogContainer = page.locator("nb-dialog-container");

  // option 1 -- wait for the element
  // await dialogContainer.waitFor();
  // await page.waitForSelector('nb-dialog-container');

  // option 2 -- wait for api response
  // await page.waitForResponse("**/delay/*");
  // NOTE: The difference comes down to how Playwright handles wildcard
  // matching for URLs. **/delay/* matches because double asterisks span
  // across slashes (like https://), whereas a single leading asterisk
  // in */delay/* does not.When you pass a string to page.waitForResponse(),
  // Playwright treats it as a glob pattern under the hood. Here is exactly
  // why one worked and the other failed:Why **/delay/* Worked** is a
  // globstar (recursive wildcard). It matches any sequence of characters,
  // including forward slashes (/).When matching https://example.com, the **
  // easily consumes the entire protocol and domain prefix (https://example.com).
  // Why */delay/* FailedA single * matches any sequence of characters except
  // for a forward slash (/).Because URLs inherently contain slashes
  // (e.g., https://), the single asterisk gets blocked at the very first
  // slash it encounters in the protocol (https://). It cannot see past it
  // to match the rest of the domain or path.

  // option 3 -- wait for load state - NOT RECOMMENDED, BUT I'LL SEE IT IN THE WILD
  // await page.waitForLoadState('networkidle'); // should be the last resort when nothing else will work

  // opton 4 -- hardcoded wait, NEVER EVER EVER USE THIS ONE - MOST FLAKY OPTION OUT THERE
  await page.waitForTimeout(3500);

  const dialogHeaderText = await dialogContainer
    .locator("nb-card-header")
    .allTextContents();
  expect(dialogHeaderText).toContain("Friendly reminder");
  await expect(dialogContainer.locator('nb-card-header')).toHaveText('Friendly reminder', {timeout:6000}); // custom timeout on locator assertion
});

// using testInfo arg in our test callback
test("Timeouts", async ({ page }, testInfo) => {
  testInfo.setTimeout(testInfo.timeout + 3000);
  // test.setTimeout(120000); // set custom test timeout

  const dialogWithDelayForm = page.locator("nb-card", {
    hasText: "Open Dialog With Delay",
  });
  await dialogWithDelayForm.getByRole("button", { name: "3 seconds" }).click();
  const dialogContainer = page.locator("nb-dialog-container");

  // note below even if we have our config file set with all timeouts, we can give a custom timeout direclty to the
  // action in the test and configure at the individual framework test level
  // this works for locator assertions as well and per test by entering in another argument (pojo) or using customizing
  // the configuration timeout amount with the testInfo object in the test or the hook level
  await dialogContainer.getByRole('button', {name: 'Ok'}).click({timeout:4000});
});
