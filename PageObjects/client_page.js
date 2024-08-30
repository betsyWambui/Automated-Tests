// test/pages/HomePage.js
const  { By, until } = require ('selenium-webdriver');
const { faker } = require('@faker-js/faker');
const LoginPage = require("./base_page")


module.exports =  class ClientPage extends LoginPage {

    constructor(driver) {
        super()
        this.driver = driver;
        
    }
    async initializeElements() {
        this.borrowersNavbarField =  this.driver.findElement(By.linkText("Borrowers"))
        this.addBorrowerButton = this.driver.findElement(By.xpath("//a[contains(text(),'Add Borrower')]"))
        this.firstNameElement = this.driver.findElement(By.xpath("//input[@placeholder='First Name']]"))
        this.lastNameElement = this.driver.findElement(By.xpath("//input[@placeholder='Last Name']]"))
        this.contactNumberElement = this.driver.findElement(By.xpath("//input[@placeholder='Contact Number']]"))
        this.addressElement = this.driver.findElement(By.xpath("//input[@placeholder='Address']]"))
        this.emailElement = this.driver.findElement(By.xpath("//input[@placeholder='Email']]"))
        this.userNameElement = this.driver.findElement(By.xpath("//input[@placeholder='Username']]"))
        this.saveButtonElement = this.driver.findElement(By.xpath("//button[normalize-space()='Save']"))
    }
    
    async clickOnNavBarfield() {
       await this.borrowersNavbarField.click()
    }
    async clickAddBorrowerButton() {
        await this.addBorrowerButton.click()
    }
    async fillFormAndSubmit ( ){
        const firstName = faker.firstName();
        const lastName = faker.lastName();
        const address = faker.internet.address()
        const email = faker.internet.email();
        const contactNumber =faker.number()
        const userName = faker.findName()
        await this.firstNameElement.sendKeys(firstName)
        await this.lastNameElement.sendKeys(lastName)
        await this.contactNumberElement.sendKeys(contactNumber)
        await this.addressElement.sendKeys(address)
        await this.emailElement.sendKeys(email)
        await this.userNameElement.sendKeys(userName)
    }
    async clickSaveButton() {
        await this.saveButtonElement.click()
    }

};
