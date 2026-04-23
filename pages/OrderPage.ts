import { Page } from '@playwright/test';

export class OrderPage {
    constructor(private page: Page) { }

    async addBookAndCheckout() {

        // clicks on the first book
        await this.page.locator('table[width="300"] a').first().click();

        // clicks on add to cart 
        await this.page.locator('a[href*="add_to_cart.py"]').first().click();

        // clicks on shopping cart
        await this.page.locator('a[href*="shopping_cart.py"]').click();

        // updates quantitiy to 5
        await this.page.locator('input[name="q"]:visible').fill('5');

        // clicks on Update button
        await this.page.getByRole('button', { name: 'Update' }).click();

        // clicks on Checkout button
        await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click();
    }
}
