<template>
    <div :class="wrapperClass" class="p-4 text-white flex flex-col md:flex-row text-center md:text-start items-center">
        <UIcon :name="`${iconName}`"  class="size-12 mb-2 md:mb-0 md:size-8 " />
        <div class="ml-4">
            <span class="font-bold">{{title}}</span><br>
            <span>{{desc}}</span>
        </div>
    </div>
</template>


<script setup lang="ts">
defineProps<{
    wrapperClass?:string,
    iconName?: string,
    title?: string,
    desc?: string
}>()
</script>