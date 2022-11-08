// import {employeePage as emPage} from "./employeeManagerTest.test" 

let emPage = new employeePage(driver)
test("adding an employee", async () => {
    await driver.wait(until.elementLocated(emPage.header))
    await driver.findElement(emPage.addEmployee).click()
    await driver.findElement(emPage.newEmployee).click()
    await driver.findElement(emPage.nameInput).click()
    await driver.findElement(emPage.nameInput).clear()
    await driver.findElement(emPage.nameInput).sendKeys("Change this")
    await driver.findElement(emPage.phoneInput).click()
    await driver.findElement(emPage.phoneInput).clear()
    await driver.findElement(emPage.phoneInput).sendKeys("Change this")
    await driver.findElement(emPage.titleInput).click()
    await driver.findElement(emPage.titleInput).clear()
    await driver.findElement(emPage.titleInput).sendKeys("Change this")
})