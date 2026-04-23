import { Page, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export class BugPage {
    constructor(private page: Page) { }

    async submitBug(summary: string, description: string, resolution: string = '1') {
        await this.page.locator('input[name="summary"]').fill(summary);
        await this.page.locator('textarea[name="description"]').fill(description);
        await this.page.selectOption('select[name="severity"]', '1');
        await this.page.selectOption('select[name="priority"]', '1');
        await this.page.selectOption('select[name="assigned_to"]', '6');
        await this.page.selectOption('select[name="resolution"]', resolution);
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }


    async populateResolutionOptions() {

        const select = this.page.locator('select[name="resolution"]');
        const count = await select.locator('option').count();

        //printing all the value attribute and Text of each of the options in Resolution dropdown
        for (let i = 0; i < count; i++) {
            const option = select.locator('option').nth(i);
            const value = await option.getAttribute('value');
            const text = await option.textContent();
            console.log(`Value: ${value}, Text: ${text?.trim()}`);
        }
    }

}
