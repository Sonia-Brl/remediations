<template>
    <div class="nav-wrapper">
        <ULink as="button" to="/"  class="nav-home-link"><UIcon name="i-lucide-home" class="size-5 mr-2" />Remediations<span class="home-link font-marker">by Sonia</span></ULink>
        <div class="mr-8">
            <ColorModeButton></ColorModeButton>
            <USlideover >
                <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
                <template #body>
                    <SubModulList/>
                    <ModulesList :isPopOver = true />
                </template>
            </USlideover>
        </div>
    </div>
</template>