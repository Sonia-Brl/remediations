<template>
    <div class="p-4 bg-default my-8">
        <div class="container m-auto contact-cta  p-4 relative min-h-32">
         <div>
            <h3 class="font-marker">Une question ? </h3>
         </div>
             <img :src="contactSonia" alt="Visuel de Sonia Brunel entrain de travailler" class="hidden md:block absolute bottom-0 z-0 right-0 w-32 lg:w-25" />
       
        </div>
    </div>
</template>

<script setup>
// Import statique
import contactSonia from '~/assets/img/contact.png'


</script>