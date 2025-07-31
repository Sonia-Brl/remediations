<template>
  <UModal :ui="{ width: 'md:max-w-4xl'}">
    <UButton :label="`${label}`" color="primary"class="scrib text-xl rounded-none  font-marker" size="xl" trailing-icon="i-lucide-arrow-right"/>

    <template #body>
      <slot class="h-48 m-4" />
    </template>
  </UModal>
</template>

<script setup>
defineProps({
     label: {
        type: String,
        default: 'Ouvrir'
    },
})
</script>