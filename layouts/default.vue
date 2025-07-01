<template>
    <main class="min-h-screen flex flex-col justify-between items-between ">
        <div class="">
            <div class="flex justify-between items-center border-b border-default w-full">
                <ULink as="button" to="/modules/ui-ux/"  class="p-4"><UIcon name="i-lucide-home" class="size-5" /></ULink>
                      
<div>
                   <ColorModeButton></ColorModeButton>
                        <UDropdownMenu
                         size="xl",
                    :items="items"
                    :ui="{
                        content: 'w-8'
                    }"
                    >
                    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
                </UDropdownMenu>
 
</div>
            
        </div>
        <main class="p-4 md:p-8 w-full md:w-3/4 mx-auto" >
            <slot/>
        </main>
    </div>
    <TheFooter></TheFooter>
</main>
</template>
<script setup lang="ts">

import { NuxtLink } from '#components';
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[][]>([
[  {
    label: 'Html - CSS',
    icon: 'i-lucide-book-open',
    to: '/',
    disabled: true,
    children: []
},
{
    label: 'Algorithmie',
    icon: 'i-lucide-book-open',
    to: '/',
    disabled: true,
    children: []
},
{
    label: 'UI/UX',
    icon: 'i-lucide-book-open',
    to: '/modules/ui-ux',
    children: [
       [{
    label: 'Les fondamentaux',
    icon: 'i-lucide-book-open',
    to: '/',
},{
    label: 'Qu’est-ce que l’UX ?',
     icon: 'i-lucide-corner-down-right',
    to: '/',
},{
    label: 'Distinguer l’UX de l’UI',
     icon: 'i-lucide-corner-down-right',
    to: '/',
},{
    label: 'Concept d’usabilité',
     icon: 'i-lucide-corner-down-right',
    to: '/',
},{
    label: 'Le taux de rétention',
     icon: 'i-lucide-corner-down-right',
    to: '/',
},{
    label: 'Le Hook Canvas',
     icon: 'i-lucide-corner-down-right',
    to: '/',
}


    ],
    [{
    label: 'Les principales lois',
    icon: 'i-lucide-book-open',
    to: '/',
},{
    label: 'La loi de Miller',
     icon: 'i-lucide-corner-down-right',
    to: '/',
}
,{
    label: 'La loi de Hick',
     icon: 'i-lucide-corner-down-right',
    to: '/',
},{
    label: 'La loi de Jackob',
     icon: 'i-lucide-corner-down-right',
    to: '/',
},{
    label: 'L’effet Von Restroff',
     icon: 'i-lucide-corner-down-right',
    to: '/',
}
    ]
    ]
},
],
])

</script>




