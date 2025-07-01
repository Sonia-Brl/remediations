<template>
  <UiUxPost v-slot="{ modules }" :limit="limit">
    <div v-for="post in modules " :key="modules .id">
      <NuxtLink :to="post._path">{{ modules .title }}</NuxtLink>
    </div>
  </UiUxPost>
</template>

<script setup>
defineProps({
  limit: {
    type: Number,
    default: null
  }
})
</script>