import { by, Target } from "@serenity-js/webdriverio";

 
 
export const accountPage = {
  emailInput: () => Target.the('email field').located(by.id('user[email]')),
}


 
 
 