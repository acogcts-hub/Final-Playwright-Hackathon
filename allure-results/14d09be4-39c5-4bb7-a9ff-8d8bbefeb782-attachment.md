# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Sharelane Tests >> Sad Path Account Creation @ui
- Location: tests\test.spec.ts:59:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Register' })
    - locator resolved to <input type="submit" value="Register"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- table [ref=e3]:
  - rowgroup [ref=e4]:
    - row "Shopping Cart" [ref=e5]:
      - cell "Shopping Cart" [ref=e6]:
        - table [ref=e7]:
          - rowgroup [ref=e8]:
            - row "Shopping Cart" [ref=e9]:
              - cell [ref=e10]:
                - link [ref=e11] [cursor=pointer]:
                  - /url: ./main.py
                  - img [ref=e12]
              - cell [ref=e13]
              - cell "Shopping Cart" [ref=e14]:
                - link "Shopping Cart" [ref=e15] [cursor=pointer]:
                  - /url: ./shopping_cart.py
                  - img [ref=e16]
                  - text: Shopping Cart
    - row "Search" [ref=e17]:
      - cell "Search" [ref=e18]:
        - generic [ref=e19]:
          - textbox [ref=e20]
          - button "Search" [ref=e21]
    - row "Sign Up" [ref=e22]:
      - cell "Sign Up" [ref=e23]:
        - paragraph [ref=e24]: Sign Up
    - row [ref=e25]:
      - cell [ref=e26]
    - row "First Name* swee567 Last Name 12345 Email* sQe Password* 12345 Confirm Password* 12345 Register *required" [ref=e27]:
      - cell "First Name* swee567 Last Name 12345 Email* sQe Password* 12345 Confirm Password* 12345 Register *required" [ref=e28]:
        - table [ref=e29]:
          - rowgroup [ref=e30]:
            - row [ref=e31]:
              - cell [ref=e32]
            - row "First Name* swee567 Last Name 12345 Email* sQe Password* 12345 Confirm Password* 12345 Register *required" [ref=e33]:
              - cell "First Name* swee567 Last Name 12345 Email* sQe Password* 12345 Confirm Password* 12345 Register *required" [ref=e34]:
                - table [ref=e35]:
                  - rowgroup [ref=e36]:
                    - row "First Name* swee567" [ref=e37]:
                      - cell "First Name*" [ref=e38]:
                        - paragraph [ref=e39]: First Name*
                      - cell "swee567" [ref=e40]:
                        - textbox [ref=e41]: swee567
                    - row "Last Name 12345" [ref=e42]:
                      - cell "Last Name" [ref=e43]:
                        - paragraph [ref=e44]: Last Name
                      - cell "12345" [ref=e45]:
                        - textbox [ref=e46]: "12345"
                    - row "Email* sQe" [ref=e47]:
                      - cell "Email*" [ref=e48]:
                        - paragraph [ref=e49]: Email*
                      - cell "sQe" [ref=e50]:
                        - textbox [ref=e51]: sQe
                    - row "Password* 12345" [ref=e52]:
                      - cell "Password*" [ref=e53]:
                        - paragraph [ref=e54]: Password*
                      - cell "12345" [ref=e55]:
                        - textbox [ref=e56]: "12345"
                    - row "Confirm Password* 12345" [ref=e57]:
                      - cell "Confirm Password*" [ref=e58]:
                        - paragraph [ref=e59]: Confirm Password*
                      - cell "12345" [ref=e60]:
                        - textbox [ref=e61]: "12345"
                    - row "Register" [ref=e62]:
                      - cell [ref=e63]
                      - cell "Register" [ref=e64]:
                        - button "Register" [active] [ref=e65]
                    - row "*required" [ref=e66]:
                      - cell "*required" [ref=e67]
                    - row [ref=e68]:
                      - cell [ref=e69]
            - row [ref=e70]:
              - cell [ref=e71]
    - row "QATutor.com | Test Portal | Python Source File | Contact" [ref=e72]:
      - cell "QATutor.com | Test Portal | Python Source File | Contact" [ref=e73]:
        - link "QATutor.com" [ref=e74] [cursor=pointer]:
          - /url: https://www.qatutor.com
        - text: "|"
        - link "Test Portal" [ref=e75] [cursor=pointer]:
          - /url: ../test_portal.html
        - text: "|"
        - link "Python Source File" [ref=e76] [cursor=pointer]:
          - /url: ../source_files/register_bright_normal.html
        - text: "|"
        - link "Contact" [ref=e77] [cursor=pointer]:
          - /url: mailto:roman@qatutor.com
```

# Test source

```ts
  1  | ﻿import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class AuthPage {
  4  |     constructor(private page: Page) { }
  5  | 
  6  |     async createAccountAutoLogin() {
  7  |         await this.page.getByRole('link', { name: 'Create new account' }).click();
  8  |         await this.page.getByRole('button', { name: 'Auto Login' }).click();
  9  |     }
  10 | 
  11 |     async signUp(zip: string, first: string, last: string, email: string, password: string) {
  12 |         await this.page.getByRole('link', { name: 'Sign up' }).click();
  13 |         await this.page.locator('input[name="zip_code"]').fill(zip);
  14 |         await this.page.getByRole('button', { name: 'Continue' }).click();
  15 | 
  16 |         await this.page.locator('input[name="first_name"]').fill(first);
  17 |         await this.page.locator('input[name="last_name"]').fill(last);
  18 |         await this.page.locator('input[name="email"]').fill(email);
  19 |         await this.page.locator('input[name="password1"]').fill(password);
  20 |         await this.page.locator('input[name="password2"]').fill(password);
> 21 |         await this.page.getByRole('button', { name: 'Register' }).click();
     |                                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |     }
  23 | 
  24 |     async getCredentials() {
  25 |         return {
  26 |             email: await this.page.locator('td:has-text("Email")+td').innerText(),
  27 |             password: await this.page.locator('td:has-text("Password")+td').innerText()
  28 |         };
  29 |     }
  30 | 
  31 |     async login(email: string, password: string) {
  32 |         await this.page.goto('https://www.sharelane.com/cgi-bin/main.py');
  33 |         await this.page.fill('input[name="email"]', email);
  34 |         await this.page.fill('input[name="password"]', password);
  35 |         await this.page.getByRole('button', { name: 'Login' }).click();
  36 |     }
  37 | 
  38 |     async successStatus() {
  39 |         // placeholder for future sign-in status assertions
  40 |     }
  41 | 
  42 |     async expectSignUpSuccess(expectedMessage: string) {
  43 |         await expect(this.page.locator('.confirmation_message')).toHaveText(expectedMessage);
  44 |     }
  45 | 
  46 |     async expectSignUpFailure(expectedError: string) {
  47 |         await expect(this.page.locator('.error_message')).toHaveText(expectedError);
  48 |     }
  49 | }
  50 | 
```