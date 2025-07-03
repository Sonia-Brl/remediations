<template>
    <!-- Démonstration : Menu navigation -->
    <div class="my-8">
        <h3>Menu de navigation</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4"> 
            <div class="col-span-1 border border-2 border-red-700">
                <SampleAlert wrapper-class="bg-red-700" icon-name="i-lucide-octagon-x" title="Mauvais exemple !" desc="Beaucoup trop d'options" />
                <div class="p-5">
                    <div class="bg-red-700 p-2 text-white text-center font-bold">17 éléments</div>
                    <div class="flex">
                        <img :src="badOption" alt="Visuel de ce qui ne faut pas faire"  />
                    </div>
                </div>
            </div>
            <div class="col-span-1 border border-2 border-emerald-700">
                <SampleAlert wrapper-class="bg-emerald-700" icon-name="i-lucide-circle-check-big" title="Bon exemple !" desc="Nombre d'options limités" />
                <div class=" p-5">
                    <div class="bg-emerald-700 p-2 text-white text-center font-bold">7 élément</div>
                    <div class="flex">
                        <img :src="goodOption" alt="Visuel de ce qui ne faut pas faire"  />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Import statique
import badOption from '~/assets/img/miller-bad.png'
import goodOption from '~/assets/img/miller-good.png'

</script>

<style scoped>
.counter {
    padding: 8px 15px;
    font-weight: bold;
}

.counter-bad {
    color: #572120;
    background:#f7dddc;
}

.counter-good {
    color: #1e4c2e;
    background: #dbf2e3;
}
.alert {
    position: relative;
    padding: 1rem ;
    margin-bottom: 2rem ;
    color: var(--sb-alert-color);
    background-color: var(--sb-alert-bg);
}

.alert-danger {
    --sb-alert-color:  #572120;
    --sb-alert-bg: #f7dddc;
    --sb-alert-border-color:  #572120;
}
.alert-success {
    --sb-alert-color:   #1e4c2e;
    --sb-alert-bg: #dbf2e3;
    --sb-alert-border-color:   #1e4c2e;
}


</style>
