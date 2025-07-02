<template>
    <div class="container">
        <div class="stats">
            <div class="stat-item bg-slate-50 dark:bg-slate-950">
                <div class="stat-number text-primary">2.6s</div>
                <div class="stat-label">Temps pour trouver le panier (navigation standard)</div>
            </div>
            <div class="stat-item bg-slate-50 dark:bg-slate-950">
                <div class="stat-number text-primary">12.4s</div>
                <div class="stat-label">Temps pour trouver le panier (navigation créative)</div>
            </div>
            <div class="stat-item bg-slate-50 dark:bg-slate-950">
                <div class="stat-number text-primary">85%</div>
                <div class="stat-label">Utilisateurs qui abandonnent face à une interface non-familière</div>
            </div>
            <div class="stat-item bg-slate-50 dark:bg-slate-950">
                <div class="stat-number text-primary">3x</div>
                <div class="stat-label">Plus d'erreurs avec des patterns non-conventionnels</div>
                </div>
            </div>
                    
   


        <!-- Démonstration : Menu navigation -->
        <div>
            <h2>Les exemples </h2>
        </div>
        <div class="my-8 bg-slate-50 dark:bg-slate-700 p-4">
            <div class="p-4 m-4 border border-2 border-red-700">
                <div class="bg-red-700 p-4 text-white flex items-center">
                     <UIcon name="i-lucide-octagon-x" class="size-8 " />
                    <div class="ml-4">
                        <p class="font-bold">Mauvais exemple ! - Navigation "Créative"</p>
                        <ul class="mt-2">
                            <li>Navigation inhabituelle déroute les utilisateurs</li>
                            <li>Menu flottant non-standard</li>
                            <li>Catégories vagues et poétiques</li>
                            <li>Pas de panier visible</li>
                            <li>Courbe d'apprentissage élevée</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-4 example-card">
                    <!-- Mauvaise pratique -->
                    <div class="creative-nav">
                        <div class="creative-header">
                            <div class="creative-logo">ARTISAN</div>
                            <input type="text" class="creative-search" placeholder="Rechercher dans l'univers...">
                        </div>
                        <div class="creative-categories">
                            <a href="#" class="creative-category">Mystère</a>
                            <a href="#" class="creative-category">Élégance</a>
                            <a href="#" class="creative-category">Raffinement</a>
                        </div>
                    </div>
                    
                    <div class="floating-menu p-4 m-4 border border-2 border-red-700 text-red-700 text-center bg-red-200">
                        <UIcon name="i-lucide-octagon-x" class="size-8 " />
                      
                        <div class="menu-item flex items-center justify-center">🏠</div>
                        <div class="menu-item flex items-center justify-center">🛍️</div>
                        <div class="menu-item flex items-center justify-center">❤️</div>
                        <div class="menu-item flex items-center justify-center">👤</div>
                          <div class="bg-red-700 p-1 text-white flex items-center justify-center"><small>Mauvaise<br> pratique</small></div>
                    </div>
                </div>
                
                
            </div>
            <div class="p-4 m-4 border border-2 border-emerald-700">
                <div class="bg-emerald-700  p-4 text-white flex items-center">
                  <UIcon name="i-lucide-circle-check-big" class="size-8 " />
                    <div class="ml-4">
                        <p class="font-bold">Bon exemple - Navigation Conventionnelle</p>
                        <ul class="mt-2">
                            <li>Structure familière (logo, recherche, panier)</li>
                            <li>Catégories claires et descriptives</li>
                            <li>Panier visible avec compteur</li>
                            <li>Apprentissage immédiat</li>
                            <li>Conforme aux attentes des utilisateurs</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-2">
                    <!-- Bonne pratique -->
                    <div class="conventional-nav">
                        <div class="nav-top">
                            Livraison gratuite dès 50€ d'achat
                        </div>
                        <div class="nav-main">
                            <div class="logo">ShopEasy</div>
                            <div class="search-bar">
                                <input type="text" class="search-input" placeholder="Rechercher un produit...">
                                <button class="search-btn">🔍</button>
                            </div>
                            <div class="nav-icons">
                                <div class="nav-icon">👤</div>
                                <div class="nav-icon">❤️</div>
                                <div class="nav-icon">
                                    🛒
                                    <span class="cart-badge">3</span>
                                </div>
                            </div>
                        </div>
                        <div class="nav-categories">
                            <div class="category-links">
                                <a href="#" class="category-link">Électronique</a>
                                <a href="#" class="category-link">Mode</a>
                                <a href="#" class="category-link">Maison</a>
                                <a href="#" class="category-link">Sport</a>
                                <a href="#" class="category-link">Livres</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.title {
    text-align: center;
    margin-bottom: 40px;
    color: #2c3e50;
}

.examples-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
}

.example-card:hover {
    transform: translateY(-5px);
}

.status-badge {
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
}


.mockup {
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: white;
}

/* Navigation conventionnelle (bonne pratique) */
.conventional-nav {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    padding: 0;
}

.nav-top {
    background: #f8f9fa;
    padding: 8px 0;
    font-size: 12px;
    text-align: center;
    color: #666;
}

.nav-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #e74c3c;
}

.search-bar {
    flex: 1;
    max-width: 500px;
    margin: 0 30px;
    position: relative;
}

.search-input {
    width: 100%;
    padding: 12px 50px 12px 15px;
    border: 2px solid #ddd;
    border-radius: 25px;
    font-size: 14px;
}

.search-btn {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background: #e74c3c;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
}

.nav-icons {
    display: flex;
    gap: 20px;
    align-items: center;
}

.nav-icon {
    position: relative;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: background 0.2s;
}

.nav-icon:hover {
    background: #f0f0f0;
}

.cart-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #e74c3c;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-categories {
    background: #fff;
    padding: 15px 20px;
    border-bottom: 1px solid #e0e0e0;
}

.category-links {
    display: flex;
    gap: 30px;
    justify-content: center;
}

.category-link {
    color: #666;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}

.category-link:hover {
    color: #e74c3c;
}

/* Navigation créative (mauvaise pratique) */
.creative-nav {
    background: #2d2c51;
    color: white;
    padding: 0;
}

.creative-header {
    text-align: center;
    padding: 30px 20px;
}

.creative-logo {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.creative-search {
    background: rgba(255,255,255,0.2);
    border: none;
    padding: 15px 20px;
    border-radius: 30px;
    color: white;
    width: 300px;
    text-align: center;
    backdrop-filter: blur(10px);
}

.creative-search::placeholder {
    color: rgba(255,255,255,0.8);
}

.floating-menu {
    position: fixed;
    top: 50%;
    right:0px;
    transform: translateY(-50%);
    z-index: 1000;
}

.menu-item {
    margin: 20px auto;
    text-align: center;
    background: rgba(255,255,255,0.9);
    color: #333;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-item:hover {
    transform: scale(1.1);
    background: white;
}

.creative-categories {
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 20px;
}

.creative-category {
    background: rgba(255,255,255,0.1);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
}

.creative-category:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
}



.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.stat-item {
    padding: 20px;
    text-align: center;
}

.stat-number {
    font-size: 24px;
    font-weight: bold;
}

.stat-label {
    font-size: 14px;
    margin-top: 5px;
}

@media (max-width: 768px) {
    .examples-grid {
        grid-template-columns: 1fr;
    }
    
    .nav-main {
        flex-direction: column;
        gap: 15px;
    }
    
    .search-bar {
        margin: 0;
        max-width: 100%;
    }
    
    .category-links {
        flex-wrap: wrap;
        gap: 15px;
    }
}
</style>