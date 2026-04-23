import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { PortalPage } from "../pages/PortalPage";
import { AuthPage } from "../pages/AuthPage";
import { BugPage } from "../pages/BugPage";
import { OrderPage } from "../pages/OrderPage";
import { CreditCardPage } from "../pages/CreditCardPage";

//test.json contains all the static values as key value pairs
import Data from "../test.json";


// run Allure Report: allure generate allure-results -o allure-report --clean
// opne Allure report: allure open allure-report

test.describe("Sharelane Tests", () => {

    // This before each is going to open the sharelane website
    // and also click the ENTER link.
    test.beforeEach(async ({ page }) => {
        // creating object with HomePage class to access its methods
        const home = new HomePage(page);
        await home.open();
        await home.clickEnter();
    });

    // Below test is for successful creation of account
    test("Happy Path Account Creation @smoke @ui", async ({ page },testInfo) => {

        // home and auth are objects created using the classes mentioned below
        // const home = new HomePage(page);
        const auth = new AuthPage(page);

        //opens home page of sharelane
        // await home.open();
        // await page.pause()

        // await home.clickEnter();
        // await page.pause()

        // importing data from test.json and sending to signUp method
        // fills all the fields and clicks on Register button
        await auth.signUp(
            Data.happyPath.zip,
            Data.happyPath.firstName,
            Data.happyPath.lastName,
            Data.happyPath.email,
            Data.happyPath.password,
        );

        // Assertion to verify account creation
        // Checks the message that appears on the page
        await auth.expectSignUpSuccess(Data.happyPath.successMessage);

        //Takes screenshot of page with the success message 
        await page.screenshot({ path: './screenshots/test-1.png' });
            await testInfo.attach('Account created successfully', {
            path: './screenshots/test-1.png',
            contentType: 'image/png'
        });
    });

    test("Sad Path Account Creation @ui", async ({ page },testInfo) => {
        // const home = new HomePage(page);
        const auth = new AuthPage(page);
        // await page.pause()

        // await home.open();
        // await home.clickEnter();
        // importing data from test.json and sending to signUp method
        await auth.signUp(
            Data.sadPath.zip,
            Data.sadPath.firstName,
            Data.sadPath.lastName,
            Data.sadPath.email,
            Data.sadPath.password,
        );

        // has a assertion to verify error message when account creation fails
        await auth.expectSignUpFailure(Data.sadPath.errorMessage);
        
        // screenshot of the error message and attaching it to report
        await page.screenshot({ path: './screenshots/test-2.png' });
        await testInfo.attach('Showing Error Message', {
            path: './screenshots/test-2.png',
            contentType: 'image/png'
        });

    });


    test("@regression Full Bug Submission Flow @e2e", async ({ page },testInfo) => {
        // const home = new HomePage(page);
        const portal = new PortalPage(page);
        const auth = new AuthPage(page);
        const bug = new BugPage(page);

        // await home.open();
        // await page.pause();

        // await home.clickEnter();

        // clicks on "Test Portal" link
        await portal.openTestPortal();
        
        // clicks on the "Training BTS" link
        await portal.openTrainingBTS();

        //clicks on the "Submit New Bug" link
        await portal.openSubmitBug();

        //clicks on the "Create new account" link
        //clicks on the "Auto Login" button
        await auth.createAccountAutoLogin();

        // again click on Test Portal Link
        await portal.openTestPortal();

        // again click on Training BTS link
        await portal.openTrainingBTS();

        // again click on "Submit New Bug" link
        await portal.openSubmitBug();

        // scan all the options in Resolution Drop Down menu and print them
        await bug.populateResolutionOptions(); 

        // Fills all details of Bug and also clicks of Submit button
        // The argument that we are passing is the bug summary & description
        // await bug.submitBug(
        //     "Login page not reloaded properly",
        //     "When I enter the username and password the login page is not loading properly.",
        // );


        // Fills all details of Bug and also clicks on Submit button
        // The arguments are the bug summary & description
        await bug.submitBug(Data.bug.summary, Data.bug.description);


        // await bug.updateBug();
        // await page.pause()
        
        //Attaching success of bug submission
        await page.screenshot({ path: './screenshots/test-3.png' });
        await testInfo.attach('Bug Submission', {
            path: './screenshots/test-3.png',
            contentType: 'image/png'
        });

    });

    test("Register and Order Flow @ui @e2e", async ({ page },testInfo) => {
        // const home = new HomePage(page);
        // await page.pause()

        const auth = new AuthPage(page);
        const portal = new PortalPage(page);
        const order = new OrderPage(page);
        const card = new CreditCardPage(page);

        // await home.open();
        // await home.clickEnter();

        // Signing up the page bu filling the details
        await auth.signUp(
            Data.happyPath.zip,
            Data.happyPath.firstName,
            Data.happyPath.lastName,
            Data.happyPath.email,
            Data.happyPath.password,
        );

        // extract the email and password from the page. This methods returns them as an object
        // "creds" contains the email and pass in the form of an object
        const creds = await auth.getCredentials();

        // now login using the object in creds
        await auth.login(creds.email, creds.password);


        // clicks on the first book
        // clicks on add to cart 
        // clicks on shopping cart
        // updates quantitiy to 5
        // clicks on Update button
        // clicks on Checkout button
        await order.addBookAndCheckout();

        // open Test Portal link to generate Credit Card
        await portal.openTestPortal();

        //open credit card generator link
        await portal.openCreditCardGenerator();

        //select card type and click Generate button
        //cardNumber holds the returned card number from the method
        const cardNumber = await card.generateCard();

        //fill the card number and click Make Payment
        await card.pay(cardNumber);

        //check success message
        await expect(page.getByText(Data.bookOrder.orderSuccess)).toBeVisible();
        // await page.pause()

        //Screenshot of successfull order placement
        await page.screenshot({ path: './screenshots/test-4.png' });
        await testInfo.attach('Register and order', {
            path: './screenshots/test-4.png',
            contentType: 'image/png'
        });
    });
});
