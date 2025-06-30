<template>
    <main class="min-h-screen flex flex-col justify-between items-between ">
        <div class="container mx-auto">
     <div>
               <UNavigationMenu  orientation="horizontal" :items="items"  class="p-4 data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48" />
               <ColorModeButton></ColorModeButton>
     </div>
            <main class="p-4 " >
                <slot/>
            </main>
        </div>
        <TheFooter></TheFooter>
    </main>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const items = ref<NavigationMenuItem[][]>([
[
{
    label: 'Links',
    type: 'label'
},
{
    label: 'Remediations',
    icon: 'i-lucide-book-open',
    active: true,
    defaultOpen: true,
    children: [
    {
        label: 'UI/UX',
        description: 'Créer des interfaces numériques à la fois esthétiques et intuitives.',
        icon: 'i-lucide-palette',
        to:"/modules/ui-ux"
    }
    ]
},


],
[
{
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/Sonia-Brl/remediations',
    target: '_blank'
},
]
])
const itemsFuture = ref<NavigationMenuItem[][]>([
[
{
    label: 'Links',
    type: 'label'
},
{
    label: 'Remediations',
    icon: 'i-lucide-book-open',
    active: true,
    defaultOpen: true,
    children: [
    {
        label: 'UI/UX',
        description: 'Créer des interfaces numériques à la fois esthétiques et intuitives.',
        icon: 'i-lucide-palette',
        to:"/modules/ui-ux"
    },
    {
        label: 'Html - CSS',
        description: 'HTML = structure, CSS = apparence visuelle.',
        icon: 'i-lucide-code',
    },
    {
        label: 'Algorithmie',
        icon: 'i-lucide-code',
        description: 'Décomposer un problème complexe en une série d\'instructions logiques '
    },
    {
        label: 'Javascript',
        icon: 'i-lucide-code',
        description: 'Donne vie aux pages web en transformant des sites statiques en applications web réactives.'
    }
    ]
},


],
[
{
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/Sonia-Brl/remediations',
    target: '_blank'
},
]
])
</script>

<style>

</style>