<template>
  <div>
    <UApp :locale="fr">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup lang="ts">
import { fr } from '@nuxt/ui/locale'
</script>