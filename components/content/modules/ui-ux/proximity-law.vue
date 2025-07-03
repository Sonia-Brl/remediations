<template>
    <div class="container">
        <!-- Démonstration : Menu navigation -->
         <div class="my-8">
        <h3>Exemple : Formulaire de contact </h3>
        <p>Comparaison entre champs dispersés vs champs groupés par catégorie</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="col-span-1 border border-2 border-red-700">
                <SampleAlert wrapper-class="bg-red-700" icon-name="i-lucide-octagon-x" title="Mauvais exemple !" desc="Les champs sont dispersés sans logique apparente" />

                <div class="bg-default  mt-4 p-4 shadow-lg">
                    <div class="form-group mt-2">
                        <label>Prénom</label>
                        <input type="text" placeholder="Votre prénom" class="border">
                    </div>
                    <div class="form-group mt-2">
                        <label>Email</label>
                        <input type="email" placeholder="votre@email.com" class="border">
                    </div>
                    <div class="form-group mt-2">
                        <label>Nom</label>
                        <input type="text" placeholder="Votre nom" class="border">
                    </div>
                    <div class="form-group mt-2">
                        <label>Téléphone</label>
                        <input type="tel" placeholder="06 12 34 56 78" class="border">
                    </div>
                    <div class="form-group mt-2">
                        <label>Message</label>
                        <textarea placeholder="Votre message" class="border"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-span-1 border border-2 border-emerald-700">
                 <SampleAlert wrapper-class="bg-emerald-700" icon-name="i-lucide-circle-check-big" title="Bon exemple !" desc="Les champs sont regroupés par catégorie logique" />
                <div class="bg-default p-4 good-form shadow-lg mt-4">
                    <div class="form-group-info bg-slate-100 dark:bg-slate-950">
                        <div class="font-bold">Informations personnelles</div>
                        <div class="form-group mt-2">
                            <label>Prénom</label>
                            <input type="text" placeholder="Votre prénom" class="border">
                        </div>
                        <div class="form-group mt-2">
                            <label>Nom</label>
                            <input type="text" placeholder="Votre nom" class="border">
                        </div>
                    </div>
                    
                    <div class="form-group-info bg-slate-100 dark:bg-slate-950">
                        <div class="font-bold">Contact</div>
                        <div class="form-group mt-2">
                            <label>Email</label>
                            <input type="email" placeholder="votre@email.com" class="border">
                        </div>
                        <div class="form-group mt-2">
                            <label>Téléphone</label>
                            <input type="tel" placeholder="06 12 34 56 78" class="border">
                        </div>
                    </div>
                    
                    <div class="form-group-info bg-slate-100 dark:bg-slate-950">
                        <div class="font-bold">Message</div>
                        <div class="form-group mt-2">
                            <label>Votre message</label>
                            <textarea placeholder="Décrivez votre demande" class="border"></textarea>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        <!-- Démonstration 2 : Liste de produits -->
          <div class="my-8">
        <h3>Exemple : Liste de produits </h3>
        <p>Layout vertical désordonné vs alignement horizontal cohérent</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="col-span-1 border border-2 border-red-700">
                 <SampleAlert wrapper-class="bg-red-700" icon-name="i-lucide-octagon-x" title="Mauvais exemple !" desc="Éléments empilés sans cohérence horizontale" />
                <div class="p-4 mt-4">
                    <div class="flex flex-col flex flex-col items-center justify-center">
                        <div class="w-full text-center p-4 flex flex-col items-center justify-center my-4 bg-slate-100 dark:bg-slate-950 shadow-lg">
                            <div class="product-image">📱</div>
                            <div class="product-details">
                                <div class="font-bold">iPhone 15 Pro</div>
                                <div class="product-description">Smartphone dernière génération</div>
                            </div>
                            <div class="product-price">1199€</div>
                        </div>
                        <div class="w-full text-center p-4 flex flex-col items-center justify-center my-4 shadow-lg bg-slate-100 dark:bg-slate-950">
                            <div class="product-image">💻</div>
                            <div class="product-details">
                                <div class="font-bold">MacBook Air M2</div>
                                <div class="product-description">Ordinateur portable ultraléger</div>
                            </div>
                            <div class="product-price">1399€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 border border-2 border-emerald-700">
                <SampleAlert wrapper-class="bg-emerald-700" icon-name="i-lucide-circle-check-big" title="Bon exemple !" desc="Image, détails et prix sont alignés et groupés" />
                <div class="mt-4 p-4 good-form ">
                    <div class="flex-col mt-4  ">
                        <div class="product-item bg-slate-100 dark:bg-slate-950 mt-4 shadow-lg">
                            <div class="product-image">📱</div>
                            <div class="product-details">
                                <div class="font-bold">iPhone 15 Pro</div>
                                <div class="product-description">Smartphone dernière génération</div>
                            </div>
                            <div class="product-price">1199€</div>
                        </div>
                        <div class="product-item bg-slate-100 dark:bg-slate-950 mt-4 shadow-lg">
                            <div class="product-image">💻</div>
                            <div class="product-details">
                                <div class="font-bold">MacBook Air M2</div>
                                <div class="product-description">Ordinateur portable ultraléger</div>
                            </div>
                            <div class="product-price">1399€</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        <!-- Démonstration 3 : Profil utilisateur -->
        <div class="my-8">
            <h3>Exemple : Profil utilisateur </h3>
            <p>Éléments éparpillés vs avatar et infos regroupés logiquement</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="col-span-1 border border-2 border-red-700">
                    <SampleAlert wrapper-class="bg-red-700" icon-name="i-lucide-octagon-x" title="Mauvais exemple !" desc="Éléments empilés sans cohérence horizontale" />

                    <div class="p-4 bad-form ">
                        <div class="bg-slate-100 dark:bg-slate-950 profile-demo bad-profile shadow-lg">
                            <div class="profile-avatar bg-primary">DL</div>
                            <div class="profile-info">
                                <div class="profile-name">Dave Loper</div>
                                <div class="profile-role">Développeur Full-Stack</div>
                            </div>
                            <div class="profile-stats">
                                <div class="stat-item">
                                    <div class="stat-number">127</div>
                                    <div class="stat-label">Projets</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">1.2k</div>
                                    <div class="stat-label">Followers</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">89</div>
                                    <div class="stat-label">Following</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 border border-2 border-emerald-700">
                      <SampleAlert wrapper-class="bg-emerald-700" icon-name="i-lucide-circle-check-big" title="Bon exemple !" desc="Image, détails et prix sont alignés et groupés" />

               
                    <div class="p-4 good-form">
                        <div class="bg-slate-100 dark:bg-slate-950 profile-demo good-profile shadow-lg">
                            <div class="profile-avatar bg-primary p-4">DL</div>
                            <div class="profile-main">
                                <div class="profile-info">
                                    <div class="profile-name">Dave Loper</div>
                                    <div class="profile-role">Développeur Full-Stack</div>
                                </div>
                                <div class="profile-stats">
                                    <div class="stat-item">
                                        <div class="stat-number">127</div>
                                        <div class="stat-label"><small>Projets</small></div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">1.2k</div>
                                        <div class="stat-label"><small>Followers</small></div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">89</div>
                                        <div class="stat-label"><small>Following</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/** Démonstration 1 : Formulaire de contact **/
