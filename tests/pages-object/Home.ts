import {expect, type Locator, type Page } from '@playwright/test';

export class Home{
    readonly page: Page;
    readonly title;
    readonly url;
    readonly inputSun;
    readonly buttonSun;
    readonly totalSun;
    readonly buttonDeleteSun;
    readonly contentPresent;
    readonly buttonPresent;
    readonly operation;
    readonly inputDay;
    readonly checkboxDayAM;
    readonly checkboxDayPM;
    readonly totalDayAM;
    readonly totalDayPM;
    

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.locator('.date');
        this.url = 'https://www.doloandciebis.ovh/compta_test/accueil';
        this.inputSun = this.page.getByTestId('input-soleil');
        this.buttonSun = this.page.getByTestId('button-soleil');
        this.totalSun = this.page.getByTestId('total-soleil');
        this.buttonDeleteSun = this.page.getByTestId('supprimer-soleil');
        this.contentPresent = this.page.getByTestId('membre_1');
        this.buttonPresent = this.page.getByTestId('present_1');
        this.operation = this.page.getByTestId('operation_1');
        this.inputDay = this.page.getByTestId('jour_1');
        this.checkboxDayAM = this.page.getByTestId('presence_1_1_1');
        this.checkboxDayPM = this.page.getByTestId('presence_2_1_1');
        this.totalDayAM = this.page.getByTestId('total_1_1');
        this.totalDayPM = this.page.getByTestId('total_2_1');
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
    async checkSun(nb : number){
        await expect(this.totalSun).toBeVisible();
        await expect(this.totalSun).toHaveText(nb.toString() + " Soleil(s)");
    }
    async addSun(sun: string){
        await expect(this.inputSun).toBeVisible();
        await this.inputSun.fill(sun);
        await expect(this.buttonSun).toBeVisible();
        await this.buttonSun.click();
    }
    async deleteSun(){
        await expect(this.buttonDeleteSun).toBeVisible();
        await this.buttonDeleteSun.click();
    }
}