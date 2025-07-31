<template>
  <UModal fullscreen>
    <UButton :label="`${label}`" color="primary"class="scrib text-xl rounded-none  font-marker" size="xl" trailing-icon="i-lucide-arrow-right"/>

    <template #body>
      <slot />
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