<template>
    <div class="mx-auto bg-slate-800 p-8  mt-8">
        
        <UModal fullscreen >
            <div class="flex flex-col md:flex-row justify-center items-center">
                <p class="text-white  mb-4 md:mb-0 md:mr-8">Petit guide de survie pour les </p>
                <UButton label="Cerveau en détresse" color="primary"class="scrib text-xl rounded-none font-marker" size="xl" trailing-icon="i-lucide-arrow-right" />
            </div>
            <template #body>
                <div class="h-full bg-default container m-auto">
                  
                    <h1 class="text-center"> Guide de Survie pour Cerveaux en Détresse</h1>
                      <h2>Bienvenue dans le merveilleux monde de l'apprentissage !</h2>
                <div class="grid grid-cols-1 md:grid-cols-3  gap-8 m-auto items-center">
                      <div class="flex col-span-1">    
                                <img :src="learn" alt="Visuel de de Sonia qui apprend" class="m-auto" />
                            </div>
                        <div class="intro col-span-2">
                        <p>Ah, l'apprentissage ! <br>Cette noble quête où votre cerveau fait parfois la grève, où les informations semblent glisser comme du savon mouillé, et où vous vous demandez si votre matière grise n'a pas pris des vacances non autorisées aux Bahamas.</p>
                        <p>Rassurez-vous, vous n'êtes pas seul(e) dans cette galère ! Même Einstein a probablement eu envie de jeter sa calculatrice par la fenêtre (bon, elle n'existait pas encore, mais vous voyez l'idée).</p>
                    </div>
                     
                </div>
                    <h2> Les Péripéties Classiques du Cerveau qui Apprend</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto">
                        <div>
                            <div class="flex">    
                                <img :src="understand" alt="Visuel de ce Sonia qui ne comprend pas" class="m-auto" />
                            </div>
                            <h3>Le Syndrome du "Je-Comprends-Rien-Du-Tout"</h3>
                            <div>
                                <p>Vous savez, ce moment magique où votre prof explique quelque chose et vous avez l'impression qu'il parle en klingon.</p>
                                <p>Votre cerveau fait des bruits bizarres, comme un vieux modem qui essaie de se connecter à Internet.</p>
                            </div>
                            <div class="remede ">
                                <p><strong>Le remède :</strong> </p> 
                                <p>Respirez, posez des questions (même les plus bêtes), et rappelez-vous que Rome ne s'est pas construite en un jour... et qu'elle n'avait pas Google !</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex">    
                                <img :src="forget" alt="Visuel de ce Sonia qui oublie" class="m-auto" />
                            </div>
                            <h3>L'Effet "Passoire Mentale"</h3>
                            <div>
                                <p>Vous venez d'apprendre quelque chose, vous êtes fier(e), et POUF ! </p>
                                <p>Cinq minutes plus tard, c'est parti aux oubliettes avec vos clés de voiture et le prénom de votre voisin.</p>
                            </div>                            
                            <div class="remede">
                                <p><strong>Le remède :</strong> </p>
                                <p> La répétition est votre amie ! </p>
                                <p>Répétez, révisez, recommencez. Votre cerveau aime les rediffusions, comme nous avec nos séries préférées.</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex">    
                                <img :src="procrastination" alt="Visuel de ce Sonia qui ne comprend pas" class="m-auto" />
                            </div>
                            <h3> La Procrastination Créative</h3>
                            <div> 
                                <p>"Bon, je vais réviser... mais d'abord, laisse-moi juste ranger mon bureau, faire la vaisselle, et trier mes chaussettes par couleur."</p>
                                <p> Trois heures plus tard, vous êtes expert en origami mais toujours nul en maths.</p>
                            </div>
                            <div class="remede">
                                <p><strong>Le remède :</strong></p>
                                <p>La technique Pomodoro !</p>
                                <p> 25 minutes de travail, 5 minutes de pause. Votre cerveau va adorer ces petites pauses, et vous éviterez de devenir un maître origami involontaire.</p>
                            </div>
                        </div>
                    </div>
                    <h2>Les Conseils de Survie (Testés et Approuvés !)</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto">
                    <div>
                                <div class="flex">    
                                <img :src="error" alt="Visuel de Sonia qui embrasse une erreur" class="m-auto" />
                            </div>
                            <h3>Embrassez vos Erreurs</h3>
                            <p>Les erreurs, c'est comme le sport : personne n'aime ça sur le moment, mais c'est super bon pour vous ! </p>
                            <p>Chaque erreur est une leçon déguisée en petite frustration temporaire.</p>
                        </div>
                        <div>
                            <div class="flex">    
                                <img :src="multiSupport" alt="Visuel de d'une équipe de travail" class="m-auto" />
                            </div>
                            <h3>Variez les Plaisirs</h3>
                            <p>Votre cerveau s'ennuie vite. Alternez lecture, vidéos, exercices pratiques, discussions.</p>
                            <p>C'est comme un <span class="highlight">buffet pour neurones</span> !</p>
                        </div>
                        <div>
                            <div class="flex">    
                                <img :src="sleap" alt="Visuel de Sonia entrain de dormir" class="m-auto" />
                            </div>
                            <h3>Le Pouvoir Magique du Sommeil</h3>
                            <p>Dormir, ce n'est pas de la paresse, c'est de la maintenance cerveau !</p>
                            <p>Pendant que vous ronflez, votre cerveau fait le ménage et range tout ce que vous avez appris. Alors dormez sans culpabiliser !</p>
                        </div>
                        <div>
                            <div class="flex">    
                                <img :src="team" alt="Visuel de d'une équipe de travail" class="m-auto" />
                            </div>
                            <h3>Arouvez Votre Tribu</h3>
                            <p>Apprenez avec d'autres !</p>
                            <p>Expliquer à quelqu'un, c'est s'assurer qu'on a vraiment compris.</p>
                            <p>Et puis, la galère partagée, c'est moins pénible !</p>
                        </div>
                        <div>
                              <div class="flex">    
                                <img :src="victory" alt="Visuel de Sonia qui danse" class="m-auto" />
                            </div>
                            <h3>Célébrez les Petites Victoires</h3>
                            <p>Vous avez compris une logique ? Danse de la victoire !</p>
                            <p>Vous avez retenu un mot de vocabulaire, un concept ... ?</p>
                            <p>Danse de la victoire ! Le cerveau adore les récompenses, alors n'hésitez pas à vous féliciter.</p>
                        </div>
                    </div>
                    <div class="conclusion">
                        <h2>En Conclusion</h2>
                        <p>L'apprentissage, c'est un peu comme apprendre à faire du vélo : au début, vous tombez beaucoup, vous avez mal aux fesses, et vous vous demandez pourquoi vous n'avez pas choisi la trottinette. Mais un jour, ça clique ! Et là, vous filez comme le vent, fier(e) de vos genoux écorchés qui racontent votre épopée.</p>
                        <p>Alors courage ! Votre cerveau est plus costaud que vous ne le pensez. Il suffit juste de lui donner le temps, la patience, et peut-être un bon café de temps en temps.</p>
                    </div>
                    
                    <div class="my-8 pb-8">
                        <p><strong>PS :</strong> Si après tout ça, vous n'y arrivez toujours pas, rappelez-vous que chaque chêne majestueux a commencé par être un gland !</p>
                    </div>
                </div>
            </template>
        </UModal>
    </div>
</template>

<script setup>
const open = ref(false);
// Import statique
import understand from '~/assets/img/comprendre.png';
import forget from '~/assets/img/oublie.png';
import procrastination from '~/assets/img/procrastination.png';
import team from '~/assets/img/equipe.png';
import sleap from '~/assets/img/dormir.png';
import victory from '~/assets/img/victoire.png';
import multiSupport from '~/assets/img/multi-support.png';
import error from '~/assets/img/error.png';
import learn from '~/assets/img/apprendre.png';
</script>