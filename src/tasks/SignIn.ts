import { Duration, Task } from '@serenity-js/core'
import { Clear, Click, Enter, isVisible, Key, Press, Wait} from '@serenity-js/webdriverio'
import { accountPage } from '../page-objects/accountPage'
import { homePage } from '../page-objects/homePage'

export const SignIn= {
  toCreateNewAccount: (firstName: string, lastName: string, email: string, passsword: string) =>
    Task.where(
      `#actor want to create an account`,
      Wait.upTo(Duration.ofMilliseconds(80000)).until(
        homePage.signInLink(),
        isVisible()
      ),
     Click.on(homePage.signInLink()),
      Wait.upTo(Duration.ofMilliseconds(80000)).until(
        accountPage.emailInput(),
        isVisible()
    ),
    Enter.theValue(email).into(accountPage.emailInput())
    )
}
