import { LoginPage } from "../pages/LoginPage"
import {Page} from "@playwright/test"
import { envConfig } from "../playwright.config";

export class LoginActions {
    constructor(private page: Page) {}
    async perform(email: string, password: string) {
        const loginPage = new LoginPage(this.page)
        await this.page.goto(envConfig.loginURL())
        await loginPage.emailAddressInput.fill(email)
        await loginPage.passwordInput.fill(password)
        await loginPage.loginBtn.click()
    }


}