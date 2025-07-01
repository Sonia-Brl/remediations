
<template>
  <div class="modules-navigation">
    <UNavigationMenu  
    highlight
    highlight-color="primary"  
    orientation="vertical" 
    :items="items" 
    class="data-[orientation=vertical]:w-full text-3xl" />
  </div>
</template>



<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const mainLabelFontSize = "text-2xl mt-4";
const childLabelFontSize = "text-xl";
const items = ref<NavigationMenuItem[][]>([
[
{
  label: 'Les fondamentaux',
  icon: 'i-lucide-book-open size-5',
  class: mainLabelFontSize,
  children: [{
    label: 'Qu’est-ce que l’UX ?',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/1-les-fondamentaux/1-experience-utilisateur',
  },{
    label: 'Distinguer l’UX de l’UI',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/1-les-fondamentaux/2-distinguer-experience-utilisateur-de-interface-utilisateur',
  },{
    label: 'Concept d’usabilité',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/1-les-fondamentaux/3-comprendre-le-concept-usabilite',
  },{
    label: 'Le taux de rétention',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/1-les-fondamentaux/4-recherchez-le-taux-de-retention',
  },{
    label: 'Le Hook Canvas',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/1-les-fondamentaux/5-accrochez-vos-utilisateurs-avec-le-hook-canvas',
  }]
},
{
  label: `Focus sur l'utilisateur`,
  icon: 'i-lucide-book-open',
  class: mainLabelFontSize,
  children: [{
    label: 'La conception UX axée sur l’utilisateur',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/1-apprenez-a-vous-centrer-sur-l-utilisateur',
  },{
    label: 'L’approche minimaliste dans le développement produit',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/2-la-simplicite-en-conception-de-produit',
  },{
    label: 'Concevoir pour l’expérience mobile',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/3-concevoir-pour-l-experience-mobile',
  },{
    label: 'Élaboration de profils utilisateurs (personas)',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/4-creation-de-personas',
  },{
    label: 'L’affordance et le paradoxe UX',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/5-l-affordance-et-le-paradoxe-ux',
  }]
},
{
  label: `Le metier d'UX designer`,
  icon: 'i-lucide-book-open',
  class: mainLabelFontSize,
  children: [{
    label: 'Incarnez l’éthique de l’UX designer',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/1-apprenez-a-vous-centrer-sur-l-utilisateur',
  },{
    label: 'Interview de Mathieu Klein, UX Designer chez OpenClassrooms',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/2-la-simplicite-en-conception-de-produit',
  },{
    label: 'Exercice pratique - Création d’un persona TikTok',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/3-concevoir-pour-l-experience-mobile',
  }
  ]
}, 
{
  label: `Entraînez-vous à la pratique de l’UX design`,
  icon: 'i-lucide-book-open',
  class: mainLabelFontSize,
  children: [{
    label: 'Design Thinking en UX Design',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/1-apprenez-a-vous-centrer-sur-l-utilisateur',
  },{
    label: 'Recherche Utilisateur',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/2-la-simplicite-en-conception-de-produit',
  },{
    label: 'Bonnes Pratiques de Prototypage ',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/3-concevoir-pour-l-experience-mobile',
  }
 ,{
    label: 'Tests Utilisateurs',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/2-focus-utilisateur/3-concevoir-pour-l-experience-mobile',
  }
  ]
},
{
  label: 'Les principales lois',
  icon: 'i-lucide-book-open',
  class: mainLabelFontSize,
  children: [{
    label: 'La loi de Miller',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/lois/la-loi-de-miller',
  },{
    label: 'La loi de Hick',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/lois/la-loi-de-hick',
  },{
    label: 'La loi de Jackob',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/lois/la-loi-de-jackob',
  },{
    label: 'La loi de proximité',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/lois/la-loi-de-proximite',
  },{
    label: `L'Effet Von Restorff`,
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/modules/ui-ux/lois/effet-von-restorff',
  }]
},
{
  label: 'Charte graphique',
  icon: 'i-lucide-book-open',
  class: mainLabelFontSize,
  children: [{
    label: 'Qu’est-ce que l’UX ?',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/',
  },{
    label: 'Distinguer l’UX de l’UI',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/',
  },{
    label: 'Concept d’usabilité',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/',
  },{
    label: 'Le taux de rétention',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/',
  },{
    label: 'Le Hook Canvas',
    icon: 'i-lucide-corner-down-right',
    class: childLabelFontSize,
    to: '/',
  }]
},
]
])
</script>
