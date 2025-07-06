<template>
    <div class="nav-wrapper">
        <ULink as="button" to="/"  class="nav-home-link"><UIcon name="i-lucide-home" class="size-5 mr-2" />Remediations<span class="home-link font-marker">by Sonia</span></ULink>
        <div class="mr-8">
            <ColorModeButton></ColorModeButton>
        <USlideover title="Remediation" description="Liste des modules">
                <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
                <template #body>
                    <nav>
                        <p class="main-nav-title">En cours : {{ moduleName }}</p>
                        <UNavigationMenu  
                        highlight
                        highlight-color="primary" 
                        orientation="vertical" 
                        :items="items" 
                        class="data-[orientation=vertical]:w-full list-none " />
                        <p class="main-nav-title mt-8">Autre modules</p>
                        <slot :modules="modulList">
                            
                            <ul  class="gap-4 grid list-none grid-cols-1 lg:grid-cols-2 list-none">
                                <li v-for="module in modulList" :key="module.path">
                                    <NuxtLink :to="{ path: module.path}" class="module-card-popover ">{{module.name}} <UIcon name="i-lucide-move-right" class="size-5 mr-2" /></NuxtLink>
                                </li>
                            </ul>
                        </slot>
                    </nav>
                </template>
            </USlideover>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
const route = useRoute();
const modulPathArray= route.path.split('/').splice(0, 3);
const moduleName = getModuleName(modulPathArray);
const modulePath = modulPathArray.join('/');
const data = await queryCollection('docs').all();

const modulList: any = [];
// Grouper les éléments par module
if(data){
    data.map((item) => {
        const moduleName = item.meta?.module;
        const isSUmmary = item.meta?.summary;
        const isReady = item.meta?.ready;
       let isCurrent =false;
        if(item.path){
            isCurrent = item.path.includes(modulePath);
        }
        if (moduleName  && isSUmmary && isReady && !isCurrent) {
            modulList.push({
                "path": item.path,
                "name":moduleName,
            })
        }
    });
}
const subModulList:any[] = [];
const mainLabelFontSize = "text-xl mt-2 font-bold ";
const childLabelFontSize = "text-xl";
// Grouper les éléments par sous module module
if(data){
    data.map((item) => {
        const subModuleName: any = item.meta?.submodule;
        const path = item.path;
        //console.log("path : ", path); 
        let isSubModule = false ;
        if(path){
          isSubModule = path.includes(modulePath) ;
        }
        if (subModuleName && isSubModule) {
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

function getModuleName(modulPathArray :any) {
    let moduleName= ""; 
    if(modulPathArray && modulPathArray[2]){
    switch (true)  {
        case (modulPathArray[2].includes("ui-ux")):
        moduleName = "UX/UI"
        break;
         case (modulPathArray[2].includes("html")):
        moduleName = "HTML"
        break;
        default:
        console.log('ERROR No Module Name provided for: ' + modulPathArray);
    };
    }
    return moduleName; 
}
</script>