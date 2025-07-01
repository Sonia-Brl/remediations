<template>
    <footer class="relative bg-black ">
        <img :src="workingSonia" alt="Visuel de Sonia Brunel entrain de travailler" class="hidden md:block absolute bottom-20 right-0 w-32 lg:w-48" />
        <div class="container mx-auto text-center p-4">
            <div class="p-4">
                <ULink as="button" to="https://www.linkedin.com/in/sonia-brunel/" target="_blank" class="p-4"><UIcon name="i-lucide-linkedin" class="size-5" /></ULink>
                <ULink as="button" to="https://github.com/Sonia-Brl" target="_blank" class="p-4"><UIcon name="i-lucide-github" class="size-5" /></ULink>
            </div>
            <p class="text-sm"><small>Copyright Sonia Brunel 2025 - Tout droits réservés</small></p>
        </div>
    </footer>
</template>

<script setup>
// Import statique
import workingSonia from '~/assets/svg/sonia-brunel-working.svg'


</script>