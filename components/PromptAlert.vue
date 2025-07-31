<template>
    <div>
        <div data-orientation="vertical" class="relative overflow-hidden w-full rounded-0 mt-4 p-4 flex gap-2.5 items-start bg-slate-950 dark:text-slate-50 text-inverted">
            <UIcon name="i-lucide-terminal" class="size-5" />
            <div class="min-w-0 flex-1 flex flex-col">
                <div class="text-sm font-bold">{{title}}</div>
                <div class="text-sm mt-1"> <slot /> </div>
            </div> 
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Defaultqelkfjn title'
    },
})
</script>