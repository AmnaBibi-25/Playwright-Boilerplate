import { Page, Locator } from "@playwright/test";

export class NavigationPage {
    readonly page: Page
    readonly signUpLoginButton: Locator

    constructor(page: Page) {
        this.signUpLoginButton = page.locator('a[href="/login"]')
    }

}