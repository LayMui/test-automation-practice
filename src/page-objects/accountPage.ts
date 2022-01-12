import { By, PageElement } from '@serenity-js/web'

export const accountPage = {
  emailInput: () =>
    PageElement.located(By.xpath("//input[@id='user[email]']")).describedAs(
      'email field'
    ),
}
