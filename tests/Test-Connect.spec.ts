import { test, expect } from '@playwright/test';
import { Connect } from './pages-object/Connect.ts';

/*CAS PASSANT : se connecter */
test('User can connect', async ({ page }) => {
    const connect = new Connect(page);
    await connect.goTo();
    await connect.checkURL();
    await connect.fillForm('emylia', 'Test1234');
});