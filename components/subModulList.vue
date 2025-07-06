
<template>
  <div class="modules-navigation my-8">
    <UNavigationMenu  
    highlight
    highlight-color="primary"  
    orientation="vertical" 
    :items="items" 
    class="data-[orientation=vertical]:w-full list-none " />
  </div>
</template>



<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const data = await queryCollection('docs').all();
const subModulList:any[] = [];
const mainLabelFontSize = "text-xl mt-2 font-bold ";
const childLabelFontSize = "text-xl";
// Grouper les éléments par sous module module
if(data){
  data.map((item) => {
    const subModuleName: any = item.meta?.submodule;
    const path = item.path;
    const isSubModule = path.includes(route.path);
    if (subModuleName  && isSubModule) {
      if(!labelExists(subModulList, subModuleName)){
        subModulList.push({
          label:subModuleName,
          icon: 'i-lucide-book-open',
          class: mainLabelFontSize,
          children: getSubModulChildren(subModuleName)
        })
      }
    }
  });
}

function getSubModulChildren(subModuleName: any){
  const subModulChildrren:any = [];
  data.map((item) => {
    const path = item.path;
    if (subModuleName  === item.meta?.submodule) {
      subModulChildrren.push({
        label: item.title,
        icon: 'i-lucide-corner-down-right',
        class: childLabelFontSize,
        to: path,
      }) 
    }
  });
  return subModulChildrren;
}


// Avec some() - retourne true/false
function labelExists(data:any, labelToCheck:string)  {
  return data.some((item: any) => item.label === labelToCheck);
}



const items = ref<NavigationMenuItem[][]>([
subModulList
])
</script>
