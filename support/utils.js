const { Builder, Browser } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const  createDriverWithCapabilities = async () =>  {
    try {
        let chromeOptions = new chrome.Options();
        chromeOptions.addArguments('--headed');
      
       

        let driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(chromeOptions)
            .build();

        return driver;
    } catch (error) {
        console.error("Error initializing the WebDriver:", error);
        throw error;
    }
   
}
module.exports = createDriverWithCapabilities