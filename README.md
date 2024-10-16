# NUXT-ESCSS-ESTest
Just a wrapper for ESCSS-ESTest to use ESTest function globally in Nuxt3

## Features
-  Enable global use in Nuxt 3
-  Same features as ESCSS-ESTest

## Usage

[see](https://github.com/ESCSS-labs/ESCSS-ESTest)

## Quick Setup

install

```bash
  # Using npm
  npm install nuxt-escss-estest

  # Using yarn
  yarn add nuxt-escss-estest

  # Using pnpm
  pnpm add nuxt-escss-estest

  # Using bun
  bun add nuxt-escss-estest
```

nuxt.config.{ts,js}

```bash
export default defineNuxtConfig({
  modules: [
    'nuxt-escss-estest'
  ]
})
```

same usage as escss-estest

```vue
<script setup>
ESTest('Happy Coding ✨', 'string', 'mike 09232024 1')
</script>
```

## LICENSE
[see](https://github.com/ESCSS-labs/ESCSS-ESTest?tab=License-1-ov-file)