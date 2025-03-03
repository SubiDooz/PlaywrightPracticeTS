import {Page} from "@playwright/test";


class LeftMenuComponent{
    constructor(private readonly page: Page){}

    private readonly menu = (menuItem: string)=> this.page.getByRole('link', {'name': menuItem});

    async clickLeftMenuComponent(menuName: string){
        await this.menu(menuName).click();
    }

}

export default LeftMenuComponent;