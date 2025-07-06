<template>
    <UCard class="bg-primary text-white rounded-none mt-4">
        <div class="flex items-center">
            <div class="p-4">
                <img :src="workingSonia" alt="Visuel de Sonia Brunel entrain de travailler"  />
            </div>
            <div >
                <p class="font-bold text-3xl"> Un peu de patience ...</p>
                <p>Remédiation en cours d'écriture.</p>
            </div>
        </div> 
    </UCard>
</template>
<script setup>
import workingSonia from '~/assets/svg/sonia-brunel-working.svg'
</script>