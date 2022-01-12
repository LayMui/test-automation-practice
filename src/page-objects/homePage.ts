import { By, PageElement } from '@serenity-js/web'

export const homePage = {
  signInLink: () => PageElement.located(By.css('a[href="/users/sign_in"]')),
}


