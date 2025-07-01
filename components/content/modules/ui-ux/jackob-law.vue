<template>
    <div class="container">
        <!-- Démonstration : Menu navigation -->
        <h2>Exemple : Formulaire </h2>
        <div class="flex">
            
            <div class="w-100 flex-auto md:w-48 p-4 m-4">
                <div class="alert alert-danger flex items-center">
                   <UIcon name="i-lucide-octagon-x" class="size-8 " />
                    <div class="ml-4">
                        <span>Mauvais exemple !</span><br>
                        <span>Paralysie du choix - 9 options simultanées</span>
                    </div>
                </div>
                <div class="bg-white p-5">
                    <div class="counter counter-bad text-center">⏱️ ~8 sec</div>
                    <p class="formula mt-5"> Choisir un forfait mobile </p>                         
                    <div class="flex">
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Basique</strong><br>
                            2GB - 15€/mois<br>
                            Appels limités<br>
                            SMS illimités
                        </div>
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Standard</strong><br>
                            5GB - 25€/mois<br>
                            Appels illimités<br>
                            SMS illimités
                        </div>
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Premium</strong><br>
                            10GB - 35€/mois<br>
                            Appels illimités<br>
                            SMS + MMS illimités
                        </div>
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Pro</strong><br>
                            20GB - 45€/mois<br>
                            Tout illimité<br>
                            Roaming EU
                        </div>
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Ultra</strong><br>
                            50GB - 55€/mois<br>
                            Tout illimité<br>
                            Roaming mondial
                        </div>
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Max</strong><br>
                            100GB - 65€/mois<br>
                            Tout illimité<br>
                            5G prioritaire
                        </div>
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Enterprise</strong><br>
                            Illimité - 75€/mois<br>
                            Tout illimité<br>
                            Support dédié
                        </div>
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Family</strong><br>
                            30GB partagés<br>
                            85€/mois<br>
                            4 lignes incluses
                        </div>
                        <div class="option-bad p-2 text-center m-w-25">
                            <strong>Student</strong><br>
                            8GB - 20€/mois<br>
                            Réduction étudiante<br>
                            Apps éducatives
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div class="w-100 flex-auto md:w-48 p-4 m-4">
                <div class="alert alert-success flex items-center">
                    <UIcon name="i-lucide-circle-check-big" class="size-8 " />
                    <div class="ml-4">
                        <span>Bon exemple !</span><br>
                        <span>Décision simplifiée - Maximum 2 choix par étape</span>
                    </div>
                    
    
                </div>
                <div class="bg-white p-5">
                    <div class="counter counter-good text-center">⏱️ ~3 sec</div>
                    <p class="formula mt-5"> Choisir un forfait mobile - Processus guidé
                    </p>
                    <div class="options-linear-good">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div>Quel est votre usage principal ?</div>
                            <div class="sub-options">
                                <div class="sub-option">Appels principalement</div>
                                <div class="sub-option">Internet mobile</div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div>Combien de données par mois ?</div>
                            <div class="sub-options">
                                <div class="sub-option">Moins de 5GB</div>
                                <div class="sub-option">Plus de 5GB</div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div>Voyagez-vous à l'étranger ?</div>
                            <div class="sub-options">
                                <div class="sub-option">Jamais</div>
                                <div class="sub-option">Occasionnellement</div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

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
