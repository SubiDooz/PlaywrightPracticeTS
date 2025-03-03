import {test as base} from "@playwright/test";
import LoginPage from "../Pages/loginPage";
import HomePage from "../Pages/homePage";
import AddUserPage from "../Pages/addUserPage";

interface PageFixtures {
    loginPage: LoginPage;
    homePage: HomePage;
    addUserPage: AddUserPage;
}

export const test = base.extend<PageFixtures>({
    loginPage: async({page}, use)=>{
        await use(new LoginPage(page));
    },
    
    homePage: async({page}, use)=>{
        await use(new HomePage(page));
    },

    addUserPage: async({page}, use)=>{
        await use(new AddUserPage(page));
    }
});

export {expect} from "@playwright/test";