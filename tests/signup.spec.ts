import { test, expect } from "@playwright/test"
import  signupData from "../test-data/signup.json"
import { SignUpPage } from "../pages/SignUpPage"
import { NavigationPage } from "../pages/NavigationPage"

test('sign up', async({page}) => {
    await page.goto('https://automationexercise.com/')
    const signUpPage = new SignUpPage(page);
    const navigationPage = new NavigationPage(page);
    await navigationPage.signUpLoginButton.click()
    await signUpPage.nameInput.fill(signupData.firstname)
    await signUpPage.emailAddressInput.fill(signupData.email)
    await signUpPage.signUpBtn.click()

    //Enter Account Information
    await signUpPage.genderRadioBtn.check()
    await expect(signUpPage.nameField).toHaveValue(signupData.firstname)

    await expect(signUpPage.emailField).toHaveValue(signupData.email)

    await signUpPage.passwordField.fill(signupData.password)
    await signUpPage.selectBirthDay(signupData.birthDay, signupData.birthMonth, signupData.birthYear)

    //Address Information
    await signUpPage.firstNameInput.fill(signupData.firstname)
    await signUpPage.lastNameInput.fill(signupData.lastname)
    await signUpPage.address1Input.fill(signupData.address1)
    await signUpPage.selectCountry(signupData.country)
    await signUpPage.stateInput.fill(signupData.state)
    await signUpPage.cityInput.fill(signupData.city)
    await signUpPage.zipcodeInput.fill(signupData.zipcode)
    await signUpPage.mobileNumberInput.fill(signupData.mobileNumber)
    await signUpPage.createAccountBtn.click()

    //assertion
    await expect(signUpPage.accountCreatedMessgeText).toHaveText('Account Created!');
    await signUpPage.continueBtn.click()

})