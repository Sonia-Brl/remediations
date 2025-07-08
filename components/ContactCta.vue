<template>
        <div class="relative bg-slate-800  ">
         <div class="container  m-auto pb-8 md:pe-8 flex flex-row md:me-15 items-center justify-center md:justify-end">
            <div>
                <p class="font-marker text-left text-white mt-8 pt-0">Une question ? </p>
                <ULink as="button" to="https://discord.gg/CccQ5jdskn" target="_blank" class="contact-cta  flex items-center justify-center text-white text-xl ">Rejoins moi sur <UIcon name="mdi:discord" class="size-10 ms-4" /></ULink>
            </div>
         </div>
             <img :src="contactSonia" alt="Visuel de Sonia Brunel entrain de travailler" class="hidden md:block absolute bottom-0 z-0 right-0 w-32 lg:w-25" />
        </div>
</template>

<script setup>
// Import statique
import contactSonia from '~/assets/img/contact.png'


</script>