# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Sharelane Tests >> Sad Path Account Creation @ui
- Location: tests\test.spec.ts:59:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'ENTER' })
    - locator resolved to <a href="../cgi-bin/main.py">…</a>
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
    - row [ref=e5]:
      - cell [ref=e6]:
        - img [ref=e7]
    - row [ref=e8]:
      - cell [ref=e9]:
        - separator [ref=e10]
    - row "This website is created for educational purposes only" [ref=e11]:
      - cell "This website is created for educational purposes only" [ref=e12]:
        - paragraph [ref=e13]: This website is created for educational purposes only
    - row "SHARELANE.COM is a practical addition to the QATUTOR.COM and QAMENTOR.COM courses on SQA and Testing." [ref=e14]:
      - cell "SHARELANE.COM is a practical addition to the QATUTOR.COM and QAMENTOR.COM courses on SQA and Testing." [ref=e15]:
        - paragraph [ref=e16]: SHARELANE.COM is a practical addition to the QATUTOR.COM and QAMENTOR.COM courses on SQA and Testing.
    - 'row "You can enroll here: QATutor.com" [ref=e17]':
      - 'cell "You can enroll here: QATutor.com" [ref=e18]':
        - paragraph [ref=e19]:
          - text: "You can enroll here:"
          - link "QATutor.com" [ref=e20] [cursor=pointer]:
            - /url: https://www.qatutor.com
    - row "-----------------------------------------------------" [ref=e21]:
      - cell "-----------------------------------------------------" [ref=e22]:
        - paragraph [ref=e23]: "-----------------------------------------------------"
    - row "No products are real on this site" [ref=e24]:
      - cell "No products are real on this site" [ref=e25]:
        - paragraph [ref=e26]: No products are real on this site
    - row "Never insert your real credit card or personal information on this site" [ref=e27]:
      - cell "Never insert your real credit card or personal information on this site" [ref=e28]:
        - paragraph [ref=e29]: Never insert your real credit card or personal information on this site
    - row "-----------------------------------------------------" [ref=e30]:
      - cell "-----------------------------------------------------" [ref=e31]:
        - paragraph [ref=e32]: "-----------------------------------------------------"
    - row "To protect your privacy, First name, Last name and email inserted during registration will be changed to dynamically generated values" [ref=e33]:
      - cell "To protect your privacy, First name, Last name and email inserted during registration will be changed to dynamically generated values" [ref=e34]:
        - paragraph [ref=e35]: To protect your privacy, First name, Last name and email inserted during registration will be changed to dynamically generated values
    - row "Password for each user account will be set to '1111'" [ref=e36]:
      - cell "Password for each user account will be set to '1111'" [ref=e37]:
        - paragraph [ref=e38]: Password for each user account will be set to '1111'
    - row "Address for each user account will be set to '12 Share Lane, San Francisco, CA, USA'" [ref=e39]:
      - cell "Address for each user account will be set to '12 Share Lane, San Francisco, CA, USA'" [ref=e40]:
        - paragraph [ref=e41]: Address for each user account will be set to '12 Share Lane, San Francisco, CA, USA'
    - row "-----------------------------------------------------" [ref=e42]:
      - cell "-----------------------------------------------------" [ref=e43]:
        - paragraph [ref=e44]: "-----------------------------------------------------"
    - 'row "All user generated data: accounts, transactions, credit cards is purged hourly at 00 minutes. So, if you create account at 14:12, it''ll be deleted at 15:00" [ref=e45]':
      - 'cell "All user generated data: accounts, transactions, credit cards is purged hourly at 00 minutes. So, if you create account at 14:12, it''ll be deleted at 15:00" [ref=e46]':
        - paragraph [ref=e47]: "All user generated data: accounts, transactions, credit cards is purged hourly at 00 minutes. So, if you create account at 14:12, it'll be deleted at 15:00"
    - row "-----------------------------------------------------" [ref=e48]:
      - cell "-----------------------------------------------------" [ref=e49]:
        - paragraph [ref=e50]: "-----------------------------------------------------"
    - row "Make sure to have cookies and JavaScript enabled" [ref=e51]:
      - cell "Make sure to have cookies and JavaScript enabled" [ref=e52]:
        - paragraph [ref=e53]: Make sure to have cookies and JavaScript enabled
    - row "-----------------------------------------------------" [ref=e54]:
      - cell "-----------------------------------------------------" [ref=e55]:
        - paragraph [ref=e56]: "-----------------------------------------------------"
    - row "By clicking link 'ENTER' you certify that you understand all information said above and agree that owners of ShareLane.com, QAMentor.com and QATutor.com will not be liable for any direct, indirect or consequential loss or damage arising in connection with our websites, whether arising in tort, contract, or otherwise, including, without limitation, any loss of profit, contracts, business, goodwill, data, income, revenue or anticipated savings." [ref=e57]:
      - cell "By clicking link 'ENTER' you certify that you understand all information said above and agree that owners of ShareLane.com, QAMentor.com and QATutor.com will not be liable for any direct, indirect or consequential loss or damage arising in connection with our websites, whether arising in tort, contract, or otherwise, including, without limitation, any loss of profit, contracts, business, goodwill, data, income, revenue or anticipated savings." [ref=e58]:
        - paragraph [ref=e59]: By clicking link 'ENTER' you certify that you understand all information said above and agree that owners of ShareLane.com, QAMentor.com and QATutor.com will not be liable for any direct, indirect or consequential loss or damage arising in connection with our websites, whether arising in tort, contract, or otherwise, including, without limitation, any loss of profit, contracts, business, goodwill, data, income, revenue or anticipated savings.
    - row [ref=e60]:
      - cell [ref=e61]:
        - paragraph [ref=e62]
    - row "ENTER" [ref=e63]:
      - cell "ENTER" [ref=e64]:
        - paragraph [ref=e65]:
          - link "ENTER" [active] [ref=e66] [cursor=pointer]:
            - /url: ../cgi-bin/main.py
```

# Test source

```ts
  1  | import { Page, expect } from "@playwright/test";
  2  | 
  3  | export class HomePage {
  4  |     constructor(private page: Page) { }
  5  | 
  6  |     async open() {
  7  |         await this.page.goto("https://www.sharelane.com/");
  8  |     }
  9  | 
  10 |     async clickEnter() {
  11 |         const enter = this.page.getByRole("link", { name: "ENTER" });  
  12 |         await expect(enter).toBeVisible();
> 13 |         await enter.click();
     |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  14 |     }
  15 | }
  16 | 
  17 | 
  18 | 
```