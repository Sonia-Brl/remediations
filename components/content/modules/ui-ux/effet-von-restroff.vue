<template>
    <div>
        <!-- Démonstration 1: E-commerce -->
        <section class="my-8">
            <h3>Exemple 1 : E-commerce : Mise en avant d'un produit</h3>
            <p>Un produit en promotion qui se distingue des autres par sa couleur, animation et badge</p>
            <div class="product-grid">
                <div class="product-card">
                    <h3>Smartphone Alpha</h3>
                    <p class="price">299€</p>
                </div>
                <div class="product-card">
                    <h3>Smartphone Beta</h3>
                    <p class="price">399€</p>
                </div>
                <div class="product-card featured">
                    <div class="badge">OFFRE SPÉCIALE</div>
                    <h3>Smartphone Gamma</h3>
                    <p class="price">499€ → 349€</p>
                </div>
                <div class="product-card">
                    <h3>Smartphone Delta</h3>
                    <p class="price">559€</p>
                </div>
            </div>
            <p><strong>Résultat :</strong> Le produit en promotion se distingue visuellement et attire naturellement l'attention.</p>
        </section>
        <!-- Démonstration 2: Formulaire -->
        <section class="my-8">  
            <h3>Formulaire : Bouton d'action principal</h3>
            <p>Le bouton principal d’action qui guide l’utilisateur vers la conversion</p>
            <div class="m-auto bg-slate-100 dark:bg-slate-950 p-8 shadow-lg">
                <div class="form-group">
                    <label for="name">Nom complet</label>
                    <input type="text" id="name" placeholder="Votre nom">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="votre@email.com">
                </div>
                <div class="form-group">
                    <label for="plan">Plan choisi</label>
                    <select id="plan">
                        <option>Plan Basic</option>
                        <option>Plan Premium</option>
                        <option>Plan Enterprise</option>
                    </select>
                </div>
                <div class="form-buttons">
                    <button class="btn ">Annuler</button>
                    <button class="btn bg-emerald-700 btn-cta">Créer mon compte</button>
                </div>
            </div>
            <p><strong>Résultat :</strong> Le bouton principal guide clairement vers l'action souhaitée.</p>
        </section>
        <!-- Démonstration 2: Navigation -->
        <section class="my-8">
            <h3>Navigation : Call-to-action distinctif</h3>
            <p> Un call-to-action qui ressort dans une barre de navigation classique</p>
            <nav class="grid grid-cols-5 bg-slate-100 dark:bg-slate-950  m-auto text-center items-center">
                <a href="#" class="col-span-5 md:col-span-1 p-4">Accueil</a>
                <a href="#" class="col-span-5 md:col-span-1 p-4">Produits</a>
                <a href="#" class="col-span-5 md:col-span-1 p-4">Services</a>
                <a href="#" class="col-span-5 md:col-span-1 p-4 btn bg-emerald-700">Essai Gratuit</a>
                <a href="#" class="col-span-5 md:col-span-1 p-4">Contact</a>
            </nav>
            <p><strong>Résultat :</strong> Le bouton "Essai Gratuit" se démarque des autres éléments de navigation.</p>
        </section>
        <!-- Démonstration 4: Dashboard -->
        <section class="my-8">
            <h3>Dashboard : Métrique importante</h3>
            <p>Une métrique importante mise en évidence parmi d’autres statistiques</p>
            <div class="stats-grid my-5">
                <div class="stat-card bg-slate-100 dark:bg-slate-950">
                    <div class="number">1,247</div>
                    <div class="label">Visiteurs</div>
                </div>
                <div class="stat-card bg-slate-100 dark:bg-slate-950">
                    <div class="number">89</div>
                    <div class="label">Commandes</div>
                </div>
                <div class="stat-card highlight bg-emerald-700">
                    <div class="number">+127%</div>
                    <div class="label">Conversion</div>
                </div>
                <div class="stat-card bg-slate-100 dark:bg-slate-950">
                    <div class="number">4.2</div>
                    <div class="label">Note moyenne</div>
                </div>
            </div>
            <p><strong>Résultat :</strong> La métrique de conversion, étant la plus importante, attire immédiatement l'œil.</p>
        </section>
    </div>
</template>

