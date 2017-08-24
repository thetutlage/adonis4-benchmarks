'use strict'

/*
|--------------------------------------------------------------------------
| Application Providers
|--------------------------------------------------------------------------
|
| Here we configure the providers required to run adonis application. They
| are registered only once and can be used inside any file using `use`
| keyword.
|
*/
const providers = [
  'adonis-framework/providers/ConfigProvider',
  'adonis-framework/providers/EnvProvider',
  'adonis-framework/providers/EventProvider',
  'adonis-framework/providers/HelpersProvider',
  'adonis-framework/providers/HashProvider',
  'adonis-framework/providers/MiddlewareProvider',
  'adonis-framework/providers/RequestProvider',
  'adonis-framework/providers/ResponseProvider',
  'adonis-framework/providers/RouteProvider',
  'adonis-framework/providers/ServerProvider',
  'adonis-framework/providers/StaticProvider',
  'adonis-framework/providers/ViewProvider'
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are specific to ace, and are not registered when starting
| http server. It helps in reducing boot time.
|
*/
const aceProviders = [
]

/*
|--------------------------------------------------------------------------
| Namespace Aliases
|--------------------------------------------------------------------------
|
| Each provider is registered with a long unique namespace. Here we alias
| them with a short unique name to keep our import statements short and
| sweet.
|
*/
const aliases = {
  Config: 'Adonis/Src/Config',
  Database: 'Adonis/Src/Database',
  Env: 'Adonis/Src/Env',
  Event: 'Adonis/Src/Event',
  Helpers: 'Adonis/Src/Helpers',
  Middleware: 'Adonis/Src/Middleware',
  Route: 'Adonis/Src/Route',
  View: 'Adonis/Src/View'
}

/*
|--------------------------------------------------------------------------
| Ace Commands
|--------------------------------------------------------------------------
|
| Ace Commands are also are registered inside the IoC container. Here we
| register with Ace Kernel using their unique namespace.
|
*/
const commands = []

module.exports = { providers, aceProviders, aliases, commands }
