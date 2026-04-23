# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Sharelane Tests >> @regression Full Bug Submission Flow @e2e
- Location: tests\test.spec.ts:88:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect.toBeVisible: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "<---Back" [ref=e3] [cursor=pointer]:
    - /url: "javascript: history.go(-1)"
  - text: "| Test Portal |"
  - link "ShareLane homepage" [ref=e4] [cursor=pointer]:
    - /url: ../cgi-bin/main.py
  - text: "|"
  - link "QATutor.com" [ref=e5] [cursor=pointer]:
    - /url: https://www.qatutor.com
  - separator [ref=e6]
  - table [ref=e7]:
    - rowgroup [ref=e8]:
      - row "Helpers Account Creator Credit Card Generator Credit Card Balance Viewer DB Connect Utility Cookie Viewer UNIX Time Utility Bug Tracking Training BTS Bug Vault Automation Scripts Test Discounts (component automation) Test Search (end-to-end automation) Test Automation Source Code Release Engineering Environments Build Schedule Build Status build_log.txt More Stuff Basic Web page elements QA KnowledgeBase TS7122 Python Errors Application Source Code Crontab DB Schema Data Logs cc_transaction_log.txt Official ShareLane time" [ref=e9]:
        - cell "Helpers Account Creator Credit Card Generator Credit Card Balance Viewer DB Connect Utility Cookie Viewer UNIX Time Utility" [ref=e10]:
          - table [ref=e11]:
            - rowgroup [ref=e12]:
              - row "Helpers" [ref=e13]:
                - cell "Helpers" [ref=e14]:
                  - heading "Helpers" [level=2] [ref=e15]
              - row "Account Creator" [ref=e16]:
                - cell [ref=e17]:
                  - img [ref=e18]
                - cell "Account Creator" [ref=e19]:
                  - paragraph [ref=e20]:
                    - link "Account Creator" [ref=e21] [cursor=pointer]:
                      - /url: ../cgi-bin/create_account.py
              - row "Credit Card Generator" [ref=e22]:
                - cell [ref=e23]:
                  - img [ref=e24]
                - cell "Credit Card Generator" [ref=e25]:
                  - paragraph [ref=e26]:
                    - link "Credit Card Generator" [ref=e27] [cursor=pointer]:
                      - /url: ../cgi-bin/get_credit_card.py
              - row "Credit Card Balance Viewer" [ref=e28]:
                - cell [ref=e29]:
                  - img [ref=e30]
                - cell "Credit Card Balance Viewer" [ref=e31]:
                  - paragraph [ref=e32]:
                    - link "Credit Card Balance Viewer" [ref=e33] [cursor=pointer]:
                      - /url: ../cgi-bin/view_balance.py
              - row "DB Connect Utility" [ref=e34]:
                - cell [ref=e35]:
                  - img [ref=e36]
                - cell "DB Connect Utility" [ref=e37]:
                  - paragraph [ref=e38]:
                    - link "DB Connect Utility" [ref=e39] [cursor=pointer]:
                      - /url: ../cgi-bin/run_sql.py
              - row "Cookie Viewer" [ref=e40]:
                - cell [ref=e41]:
                  - img [ref=e42]
                - cell "Cookie Viewer" [ref=e43]:
                  - paragraph [ref=e44]:
                    - link "Cookie Viewer" [ref=e45] [cursor=pointer]:
                      - /url: ../cgi-bin/view_cookie.py
              - row "UNIX Time Utility" [ref=e46]:
                - cell [ref=e47]:
                  - img [ref=e48]
                - cell "UNIX Time Utility" [ref=e49]:
                  - paragraph [ref=e50]:
                    - link "UNIX Time Utility" [ref=e51] [cursor=pointer]:
                      - /url: ../cgi-bin/view_time.py
        - cell "Bug Tracking Training BTS Bug Vault Automation Scripts Test Discounts (component automation) Test Search (end-to-end automation) Test Automation Source Code Release Engineering Environments Build Schedule Build Status build_log.txt More Stuff Basic Web page elements QA KnowledgeBase TS7122 Python Errors" [ref=e52]:
          - table [ref=e53]:
            - rowgroup [ref=e54]:
              - row "Bug Tracking" [ref=e55]:
                - cell "Bug Tracking" [ref=e56]:
                  - heading "Bug Tracking" [level=2] [ref=e57]
              - row "Training BTS Bug Vault" [ref=e58]:
                - cell "Training BTS Bug Vault" [ref=e59]:
                  - table [ref=e60]:
                    - rowgroup [ref=e61]:
                      - row "Training BTS Bug Vault" [ref=e62]:
                        - cell "Training BTS" [ref=e63]:
                          - link "Training BTS" [active] [ref=e64] [cursor=pointer]:
                            - /url: ../bts_training.html
                        - cell "Bug Vault" [ref=e65]:
                          - link "Bug Vault" [ref=e66] [cursor=pointer]:
                            - /url: ../bugs/index.html
              - row "Automation Scripts" [ref=e67]:
                - cell "Automation Scripts" [ref=e68]:
                  - heading "Automation Scripts" [level=2] [ref=e69]
              - row "Test Discounts (component automation) Test Search (end-to-end automation) Test Automation Source Code" [ref=e70]:
                - cell "Test Discounts (component automation) Test Search (end-to-end automation) Test Automation Source Code" [ref=e71]:
                  - paragraph [ref=e72]:
                    - link "Test Discounts" [ref=e73] [cursor=pointer]:
                      - /url: ../cgi-bin/test_discounts.py
                    - text: (component automation)
                  - paragraph [ref=e74]:
                    - link "Test Search" [ref=e75] [cursor=pointer]:
                      - /url: ../cgi-bin/test_search.py
                    - text: (end-to-end automation)
                  - paragraph [ref=e76]:
                    - link "Test Automation Source Code" [ref=e77] [cursor=pointer]:
                      - /url: ./ta_source_code.html
              - row "Release Engineering" [ref=e78]:
                - cell "Release Engineering" [ref=e79]:
                  - heading "Release Engineering" [level=2] [ref=e80]
              - row "Environments Build Schedule Build Status build_log.txt" [ref=e81]:
                - cell "Environments Build Schedule Build Status build_log.txt" [ref=e82]:
                  - table [ref=e83]:
                    - rowgroup [ref=e84]:
                      - row "Environments Build Schedule Build Status build_log.txt" [ref=e85]:
                        - cell "Environments Build Schedule" [ref=e86]:
                          - paragraph [ref=e87]:
                            - link "Environments" [ref=e88] [cursor=pointer]:
                              - /url: ./environments.html
                          - paragraph [ref=e89]:
                            - link "Build Schedule" [ref=e90] [cursor=pointer]:
                              - /url: ./build_schedule.html
                        - cell "Build Status build_log.txt" [ref=e91]:
                          - paragraph [ref=e92]:
                            - link "Build Status" [ref=e93] [cursor=pointer]:
                              - /url: ./build_status.html
                          - paragraph [ref=e94]:
                            - link "build_log.txt" [ref=e95] [cursor=pointer]:
                              - /url: ./build_log.txt
              - row "More Stuff" [ref=e96]:
                - cell "More Stuff" [ref=e97]:
                  - heading "More Stuff" [level=2] [ref=e98]
              - row "Basic Web page elements QA KnowledgeBase TS7122 Python Errors" [ref=e99]:
                - cell "Basic Web page elements QA KnowledgeBase TS7122 Python Errors" [ref=e100]:
                  - table [ref=e101]:
                    - rowgroup [ref=e102]:
                      - row "Basic Web page elements QA KnowledgeBase TS7122 Python Errors" [ref=e103]:
                        - cell "Basic Web page elements QA KnowledgeBase" [ref=e104]:
                          - paragraph [ref=e105]:
                            - link "Basic Web page elements" [ref=e106] [cursor=pointer]:
                              - /url: ./html_elements.html
                          - paragraph [ref=e107]:
                            - link "QA KnowledgeBase" [ref=e108] [cursor=pointer]:
                              - /url: ./qa_kb.html
                        - cell "TS7122 Python Errors" [ref=e109]:
                          - paragraph [ref=e110]:
                            - link "TS7122" [ref=e111] [cursor=pointer]:
                              - /url: ./credit_card_payments.html
                          - paragraph [ref=e112]:
                            - link "Python Errors" [ref=e113] [cursor=pointer]:
                              - /url: ./python_errors.html
        - cell "Application Source Code Crontab DB Schema Data Logs cc_transaction_log.txt Official ShareLane time" [ref=e114]:
          - table [ref=e115]:
            - rowgroup [ref=e116]:
              - row "Application" [ref=e117]:
                - cell "Application" [ref=e118]:
                  - heading "Application" [level=2] [ref=e119]
              - row "Source Code Crontab" [ref=e120]:
                - cell "Source Code Crontab" [ref=e121]:
                  - paragraph [ref=e122]:
                    - link "Source Code" [ref=e123] [cursor=pointer]:
                      - /url: ./source_code.html
                  - paragraph [ref=e124]:
                    - link "Crontab" [ref=e125] [cursor=pointer]:
                      - /url: ./crontab.html
              - row "DB" [ref=e126]:
                - cell "DB" [ref=e127]:
                  - heading "DB" [level=2] [ref=e128]
              - row "Schema Data" [ref=e129]:
                - cell "Schema Data" [ref=e130]:
                  - paragraph [ref=e131]:
                    - link "Schema" [ref=e132] [cursor=pointer]:
                      - /url: ./db_schema.html
                  - paragraph [ref=e133]:
                    - link "Data" [ref=e134] [cursor=pointer]:
                      - /url: ./db_data.html
              - row "Logs" [ref=e135]:
                - cell "Logs" [ref=e136]:
                  - heading "Logs" [level=2] [ref=e137]
              - row "cc_transaction_log.txt" [ref=e138]:
                - cell "cc_transaction_log.txt" [ref=e139]:
                  - paragraph [ref=e140]:
                    - link "cc_transaction_log.txt" [ref=e141] [cursor=pointer]:
                      - /url: ./cc_transaction_log.txt
              - row [ref=e142]:
                - cell [ref=e143]:
                  - separator [ref=e144]
              - row "Official ShareLane time" [ref=e145]:
                - cell "Official ShareLane time" [ref=e146]:
                  - paragraph [ref=e147]:
                    - link "Official ShareLane time" [ref=e148] [cursor=pointer]:
                      - /url: ../cgi-bin/sharelane_time.py
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class PortalPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async openTestPortal() {
  7  |     const portal = this.page.getByRole('link', { name: 'Test Portal' }).first();
  8  |     await expect(portal).toBeVisible();
  9  |     await portal.click();
  10 |   }
  11 | 
  12 |   async openTrainingBTS() {
  13 |     const bts = this.page.getByRole('link', { name: 'Training BTS' });
  14 |     await expect(bts).toBeVisible();
  15 |     await bts.click();
  16 |   }
  17 | 
  18 |   async openSubmitBug() {
  19 |     const submitBug = this.page.getByRole('link', { name: 'Submit New Bug' });
> 20 |     await expect(submitBug).toBeVisible();
     |                             ^ Error: expect.toBeVisible: Target page, context or browser has been closed
  21 |     await submitBug.click();
  22 |   }
  23 | 
  24 |   async openCreditCardGenerator() {
  25 |     await this.page.getByRole('link', { name: 'Credit Card Generator' }).click();
  26 |   }
  27 | }
```