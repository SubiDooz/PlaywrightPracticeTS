import { Page } from "@playwright/test";

class AddUserPage{
    constructor(private readonly page: Page){
        this.page = page;
    }

    private readonly firstNameTextBox = this.page.getByRole('textbox', { name: 'First Name' });
    private readonly lastNameTextBox = this.page.getByRole('textbox', { name: 'Last Name' });
    private readonly idTextBox = this.page.locator('form').getByRole('textbox').nth(4);
    private readonly saveButton = this.page.getByRole('button',{name: 'Save'});
    public readonly saveMessage = this.page.getByText(/Successfully Saved/i);

    
    async addUser(firstName:string, lastName:string, id:string ){
        await this.firstNameTextBox.fill(firstName);
        await this.lastNameTextBox.fill(lastName);
        await this.idTextBox.fill(id);
        await this.saveButton.click();    
    }

}

export default AddUserPage;