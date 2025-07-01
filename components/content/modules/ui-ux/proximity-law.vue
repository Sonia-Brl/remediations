<template>
    <div class="container">
        <!-- Démonstration : Menu navigation -->
        <h3>Exemple : Formulaire de contact </h3>
        <p>Comparaison entre champs dispersés vs champs groupés par catégorie</p>
        <div class="flex">
            <div class="w-100 flex-auto md:w-48 p-4 m-4 border border-2 border-red-700">
                <div class="bg-red-700 p-4 text-white flex items-center">
                    <UIcon name="i-lucide-octagon-x" class="size-8 " />
                    <div class="ml-4">
                        <span class="font-bold">Mauvais exemple !</span><br>
                        <span>Les champs sont dispersés sans logique apparente</span>
                    </div>
                </div>
                <div class="bg-white p-4 bad-form shadow-lg">
                    <div class="form-group">
                        <label>Prénom</label>
                        <input type="text" placeholder="Votre prénom">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="votre@email.com">
                    </div>
                    <div class="form-group">
                        <label>Nom</label>
                        <input type="text" placeholder="Votre nom">
                    </div>
                    <div class="form-group">
                        <label>Téléphone</label>
                        <input type="tel" placeholder="06 12 34 56 78">
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea placeholder="Votre message"></textarea>
                    </div>
                </div>
            </div>
            <div class="w-100 flex-auto md:w-48 p-4 m-4 border border-2 border-emerald-700">
                <div class="bg-emerald-700  p-4 text-white flex items-center">
                    <UIcon name="i-lucide-circle-check-big" class="size-8 " />
                    <div class="ml-4">
                        <span class="font-bold">Bon exemple !</span><br>
                        <span>Les champs sont regroupés par catégorie logique</span>
                    </div>
                    
                    
                </div>
                <div class="bg-white p-4 good-form shadow-lg">
                    <div class="form-group-info">
                        <div class="section-title">Informations personnelles</div>
                        <div class="form-group">
                            <label>Prénom</label>
                            <input type="text" placeholder="Votre prénom">
                        </div>
                        <div class="form-group">
                            <label>Nom</label>
                            <input type="text" placeholder="Votre nom">
                        </div>
                    </div>
                    
                    <div class="form-group-info">
                        <div class="section-title">Contact</div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="votre@email.com">
                        </div>
                        <div class="form-group">
                            <label>Téléphone</label>
                            <input type="tel" placeholder="06 12 34 56 78">
                        </div>
                    </div>
                    
                    <div class="form-group-info">
                        <div class="section-title">Message</div>
                        <div class="form-group">
                            <label>Votre message</label>
                            <textarea placeholder="Décrivez votre demande"></textarea>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
             <!-- Démonstration 2 : Liste de produits -->
        <h3>Exemple : Liste de produits </h3>
        <p>Layout vertical désordonné vs alignement horizontal cohérent</p>
        <div class="flex">
            <div class="w-100 flex-auto md:w-48 p-4 m-4 border border-2 border-red-700">
                <div class="bg-red-700 p-4 text-white flex items-center">
                    <UIcon name="i-lucide-octagon-x" class="size-8 " />
                    <div class="ml-4">
                        <span class="font-bold">Mauvais exemple !</span><br>
                        <span>Éléments empilés sans cohérence horizontale</span>
                    </div>
                </div>
                <div class="p-4 mt-4">
                     <div class="flex flex-col flex flex-col items-center justify-center">
                        <div class="w-full text-center p-4 flex flex-col items-center justify-center my-4 shadow-lg">
                            <div class="product-image">📱</div>
                            <div class="product-details">
                                <div class="font-bold">iPhone 15 Pro</div>
                                <div class="product-description">Smartphone dernière génération</div>
                            </div>
                            <div class="product-price">1199€</div>
                        </div>
                        <div class="w-full text-center p-4 flex flex-col items-center justify-center my-4 shadow-lg">
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
            <div class="w-100 flex-auto md:w-48 p-4 m-4 border border-2 border-emerald-700">
                <div class="bg-emerald-700  p-4 text-white flex items-center">
                    <UIcon name="i-lucide-circle-check-big" class="size-8 " />
                    <div class="ml-4">
                        <span class="font-bold">Bon exemple !</span><br>
                        <span>Image, détails et prix sont alignés et groupés</span>
                    </div>
                </div>
                <div class="bg-white p-4 good-form shadow-lg">
                         <div class="flex-col  good-product">
                        <div class="product-item">
                            <div class="product-image">📱</div>
                            <div class="product-details">
                                <div class="font-bold">iPhone 15 Pro</div>
                                <div class="product-description">Smartphone dernière génération</div>
                            </div>
                            <div class="product-price">1199€</div>
                        </div>
                        <div class="product-item">
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
  <!-- Démonstration 3 : Profil utilisateur -->
             <h3>Exemple : Profil utilisateur </h3>
        <p>Éléments éparpillés vs avatar et infos regroupés logiquement</p>
        <div class="flex">
            <div class="w-100 flex-auto md:w-48 p-4 m-4 border border-2 border-red-700">
                <div class="bg-red-700 p-4 text-white flex items-center">
                    <UIcon name="i-lucide-octagon-x" class="size-8 " />
                    <div class="ml-4">
                        <span class="font-bold">Mauvais exemple !</span><br>
                        <span>Éléments empilés sans cohérence horizontale</span>
                    </div>
                </div>
                <div class="bg-white p-4 bad-form shadow-lg">
                 <div class="bg-white  profile-demo bad-profile">
                        <div class="profile-avatar">DL</div>
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
            <div class="w-100 flex-auto md:w-48 p-4 m-4 border border-2 border-emerald-700">
                <div class="bg-emerald-700  p-4 text-white flex items-center">
                    <UIcon name="i-lucide-circle-check-big" class="size-8 " />
                    <div class="ml-4">
                        <span class="font-bold">Bon exemple !</span><br>
                        <span>Image, détails et prix sont alignés et groupés</span>
                    </div>
                </div>
                <div class="bg-white p-4 good-form shadow-lg">
                         <div class="bg-white  profile-demo good-profile">
                            <div class="profile-avatar p-4">DL</div>
                            <div class="profile-main">
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
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    background-color: #fff;
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



/** Démonstration 1 : Formulaire de contact **/
.form-group input, .form-group textarea {
    padding: 10px;
    border: 2px solid #e9ecef;
    width: 100%;
    
}
.formula,
.form-group-info{
    background: rgba(21, 20, 66, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border-left: 4px solid #151442;
}
input{
    background-color: #fff;
}


/* Démonstration 3 : Profil utilisateur */
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
