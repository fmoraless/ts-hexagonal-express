import express, { Application } from 'express'
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors'

class App {
  readonly expressApp: Application

  constructor() {
    this.expressApp = express()
  }

  mountHealthCheck() {
    this.expressApp.use('/', routerHealth)
  }

  mountMiddlewares() {
	this.expressApp.use(express.json())
	this.expressApp.use(express.urlencoded({ extended: true}))
  }

  mountError(): void {
	this.expressApp.use(HandlerErrors.notFound)
  }
}

export default new App().expressApp


