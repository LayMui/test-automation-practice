import 'expect-webdriverio'

import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { SignIn } from '../tasks/SignIn'
import { Navigate } from '@serenity-js/web'


if (!process.env.CIRCLECI) {
  require('dotenv').config()
}

Given(
  '{actor} is at ultimate qa site',
  async (actor: Actor) =>
    await actor.attemptsTo(Navigate.to(process.env.ULTIMATEQA_BASE_URL))
)

When(
  '{pronoun} create an account',
  async (actor: Actor, table: DataTable) => {
    const firstName = table.hashes()[0].firstName
    const lastName = table.hashes()[0].lastName
    const email = table.hashes()[0].email
    const password = table.hashes()[0].password
    await actor.attemptsTo(
      SignIn.toCreateNewAccount(firstName, lastName, email, password)
    )
  }
)

Then('{pronoun} is able have an account', async (actor: Actor) => {
  await actor.attemptsTo()
})
