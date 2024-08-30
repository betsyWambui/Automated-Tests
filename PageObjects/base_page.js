// test/pages/HomePage.js
const  { By, until } = require ('selenium-webdriver');
const  dotenv  = require( 'dotenv')
const path  = require('path' )

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

class LoginPage {
    constructor(driver) {
        this.driver = driver

    }

    async open() {
        await this.driver.get(process.env.LOAN_MGMENT_URL);
        await this.initializeElements();  // Initialize elements after the page is loaded
    }

    async initializeElements() {
        this.usernameField = await this.driver.findElement(By.id("username"));
        this.passwordField = await this.driver.findElement(By.id("password"));
        this.signInButton = await this.driver.findElement(By.xpath("//button[contains(text(),'Sign In')]"));
    }

    async signInAdmin() {
        await this.usernameField.sendKeys(process.env.USERNAME)
        await this.passwordField.sendKeys(process.env.PASSWORD)
        await this.signInButton.click()
        await this.driver.wait(until.urlIs('http://localhost:3000/home'), 10000);
    }
}
module.exports =  LoginPage
