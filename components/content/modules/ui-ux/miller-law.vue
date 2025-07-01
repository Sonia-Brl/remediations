<template>
    <div class="">
        <!-- Démonstration : Menu navigation -->
        <h2>Exemple : Menu de navigation</h2>
        <div class="flex">
            
            <div class="w-100 flex-auto md:w-48 p-4 m-4">
                <div class="alert alert-danger flex items-center">
                    <UIcon name="i-lucide-octagon-x" class="size-8 " />
                    <div class="ml-4">
                        <span>Mauvais exemple !</span><br>
                        <span>Beaucoup trop d'options</span>
                    </div>
                </div>
                <div class="bg-white p-5">
                    <div class="counter counter-bad text-center">17 éléments</div>
                    <div class="flex">
                        <img :src="badOption" alt="Visuel de ce qui ne faut pas faire"  />
                    </div>
                </div>
            </div>
            <div class="w-100 flex-auto md:w-48 p-4 m-4">
                <div class="alert alert-success flex items-center">
                    <UIcon name="i-lucide-circle-check-big" class="size-8 " />
                    <div class="ml-4">
                        <span>Bon exemple !</span><br>
                        <span>Nombre d'options limités</span>
                    </div>
                </div>
                <div class="bg-white p-5">
                    <div class="counter counter-good text-center">7 élément</div>
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
