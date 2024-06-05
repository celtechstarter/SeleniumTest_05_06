const { Builder, By, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

// afterAll(async () => {
//   await driver.quit();
// });

test("Hier möchte ich meinen Webseiten Titel Testen (T1 Fanpage)", async () => {
  await driver.get("http://localhost:3000");
  const title = await driver.getTitle();
  expect(title).toBe("T1 Fanpage");
});

test("Klicke auf den Roster Button", async () => {
  await driver.wait(
    until.elementLocated(By.xpath("/html/body/div[1]/a[2]")),
    5000
  );


  // hier sage ich, dass er 3 Sekunden verzögert auf den Roster Button klicken soll
  setTimeout(async () => {
    let button = await driver.findElement(By.xpath("/html/body/div[1]/a[2]"));
    await button.click();
  }, 3000);
});