.form-group input, .form-group textarea {
    padding: 10px;
    width: 100%;
}
.formula,
.form-group-info{
    padding: 20px;
    margin-bottom: 20px;
}


/* Démonstration 3 : Profil utilisateur */
.profile-demo {
    padding: 20px;
}

.profile-avatar {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 15px;
}

.profile-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.profile-name {
    font-size: 1.4em;
    font-weight: bold;
}

.profile-role {
    font-size: 1.1em;
}

.profile-stats {
    display: flex;
    gap: 20px;
    margin-top: 15px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 1.3em;
    font-weight: bold;
}

.stat-label {
    font-size: 0.9em;
}

/* Mauvais exemple profil - éléments dispersés */
.bad-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.bad-profile .profile-avatar {
    margin: 0;
}

.bad-profile .profile-info {
    text-align: center;
}

.bad-profile .profile-stats {
    justify-content: center;
    margin: 0;
}

/* Bon exemple profil - éléments groupés */
.good-profile {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}









/* Démonstration 3: Liste de produits */
.product-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.product-item {
    display: flex;
    align-items: center;
    padding: 15px;
}

.product-image {
    width: 60px;
    height: 60px;
    background:#ED0040;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    margin-right: 15px;
}

.product-details {
    flex: 1;
}


.product-description {
    font-size: 0.9em;
}

.product-price {
    font-size: 1.2em;
    font-weight: bold;
    color: #27ae60;
}



</style>
