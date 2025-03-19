import { test, expect } from '@playwright/test';
import { Connect } from './pages-object/Connect.ts';
import { Home } from './pages-object/Home.ts';

/*CAS PASSANT : ajouter et supprimer un soleil */
test('User can add and remove a sun', async ({ page }) => {
    const connect = new Connect(page);
    const home = new Home(page);
    await connect.goTo();
    await connect.checkURL();
    await connect.fillForm('emylia', 'Test1234');
    await home.checkURL();
    await home.checkSun(0);
    await home.addSun('test soleil');
    await home.checkSun(1);
    await home.deleteSun();
    await home.checkSun(0);
});