<template>
    <div class="min-h-screen flex flex-col justify-between items-between ">
        <div class="">
            <div class="flex z-40 bg-default fixed justify-between items-center border-b border-default w-full">
                <ULink as="button" to="/modules/ui-ux/"  class="p-4"><UIcon name="i-lucide-home" class="size-5" /></ULink>
                <div class="mr-8">
                    <ColorModeButton></ColorModeButton>
                    <USlideover >
                        <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
                        <template #body>
                            <UiUxList  class="" />
                        </template>
                    </USlideover>
                </div>
            </div>
            <main class="p-4 md:p-8 w-full mx-auto mt-8 pt-8" >
                <slot/>
            </main>
        </div>
        <TheFooter></TheFooter>
    </div>
</template>

<script setup lang="ts">
const open = ref(false);
const anchor = ref({ x: 0, y: 0 }); 

const reference = computed(() => ({
    getBoundingClientRect: () =>
    ({
        width: 0,
        height: 0,
        left: anchor.value.x,
        right: anchor.value.x,
        top: anchor.value.y,
        bottom: anchor.value.y,
        ...anchor.value
    } as DOMRect)
}))
</script>