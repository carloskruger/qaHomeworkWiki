import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
        addEmployee: By = By.name('addEmployee')
        headerLogo: By = By.className('titleText')
        nameInput: By = By.name('nameEntry')
        phoneInput: By = By.name('phoneEntry')
        titleInput: By = By.name('titleEntry')
        constructor(driver: WebDriver) {
            this.driver = driver
        }
        async navigate() {
            await this.driver.get(this.url)
            await this.driver.wait(until.elementLocated(this.headerLogo))
            await this.driver.wait(until.elementIsVisible(await driver.findElement(this.addEmployee)))
        }
        async sendKeys(elementBy: By, keys) {
            await this.driver.wait(until.elementLocated(elementBy));
            return driver.findElement(elementBy).sendKeys(keys);
        
        }
  }
  const emPage = new employeePage(driver); 
  

  describe("Employee Manager Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      })
      afterAll(async () => {
          await driver.quit()
      })
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.headerLogo))
          await driver.findElement(emPage.addEmployee)
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("Carlos")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("99999")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Vice President")
  })
  })
  /* this is a commment */