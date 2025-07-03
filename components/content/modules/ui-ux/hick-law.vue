<template>
    <div>
        <!-- Démonstration : Menu navigation -->
        <div class="my-8">
            <h3>Formulaire de séléction de forfait mobile</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <div class="col-span-1  border border-2 border-red-700">
                       <SampleAlert wrapper-class="bg-red-700" icon-name="i-lucide-octagon-x" title="Mauvais exemple !" desc='Paralysie du choix - 9 options simultanées' />
                    <div class="p-4">
                        <div class="bg-red-700 p-2 text-white text-center font-bold"><UIcon name="i-lucide-clock"/> ~8 sec</div>
                        <p class="text-center mt-5"> Choisir un forfait mobile </p>                         
                        <div class="flex flex-wrap justify-center items-center">
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Basique</strong><br>
                                2GB - 15€/mois<br>
                                Appels limités<br>
                                SMS illimités
                            </div>
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Standard</strong><br>
                                5GB - 25€/mois<br>
                                Appels illimités<br>
                                SMS illimités
                            </div>
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Premium</strong><br>
                                10GB - 35€/mois<br>
                                Appels illimités<br>
                                SMS + MMS illimités
                            </div>
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Pro</strong><br>
                                20GB - 45€/mois<br>
                                Tout illimité<br>
                                Roaming EU
                            </div>
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Ultra</strong><br>
                                50GB - 55€/mois<br>
                                Tout illimité<br>
                                Roaming mondial
                            </div>
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Max</strong><br>
                                100GB - 65€/mois<br>
                                Tout illimité<br>
                                5G prioritaire
                            </div>
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Enterprise</strong><br>
                                Illimité - 75€/mois<br>
                                Tout illimité<br>
                                Support dédié
                            </div>
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Family</strong><br>
                                30GB partagés<br>
                                85€/mois<br>
                                4 lignes incluses
                            </div>
                            <div class="option-bad p-2 text-center m-w-25 w-100">
                                <strong>Student</strong><br>
                                8GB - 20€/mois<br>
                                Réduction étudiante<br>
                                Apps éducatives
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 border border-2 border-emerald-700">   
                    <SampleAlert wrapper-class="bg-emerald-700" icon-name="i-lucide-circle-check-big" title="Bon exemple !" desc='Décision simplifiée - Maximum 2 choix par étape' />
                    <div class="p-4">
                        <div class="bg-emerald-700 p-2 text-white text-center font-bold"><UIcon name="i-lucide-clock"/> ~3 sec</div>
                        <p class="text-center mt-5"> Choisir un forfait mobile - Processus guidé
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
        <h2>Études de Cas Pratiques</h2>
        <!-- Etude de cas pratique -->
        <!-- Cas 1 -->
        <div class="my-8 mt-4">
            <h3>Cas 1 : Refonte d'un Menu E-commerce</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <div class="col-span-1 border border-2 border-red-700">
                    <SampleAlert wrapper-class="bg-red-700" icon-name="i-lucide-octagon-x" title="Mauvais exemple !" desc='Navigation floue' />
                    <ul class="p-4">
                        <li>23 catégories au premier niveau</li>
                        <li>Temps moyen de navigation : 8.3 secondes</li>
                        <li>Taux d'abandon : 34%</li>
                    </ul>
                </div>
                <div class="col-span-1 border border-2 border-emerald-700">
                    <SampleAlert wrapper-class="bg-emerald-700" icon-name="i-lucide-circle-check-big" title="Bon exemple !" desc='Navigation optimisée' />
                    <ul class="p-5">
                        <li>Femme | Homme | Enfant | Maison | Sport</li>
                        <li>5 catégories principales</li>
                        <li>Sous-catégories au survol</li>
                    </ul>
                </div>
            </div>
            <div>
                <p><strong>Résultats :</strong></p>
                <ul>
                    <li>Temps de décision : 3.1 secondes (-62%)</li>
                    <li>Taux d'abandon : 18% (-47%)</li>
                    <li>Conversions : +23%</li>
                </ul>
            </div>
        </div>
        <!-- Cas 2 -->  
        <div class="my-8">
            <h3>Cas 2 : Application de Streaming</h3>
            <p><strong>Défi :</strong> Choisir parmi 10,000+ contenus</p>
            <div class="col-span-1 border border-2 border-emerald-700">
                <SampleAlert wrapper-class="bg-emerald-700" icon-name="i-lucide-circle-check-big" title="Bon exemple !" desc='Approche progressive' />
                <ol class="p-4">
                    <li>Algorithme de recommandation (6 suggestions)</li>
                    <li>Catégories populaires (8 genres)</li>
                    <li>Recherche avec auto-complétion</li>
                    <li>Filtres contextuels (année, note, durée)</li>
                </ol>
            </div>
            <div>
                <p><strong>Impact :</strong></p>
                <ul>
                    <li>Temps jusqu'au premier visionnage : -40%</li>
                    <li>Engagement utilisateur : +28%</li>
                </ul>
            </div>
        </div>
        <!-- Cas 3 -->  
        <div class="my-8">
            <h3>Cas 3 : Interface de Configuration</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <div class="col-span-1 border border-2 border-red-700">
                    <SampleAlert wrapper-class="bg-red-700" icon-name="i-lucide-octagon-x" title="Mauvais exemple !" desc='Configuration floue' />
                    <ul class="p-4">
                        <li>47 paramètres sur une seule page</li>
                        <li>Utilisateurs perdus et frustrés</li>
                    </ul>
                </div>
                <div class="col-span-1 border border-2 border-emerald-700">
                    <SampleAlert wrapper-class="bg-emerald-700" icon-name="i-lucide-circle-check-big" title="Bon exemple !" desc='Configuration par étapes' />
                    <ul class=" p-4">
                        <li>Etape 1 : Compte (4 champs essentiels)</li>
                        <li>Etape 2 : Préférences (5 options principales)</li>
                        <li>Etape 3 : Notifications (3 types de choix)</li>
                        <li>Etape 4 : Avancé (lien "Personnaliser davantage")</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.option-bad {
    background: #fff3cd;
    border: 2px solid #ffc107;
    padding: 15px;
    text-align: center;
    border-radius: 8px;
    font-size: 0.9em;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    color: black;
    margin:10px;
}

.option-bad:hover {
    background: #ffc107;
    color: white;
    transform: scale(1.05);
}

.options-grid-bad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.options-linear-good {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.step {
    background: #e8f5e8;
    border: 2px solid #1e4c2e;
    padding: 20px;
    position: relative;
    font-size: 1.1em;
    font-weight: 500;
    color: black;
}

.step-number {
    position: absolute;
    top: -10px;
    left: 15px;
    background: #1e4c2e;
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
    font-weight: bold;
}

.sub-options {
    display: grid;
    grid-template-columns: repeat(auto, 1fr);
    gap: 10px;
    margin-top: 15px;
    
}

.sub-option {
    background: white;
    border: 1px solid #1e4c2e;
    padding: 12px;
    text-align: center;
    font-size: 0.9em;
    cursor: pointer;
    transition: all 0.3s ease;
    color: black;
}

.sub-option:hover {
    background: #dbf2e3;
}        
</style>
