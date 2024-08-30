
const  LoginPage  = require ("../PageObjects/base_page");
const ClientPage = require ("../PageObjects/client_page");
const  createDriverWithCapabilities  = require("../support/utils")


describe("Client Functionality",  async() => {
    let driver;
    let loginPage;
    let clientPage;
    before(async () => {

        driver = await createDriverWithCapabilities()
        loginPage = new LoginPage(driver)
        clientPage = new ClientPage(driver)
    })
    after(async ( ) => {
        await driver.quit()
    })

    it.only("verify admin can login successfully", async  () =>  {
        
        await loginPage.open()
        await loginPage.signInAdmin()
    })

    // it.only("verify admin can create a client", async () => {
    //     await clientPage.open()
    //     await clientPage.signInAdmin()
    //     await clientPage.clickOnNavBarfield() 
    //     await clientPage.clickAddBorrowerButton()
    //     await clientPage.fillFormAndSubmit()
    //     await clientPage.clickSaveButton()
    // })    
  })