import {test, expect } from "../fixtures/customFixtures";
import {Env} from "../frameworkConfig/env";

test("Testing add user functionality", async({page, loginPage, homePage, addUserPage})=>{
    await page.goto(Env.BASE_URL);
    await loginPage.login(Env.USERNAME,Env.PASSWORD);

    homePage.getLeftMenuComponent().clickLeftMenuComponent('PIM');
    homePage.getTopMenuComponent().clickTopMenuComponent('Add Employee');

    await addUserPage.addUser('Subh', 'Mukh', '1234');
    
    await expect (addUserPage.saveMessage).toBeVisible();
});