import { test } from "@playwright/test";

// test.beforeAll()  // executed once at beginning of file

test.beforeEach(async ({ page }) => { // global beforeEach
  await page.goto("https://playground.bondaracademy.com");
  await page.getByText("Forms").click();
});

test.describe("suite 1", () => {
  test.beforeEach(async ({ page }) => { // block level beforeEach
    await page.getByText("Form Layouts").click();
    // this hook will run before each test
  });

  test("this is a first test", async ({ page }) => {
  });

  test("this is a first test to datepicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

test.describe("suite 2", () => {
  test.beforeEach(async ({ page }) => {
    // this hook will run before each test
    await page.getByText("Charts").click();
  });

  test("this is a first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test("this is a first test to datepicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

// test.afterEach  // this hook is after each test
// test.afterAll // this hook is once after all tests
// these last two not considered good practice as they may impact following tests
