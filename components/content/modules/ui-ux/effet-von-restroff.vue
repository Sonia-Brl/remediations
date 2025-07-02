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
                <a href="#" class="col-span-5 md:col-span-1 p-4 btn bg-emerald-700 btn-cta">Essai Gratuit</a>
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

<style scoped >

/* Démonstration 2: Navigation */
.nav-demo  .nav-item {
    padding: 15px 25px;
    text-decoration: none;
    font-weight: 500;
}

.form-group input, .form-group select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e9ecef;
    font-size: 1em;
    transition: border-color 0.3s ease;
}

.btn-cta {
    transform: scale(1.05);
    color: #fff;
    animation: call-to-action 2s infinite;
}


.form-buttons {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    margin-top: 30px;
}

.btn {
    padding: 12px 25px;
    border: none;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.btn-secondary {
    background: #95a5a6;
    color: white;
}

.btn-secondary:hover {
    background: #7f8c8d;
}

.btn-primary {
    transform: scale(1.05);
    animation: call-to-action 2s infinite;
}

.btn-primary:hover {
    transform: scale(1.08) translateY(-2px);
}

/* Démonstration 4: Statistiques */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.stat-card {
    padding: 25px;
    text-align: center;
    transition: all 0.3s ease;
}

.stat-card .number {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 10px;
}

.stat-card .label {
    font-weight: 500;
}

.stat-card.highlight {
    color: white;
    transform: scale(1.1);
}
.stat-card.highlight .label,
.stat-card.highlight .number {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}


/* Démonstration 1: Formulaire de contact */
.form-demo {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-weight: 500;
    
    margin-bottom: 5px;
}

.form-group input, .form-group textarea {
    padding: 10px;
    border: 2px solid #e9ecef;
    font-size: 1em;
}

.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: #151442;
}


</style>