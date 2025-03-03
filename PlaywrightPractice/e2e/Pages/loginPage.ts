import {Page} from "@playwright/test";

class LoginPage{
    constructor(private readonly page: Page){}
    

    private readonly userNameTextBox = this.page.getByRole('textbox', { name: 'Username' });
    private readonly passwordBox = this.page.getByRole('textbox', { name: 'Password' });
    private readonly loginButton = this.page.getByRole('button', { name: 'Login' });

    async login(username: string, password: string){
        await this.userNameTextBox.fill(username);
        await this.passwordBox.fill(password);
        await this.loginButton.click();
    }

}

export default LoginPage;