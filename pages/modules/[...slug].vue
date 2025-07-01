<script  setup>
const route = useRoute();
const activeId = ref(null);
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
//console.log("Page : ", page);

onMounted(() => {
  let elements = []
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break;
      }
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })

  setTimeout(() => {
    elements = document.querySelectorAll('h2')

    for (const element of elements) {
      observer.observe(element)
    }
  }, 150)

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})


</script>

<template>

  <template v-if="page" >
    <div class="grid grid-cols-8 gap-8">
    <ContentRenderer :value="page" class="col-span-6 module-content"/>
  <div class="col-span-2" v-if="page.body.toc">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">
                Table des matières
              </div>
              <nav>
                <TocLinks :links="page.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
          </div>
  </template>
  <template v-else>
    <div class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </template>

</template>
