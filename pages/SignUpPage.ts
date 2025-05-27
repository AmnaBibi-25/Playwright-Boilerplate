import {Page, Locator} from "@playwright/test"

export class SignUpPage {
    readonly page: Page

    readonly nameInput: Locator
    readonly emailAddressInput: Locator
    readonly signUpBtn: Locator
    readonly genderRadioBtn: Locator
    readonly nameField: Locator
    readonly emailField: Locator
    readonly passwordField: Locator
    readonly daysDropdown: Locator
    readonly monthsDropdown: Locator
    readonly yearsDropdown: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly address1Input: Locator
    readonly countryInput: Locator
    readonly stateInput: Locator
    readonly cityInput: Locator
    readonly zipcodeInput: Locator
    readonly mobileNumberInput: Locator
    readonly createAccountBtn: Locator
    readonly accountCreatedMessgeText: Locator
    readonly continueBtn: Locator


    constructor(page: Page) {
        this.page = page

        this.nameInput = page.locator('input[data-qa="signup-name"]')
        this.emailAddressInput = page.locator('input[data-qa="signup-email"]')
        this.signUpBtn = page.getByRole('button', {name: "Signup"})

        this.genderRadioBtn = page.getByLabel('Mrs')
        this.nameField = page.locator('#name')
        this.emailField = page.locator('#email')
        this.passwordField = page.locator('#password')
        this.daysDropdown = page.locator('#days')
        this.monthsDropdown = page.locator('#months')
        this.yearsDropdown = page.locator('#years')
        this.firstNameInput = page.locator('#first_name')
        this.lastNameInput = page.locator('#last_name')
        this.address1Input = page.locator('#address1')
        this.countryInput = page.locator('#country')
        this.stateInput = page.locator('#state')
        this.cityInput = page.locator('#city')
        this.zipcodeInput = page.locator('#zipcode')
        this.mobileNumberInput = page.locator('#mobile_number')
        this.createAccountBtn = page.getByRole('button', {name: "Create Account"})
        this.accountCreatedMessgeText = page.locator('[data-qa="account-created"]')
        this.continueBtn = page.locator('[data-qa="continue-button"]')
    }

    async selectBirthDay(day: string, month: string, year: string) {
        await this.daysDropdown.selectOption(day)
        await this.monthsDropdown.selectOption(month)
        await this.yearsDropdown.selectOption(year)
    }

    async selectCountry(country: string) {
        await this.countryInput.selectOption(country)
    }
}