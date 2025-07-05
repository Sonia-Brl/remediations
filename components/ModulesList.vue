
<template>
  <section class="container m-auto pt-4">
    <h2 :class="isPopOver ? 'text-center' : 'text-start'" >Liste des modules</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <slot :modules="modulList">
        
        <ul :class="isPopOver ? 'list-none' : 'grid list-none grid-cols-1 lg:grid-cols-2'"  class="gap-8">
          <li v-for="module in modulList" :key="module.path">
            <NuxtLink :to="{ path: module.path}" :class="isPopOver ? 'w-100 my-4' : 'module-card-big'"   class="module-card  ">{{module.name}}</NuxtLink>
          </li>
        </ul>
      </slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  isPopOver: {
    type:Boolean,
    default:false,
  },
});
const data = await queryCollection('docs').all();
const modulList = [];
// Grouper les éléments par module
if(data){
  data.map((item) => {
    const moduleName = item.meta?.module;
    const isSUmmary = item.meta?.summary;
    const isReady = item.meta?.ready;
    if (moduleName  && isSUmmary && isReady) {
      modulList.push({
        "path": item.path,
        "name":moduleName,
      })
    }
  });
}
</script>