<template>
<div>
    <!-- Démonstration 1: E-commerce -->
    <section class="my-8 bg-slate-50 dark:bg-slate-700 p-4">
        <h3>Exemple 1 : E-commerce : Mise en avant d'un produit</h3>
        <p>Un produit en promotion qui se distingue des autres par sa couleur, animation et badge</p>
        <div class="product-grid ">
            <div class="product-card bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center shadow-lg">
                <h3>Smartphone Alpha</h3>
                <p class="price">299€</p>
                </div>
            <div class="product-card bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center shadow-lg">
                <h3>Smartphone Beta</h3>
                <p class="price">399€</p>
            </div>
            <div class="product-card featured shadow-lg">
                <div class="badge">OFFRE SPÉCIALE</div>
                <h3>Smartphone Gamma</h3>
                <p class="price">499€ → 349€</p>
            </div>
            <div class="product-card bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center shadow-lg">
                <h3>Smartphone Delta</h3>
                <p class="price">559€</p>
            </div>
        </div>
        <p><strong>Résultat :</strong> Le produit en promotion se distingue visuellement et attire naturellement l'attention.</p>
    </section>
    <!-- Démonstration 3: Formulaire -->
    <section class="my-8 bg-slate-50 dark:bg-slate-700 p-4">  
        <h3>Formulaire : Bouton d'action principal</h3>
        <p>Le bouton principal d’action qui guide l’utilisateur vers la conversion</p>
        <div class="col-md-8 m-auto bg-slate-100 dark:bg-slate-950 p-8">
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
    <section class="my-8 bg-slate-50 dark:bg-slate-700 p-4">
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
    <section class="my-8 bg-slate-50 dark:bg-slate-700 p-4">
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




/** L’effet Von Restroff */
/* Démonstration 1: Liste de produits */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.product-card {
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
.product-card.featured h3{
    color: white;
}
.product-card.featured {
    background: linear-gradient(45deg, #ff6b6b, #ED0040);
    color: white;
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(255, 107, 107, 0.3);
    animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
    0%, 100% { 
        box-shadow: 0 15px 35px rgba(255, 107, 107, 0.3);
        transform: scale(1.05);
    }
    50% { 
        box-shadow: 0 20px 45px rgba(255, 107, 107, 0.5);
        transform: scale(1.08);
    }
}

.product-card h3 {
    margin-bottom: 10px;
    font-size: 1.2em;
}

.product-card .price {
    font-size: 1.3em;
    font-weight: bold;
    color: #27ae60;
}

.product-card.featured .price {
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.badge {
    background: #ED0040;
    color: white;
    padding: 5px 15px;
    font-size: 0.8em;
    font-weight: bold;
    margin-bottom: 10px;
    display: inline-block;
}





/* Démonstration 2: Navigation */

.nav-demo  .nav-item {
    padding: 15px 25px;
    text-decoration: none;
    font-weight: 500;
    
}



/* Démonstration 3: Formulaire */

.form-group {
    margin-bottom: 20px;
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

@keyframes call-to-action {
    0%, 100% { 
        transform: scale(1.05);
    }
    50% { 
        transform: scale(1.08);
    }
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

@keyframes call-to-action {
    0%, 100% { 
        transform: scale(1.05);
    }
    50% { 
        transform: scale(1.08);
    }
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
    font-size: 2.5em;
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

@media (max-width: 768px) {
    .nav-demo {
        flex-direction: column;
    }
    
    .nav-item {
        border-right: none;
        border-bottom: 1px solid #bdc3c7;
    }
    
    .form-buttons {
        flex-direction: column;
    }
    
}

.comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 20px 0;
}

.comparison-item {
    background: white;
    padding: 25px;
}

.comparison-title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 10px;
}

.bad-example .comparison-title {
    background: #ffebee;
    color: #c62828;
}

.good-example .comparison-title {
    background: #e8f5e8;
    color: #2e7d32;
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

/* Mauvais exemple - éléments dispersés */
.bad-form .form-group {
    margin-bottom: 30px;
}

/* Bon exemple - éléments groupés */
.good-form .personal-info {
    background: rgba(21, 20, 66, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border-left: 4px solid #151442;
}

.good-form .contact-info {
    background: rgba(21, 20, 66, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border-left: 4px solid #151442;
}

.good-form .message-info {
    background: rgba(21, 20, 66, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border-left: 4px solid #151442;
}

.section-title {
    font-size: 1.1em;
    font-weight: bold;
    color: #151442;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Démonstration 2: Profil utilisateur */
.profile-demo {
    padding: 20px;
}

.profile-avatar {
    width: 80px;
    height: 80px;
    background: #151442;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
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
    color: #151442;
}

.profile-role {
    color: #151442;
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
    color: #151442;
}

.stat-label {
    font-size: 0.9em;
    color: #151442;
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

.good-profile .profile-main {
    flex: 1;
}

.good-profile .profile-avatar {
    margin: 0;
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
    background: white;
    border: 1px solid #e9ecef;
}

.product-image {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #ff6b6b, #ee5a52);
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

.product-name {
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 5px;
}

.product-description {
    color: #7f8c8d;
    font-size: 0.9em;
}

.product-price {
    font-size: 1.2em;
    font-weight: bold;
    color: #27ae60;
    margin-left: 15px;
}

/* Mauvais exemple - informations dispersées */
.bad-product .product-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
}

.bad-product .product-image {
    margin: 0;
}

.bad-product .product-price {
    margin: 0;
}


.explanation {
    background: white;
    color: #151442;
    padding: 25px;
    margin-top: 30px;
    line-height: 1.6;
}

.explanation h3 {
    margin-bottom: 15px;
    font-size: 1.3em;
}

.explanation strong {
    background: rgba(21, 20, 66,0.2);
    color: #151442;
    padding: 2px 6px;
}

@media (max-width: 768px) {
    .comparison {
        grid-template-columns: 1fr;
    }
    
    .good-profile {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .header h3 {
        font-size: 2em;
    }
}





     
    
        @keyframes pulse-glow {
            0%, 100% { 
                box-shadow: 0 15px 35px rgba(255, 107, 107, 0.3);
                transform: scale(1.05);
            }
            50% { 
                box-shadow: 0 20px 45px rgba(255, 107, 107, 0.5);
                transform: scale(1.08);
            }
        }
        
     
        
        @keyframes subtle-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
        }
        
       
</style>