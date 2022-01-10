import { by, Target } from '@serenity-js/webdriverio'


export const homePage = {   
  signInLink: () =>  Target.the('sign up link').located(by.linkText('Sign In'))
}



