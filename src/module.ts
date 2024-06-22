import { defineNuxtModule, addImports, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'ggc30',
    configKey: 'ggc30',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addImports({
      name: 'esTest', // name of the composable to be used
      from: resolver.resolve('./runtime/composable'), // path of composable
    })
  },
})
