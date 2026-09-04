import { test } from "@playwright/test";
/*
// test structures
test.describe("test suite 1", () => {
  test("this is a first test", () => {});
  test("this is a first test2", () => {});
  test("this is a first test3", () => {});
});

test.describe("test suite 2", () => {
  test("this is a first test", () => {});
  test("this is a first test2", () => {});
  test("this is a first test3", () => {});
});
*/

// the arg for our test callback is a 'fixture'. here we use {page}. They are used to establish a precise environment
// for our test. They act as a built-in dependency injection system that handles both setup and teardown lifecycles
// automatically. Instead of manually importing and invoking helper functions or managing scattered 'beforeEach' and
// 'afterEach' hooks, I simply declare fixtures that my tests need as destructured arguments '{page}'
// Built-in fixtures are: page, context, browser, and request
// Custom fixtures can be built to share page objects, mock data, or handle authentication states globally. To create a
// custom fixture, I extend the base test using test.extend()
// But we'll get into that in a later module. FYI, the 'page' fixture represents a new web page

/**
 * ASIDE: js destructuring -
 *
 * JS destructuring is a convenient syntax introduced in es6 that allows me to unpack values from arrays or properties
 * from objects directly into distinct variables. It eliminates repetitive code and makes my scripts much cleaner and
 * easier to read. (if I understand it)
 *
 * It extracts values based on the property keys inside the object so...
 * const user = {name: 'Alice', age: 25, city: 'Paris'};
 *
 * instead of doing: const name = user.name, I can do
 *
 * const {name,age} = user;
 *
 * I can also do some tricks like renaming variables, creating defaults, or using rest syntax
 *
 * const settings = {theme: 'dark', volume: 80};
 *
 * const {theme:activeTheme, volume, language='en',...rest} = settings;
 *
 * Array destructuring is similar but its based on order and we can also skip elements and gather the ...rest
 *
 * const numbers = [1,2,3,4,5];
 *
 * const [first,,third,...theRest] = numbers;
 *
 * So with this knowledge, what's happening in the function below is that our anony func is expecting an object with a
 * 'page' property, that's why we say ({page}) => {}. Playwright gives us an object with a property 'page' and we
 * automatically use it, as in the case below.
 *
 * function displayUser({name,age}){
 *   console.log(`${name} is ${age} years old.`);
 * }
 *
 * ... and our actual arguments would be something like:
 * const profile = {name:'kevin', age:49, email:'kevin@email.com'};
 * displayUser(profile);
 *
 * Then name and age are pulled out of that object. so below, 'page' is pulled out of the pw object
 *
 * Finally we can even get to deeply nested complex data by mimicking the structure of the object:
 *
 * const localData = {
 *   status: 'success',
 *   results: {
 *     metadata: {id: 99}
 *   }
 * }
 *
 * accessing id like...
 * const {results: {metadata: {id}}} = localData;
 * console.log(id);
 *
 */

// for cleaner code we can use 'hooks' so as not to repeat code in multiple test when possible
// and as seen below we can get pretty creative with .beforeEach and test.describe in the organization of our test runs
// and again remove repeated code (DRY)

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
});

test.describe("suite 1", () => {
  test.beforeEach(async ({ page }) => {
    // here we put the repetitive code to run before our tests. So as it says, its not running once at the beginning of
    // the file, but 'beforeEach' test. There is another one, '.beforeAll' tha runs only once at the beginning.
    await page.getByText("Forms").click();
  });

  test("this is a first test", async ({ page }) => {
    // a key feature in pw and its dynamic waits uses js/ts Promise objects so we must use async/await on any methods
    // that return a promise
    await page.getByText("Form Layouts").click();
  });

  test("this is a first test to DatePicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

// This Errors since there aren't any Form Layout or Datepicker under the Charts page
test.describe("suite 2", () => {
  test.beforeEach(async ({ page }) => {
    // here we put the repetitive code to run before our tests. So as it says, its not running once at the beginning of
    // the file, but 'beforeEach' test. There is another one, '.beforeAll' tha runs only once at the beginning.
    await page.getByText("Charts").click();
  });

  test("this is a first test", async ({ page }) => {
    // a key feature in pw and its dynamic waits uses js/ts Promise objects so we must use async/await on any methods
    // that return a promise
    await page.getByText("Form Layouts").click();
  });

  test("this is a first test to DatePicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

// in the same vein we have test.afterEach and .afterAll for any teardown, etc.
// though its not a great option due to what it may cause on following tests.
