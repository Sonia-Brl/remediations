<template>
  <div>
 <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.path)

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})


</script>