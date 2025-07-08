<template>
    <div class="main-wrapper ">
        <div>
            <TheHeader />
            <main class="main z-40" >
                <slot/>
            </main>
        </div>
        <div>
            <ContactCta />
            <ModalGuides />
            <TheFooter />

        </div>
    </div>
</template>

<script setup lang="ts">
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