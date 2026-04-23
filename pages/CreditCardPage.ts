import { Page } from '@playwright/test';

export class CreditCardPage {
    constructor(private page: Page) { }

    async generateCard(): Promise<string> {
        await this.page.selectOption('select[name="type"]', 'AmEx');
        await this.page.getByRole('button', { name: 'Generate Credit Card' }).click();
        
        //returning the card number
        return await this.page.locator('td span b').innerText();
    }

    async pay(cardNumber: string) {

        // we will go back 3 times to arrive at the checkout page
        for (let i = 0; i < 3; i++) await this.page.goBack();

        await this.page.fill('[name="card_number"]', cardNumber);
        await this.page.getByRole('button', { name: 'Make Payment' }).click();
    }
}           