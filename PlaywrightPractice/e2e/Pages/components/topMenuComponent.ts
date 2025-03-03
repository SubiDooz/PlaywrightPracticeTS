import {Page} from "@playwright/test";

class TopMenuComponent{
    constructor(private readonly page: Page){}

    private readonly topMenu = (menuItem: string)=> this.page.getByRole('link', {'name': menuItem});

    async clickTopMenuComponent(menuName: string){
        await this.topMenu(menuName).click();
    }

}

export default TopMenuComponent;