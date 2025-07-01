<template>
   <section class="mt-5">
        <div class="container pt-5 bg-white">
            <div class="p-5 d-flex flex-wrap align-items-end">
                <div class="col-md-8">
                    <p class="badge bg-primary me-2">Biais cognitifs</p>
                    <h1 class="fw-bolder display-3">L’effet Von Restroff</h1>
                    <small>Egalement appelé effet d’isolation</small>
                    <p class="lead">L'élément distinctif attire l'attention et améliore la mémorisation</p>
                    <div class="row align-items-center pt-5">
                        <div class="col-md-4 align-self-center ">
                            <h2><strong>L’effet</strong></h2>
                        </div>
                        <div class="col-md-8">
                            <p>Parmi un groupe d’éléments ayant une apparence homogène, celui qui se distingue visuellement attirera davantage l’attention et restera mieux en mémoire.</p>
                        </div>
                    </div>
                    <div class="row align-items-center pt-5">
                        <div class="col-md-4 align-self-center ">
                            <h2><strong>L’application</strong></h2>
                        </div>
                        <div class="col-md-8">
                            <p>Certaines informations sont prioritaires ? Accordez-leur un traitement graphique particulier qui les fait ressortir (chromatisme, proportions, animations…).</p>
                        </div>
                    </div>
                </div>
          
            </div>
        </div>
        <div class="container ">
            <div class="p-5 d-flex flex-wrap align-items-end">
                <div class="explanation">
                    <p>Aussi appelé <strong>"effet d'isolement"</strong>, ce principe stipule que dans un ensemble d'éléments similaires, celui qui se distingue visuellement sera mieux remarqué et mémorisé.</p>
                    <br>
                    <p><strong>Applications pratiques :</strong></p>
                    <p>• Mettre en avant un produit ou une offre spéciale</p>
                    <p>• Distinguer les call-to-action importants</p>
                    <p>• Hiérarchiser l'information dans une interface</p>
                    <p>• Guider l'attention vers les éléments critiques</p>
                    <br>
                    <p><strong>Techniques utilisées :</strong> Couleur contrastante, taille différente, animation, ombres, bordures, typographie distinctive.</p>
                    
                </div>
            </div>
        </div>
    </section>
    <section class="m-5">
        <div class="container">
            <!-- Démonstration 1: E-commerce -->
            <div class="title">
                <h2>E-commerce : Mise en avant d'un produit</h2>
            </div>
            <div class="product-grid my-5">
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
            
        </div>
    </section>
    <section class="mt-5">
        <div class="container">
            <!-- Démonstration 3: Formulaire -->
            <div class="title">
                <h2>Formulaire : Bouton d'action principal</h2>
            </div>
            <div class="my-5 col-md-8 m-auto">
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
                    <button class="btn btn-secondary">Annuler</button>
                    <button class="btn btn-primary">Créer mon compte</button>
                </div>
            </div>
            <p><strong>Résultat :</strong> Le bouton principal guide clairement vers l'action souhaitée.</p>
            
            
        </div>
    </section>
    <section class="mt-5">
        <div class="container">
            <!-- Démonstration 2: Navigation -->
            <div class="title">
                <h2>Navigation : Call-to-action distinctif</h2>
            </div>
            <nav class="nav-demo my-5 col-md-8 m-auto">
                <a href="#" class="nav-item">Accueil</a>
                <a href="#" class="nav-item">Produits</a>
                <a href="#" class="nav-item">Services</a>
                <a href="#" class="nav-item cta">Essai Gratuit</a>
                <a href="#" class="nav-item">Contact</a>
            </nav>
            <p><strong>Résultat :</strong> Le bouton "Essai Gratuit" se démarque des autres éléments de navigation.</p>
            
        </div>
    </section>
    <section class="mt-5">
        <div class="container">
            <!-- Démonstration 4: Dashboard -->
            <div class="title">
                <h2>Dashboard : Métrique importante</h2>
            </div>
            <div class="stats-grid my-5">
                <div class="stat-card">
                    <div class="number">1,247</div>
                    <div class="label">Visiteurs</div>
                </div>
                <div class="stat-card">
                    <div class="number">89</div>
                    <div class="label">Commandes</div>
                </div>
                <div class="stat-card highlight">
                    <div class="number">+127%</div>
                    <div class="label">Conversion</div>
                </div>
                <div class="stat-card">
                    <div class="number">4.2</div>
                    <div class="label">Note moyenne</div>
                </div>
            </div>
            <p><strong>Résultat :</strong> La métrique de conversion, étant la plus importante, attire immédiatement l'œil.</p>
            
        </div>
    </section>
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
    background: white;
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
    background: #d9dede;
    padding: 15px 25px;
    text-decoration: none;
    font-weight: 500;
    margin-right: 0;
}

.nav-demo  .nav-item:hover {
    background: #a0a2a2;
}

.nav-demo  .cta {
    background: #ED0040;
    color: white;
    font-weight: bold;
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
    background: white;
    padding: 25px;
    
    text-align: center;
    border: 2px solid #e9ecef;
    transition: all 0.3s ease;
}

.stat-card .number {
    font-size: 2.5em;
    font-weight: bold;
    color: #7f8c8d;
    margin-bottom: 10px;
}

.stat-card .label {
    color: #2c3e50;
    font-weight: 500;
}

.stat-card.highlight {
    background: #ED0040;
    color: white;
    border-color: #ED0040;
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
    color: #2c3e50;
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
    
    .header h2 {
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