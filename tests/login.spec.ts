import {test, expect} from "@playwright/test"
import { LoginActions } from "../actions/LogicActions"
import loginData from "../test-data/login.json"

test('login', async({page}) => {
    const login = new LoginActions(page)
    await login.perform(loginData.email, loginData.password)
    await expect(page).toHaveTitle("Automation Exercise")
})