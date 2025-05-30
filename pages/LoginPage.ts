import {Page, Locator} from "@playwright/test"

export class LoginPage {
    readonly page: Page
    readonly emailAddressInput: Locator
    readonly passwordInput: Locator
    readonly loginBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.emailAddressInput = page.locator('input[data-qa="login-email"]')
        this.passwordInput = page.locator('input[data-qa="login-password"]')
        this.loginBtn = page.getByRole('button', {name: "Login"})
    }
}