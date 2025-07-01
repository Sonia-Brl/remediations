<template>
  <slot :posts="posts">
    <section class="">


      <ul>
        <li v-for="post in modules " :key="post._path">
          <NuxtLink :to="post._path" class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
            <div>{{ post.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const { data } = await useAsyncData(
  'ui-ux-list',
  () => {
    const query = queryContent('/modules/ui-ux')
      .where({ _path: { $ne: '/modules/ui-ux' } })

    if (props.limit) {
      query.limit(props.limit)
    }

    return query.find()
  }
)

const posts = computed(() => {
  if (!data.value) {
    return []
  }

  const result = []
  let lastYear = null

  for (const post of data.value) {
    post.title = title
    result.push(post)
  }

  return result
})
</script>
