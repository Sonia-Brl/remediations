<template>
                <div class="flex z-40 bg-default fixed justify-between items-center border-b border-default w-full">
                <ULink as="button" to="/modules/ui-ux/"  class="p-4 font-bold flex items-center justify-around"><UIcon name="i-lucide-home" class="size-5" /><small class="ml-2"> Remediations</small> <span class="ml-2 main-home text-primary">by Sonia</span></ULink>
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
</template>