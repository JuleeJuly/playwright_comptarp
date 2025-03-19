import {expect,type Locator, type Page } from '@playwright/test';

export class Connect {
    readonly page: Page;
    readonly title;
    readonly url;
    readonly login;
    readonly password;
    readonly submit_button;
    
    constructor(page: Page) {
        this.page = page;
        this.title = 'Connexion';
        this.url = 'https://www.doloandciebis.ovh/compta_test/index.php';
        this.login = this.page.getByTestId('input-login');
        this.password = this.page.getByTestId('input-password');
        this.submit_button = this.page.getByTestId('button-connect');
    }

    async checkURL(){
        await expect(this.page).toHaveURL(this.url);
    }
    async checkTitle(){
        await expect(this.page).toHaveTitle(this.title);
    }
    async goTo(){
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto(this.url);
        this.checkTitle();
    }
    async fillForm(login: string, password: string){
        await expect(this.login).toBeVisible();
        await this.login.fill(login);
        await expect(this.password).toBeVisible();
        await this.password.fill(password);
        await this.submit_button.click();
    }
}