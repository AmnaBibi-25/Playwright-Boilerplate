import { test, expect } from "@playwright/test"
import  signupData from "../test-data/signup.json"

test('sign up', async({page}) => {
    await page.goto('https://automationexercise.com/')
    await page.locator('a[href="/login"]').click()
    await page.locator('input[data-qa="signup-name"]').fill(signupData.firstname)
    await page.locator('input[data-qa="signup-email"]').fill(signupData.email)
    await page.getByRole('button', {name: "Signup"}).click()

    //Enter Account Information
    await page.getByLabel('Mrs').check()
    const nameLocator = page.locator('#name')
    await expect(nameLocator).toHaveValue(signupData.firstname)

    const emailLocator = page.locator('#email')
    await expect(emailLocator).toHaveValue(signupData.email)

    await page.locator('#password').fill(signupData.password)
    await page.selectOption('#days', signupData.birthDay)
    await page.selectOption('#months', signupData.birthMonth)
    await page.selectOption('#years', signupData.birthYear)

    //Address Information
    await page.locator('#first_name').fill(signupData.firstname)
    await page.locator('#last_name').fill(signupData.lastname)
    await page.locator('#address1').fill(signupData.address1)
    await page.selectOption('#country', signupData.country)
    await page.locator('#state').fill(signupData.state)
    await page.locator('#city').fill(signupData.city)
    await page.locator('#zipcode').fill(signupData.zipcode)
    await page.locator('#mobile_number').fill(signupData.mobileNumber)
    await page.getByRole('button', {name: "Create Account"}).click()

    //assertion
    const message = page.locator('[data-qa="account-created"]');
    await expect(message).toHaveText('Account Created!');
    await page.locator('[data-qa="continue-button"]').click()

})