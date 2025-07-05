---
title:  1 - HTML5 Sémantique et Accessibilité WCAG 2.2
module: Html
submodule: HTML 5 - Sémentique
toc: true
---

# HTML5 Sémantique et Accessibilité WCAG 2.2 




## 1. Introduction à la Sémantique HTML5 {#introduction}

### Pourquoi la Sémantique Compte en 2025

La sémantique HTML5 va bien au-delà de la simple structuration du contenu. Elle constitue la fondation de :

- **L'accessibilité universelle** : permettre à tous les utilisateurs d'accéder au contenu
- **L'optimisation SEO avancée** : améliorer la compréhension par les moteurs de recherche
- **L'interopérabilité** : faciliter la consommation de contenu par diverses technologies
- **La maintenance à long terme** : créer du code robuste et évolutif

### Le Modèle Mental Sémantique

```html
<!-- ❌ Mauvaise approche :Div-itis -->
<div class="header">
  <div class="navigation">...</div>
</div>
<div class="content">
  <div class="article">...</div>
</div>

<!-- ✅ Approche sémantique experte -->
<header role="banner">
  <nav role="navigation" aria-label="Navigation principale">...</nav>
</header>
<main role="main">
  <article role="article">...</article>
</main>
```

### Hiérarchie de l'Information

La sémantique suit une hiérarchie logique :

1. **Document** (html)
2. **Sections** (header, nav, main, aside, footer)
3. **Contenu** (article, section, div)
4. **Détails** (h1-h6, p, span)

---

## 2. Architecture Document et Structure {#architecture}

### Structure Document Moderne

```html
<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre Descriptif et Accessible</title>
  <meta name="description" content="Description précise du contenu">
  
  <!-- Préchargement et optimisation -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="//cdn.example.com">
  
  <!-- Accessibility et SEO -->
  <link rel="canonical" href="https://example.com/page">
</head>
<body>
  <!-- Skip links pour l'accessibilité -->
  <a href="#main-content" class="skip-link">Aller au contenu principal</a>
  <a href="#main-navigation" class="skip-link">Aller à la navigation</a>
  
  <header role="banner">
    <!-- En-tête du site -->
  </header>
  
  <nav id="main-navigation" role="navigation" aria-label="Navigation principale">
    <!-- Navigation principale -->
  </nav>
  
  <main id="main-content" role="main">
    <!-- Contenu principal -->
  </main>
  
  <aside role="complementary" aria-label="Informations complémentaires">
    <!-- Contenu complémentaire -->
  </aside>
  
  <footer role="contentinfo">
    <!-- Pied de page -->
  </footer>
</body>
</html>
```

### Landmarks et Rôles ARIA

Les landmarks créent une carte mentale du document :

```html
<!-- Structure avec landmarks explicites -->
<header role="banner" aria-label="En-tête du site">
  <h1>Mon Site Web</h1>
  <nav role="navigation" aria-label="Menu principal">
    <ul>
      <li><a href="/" aria-current="page">Accueil</a></li>
      <li><a href="/about">À propos</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main role="main" aria-label="Contenu principal">
  <article role="article" aria-labelledby="article-title">
    <header>
      <h1 id="article-title">Titre de l'Article</h1>
      <p>Publié le <time datetime="2025-05-30">30 mai 2025</time></p>
    </header>
    
    <section aria-labelledby="section1-title">
      <h2 id="section1-title">Section 1</h2>
      <p>Contenu de la section...</p>
    </section>
  </article>
</main>

<aside role="complementary" aria-label="Articles connexes">
  <h2>Articles Similaires</h2>
  <nav aria-label="Navigation des articles connexes">
    <ul>
      <li><a href="/article1">Article 1</a></li>
      <li><a href="/article2">Article 2</a></li>
    </ul>
  </nav>
</aside>
```

---

## 3. Éléments Sémantiques Avancés {#elements-semantiques}

### Éléments de Contenu Spécialisés

#### Figure et Figcaption

```html
<!-- Image avec description accessible -->
<figure role="img" aria-labelledby="fig1-caption">
  <img src="graph-sales-2025.png" 
       alt="Graphique montrant l'évolution des ventes de janvier à mai 2025">
  <figcaption id="fig1-caption">
    <strong>Figure 1 :</strong> Évolution des ventes Q1-Q2 2025. 
    Les ventes ont augmenté de 23% par rapport à la même période en 2024.
  </figcaption>
</figure>

<!-- Code avec explication -->
<figure role="code" aria-labelledby="code1-caption">
  <pre><code class="language-javascript">
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
  </code></pre>
  <figcaption id="code1-caption">
    Fonction JavaScript calculant le total d'une liste d'articles
  </figcaption>
</figure>
```

#### Details et Summary

```html
<!-- Accordéon accessible natif -->
<details>
  <summary aria-expanded="false">
    Politique de confidentialité
    <span class="icon" aria-hidden="true">▼</span>
  </summary>
  <div class="details-content">
    <p>Nous respectons votre vie privée...</p>
    <h3>Collecte des données</h3>
    <p>Les données collectées incluent...</p>
  </div>
</details>

<!-- FAQ avec multiple details -->
<section aria-labelledby="faq-title">
  <h2 id="faq-title">Questions Fréquentes</h2>
  
  <details>
    <summary>Comment créer un compte ?</summary>
    <p>Pour créer un compte, cliquez sur...</p>
  </details>
  
  <details>
    <summary>Comment réinitialiser mon mot de passe ?</summary>
    <p>La réinitialisation se fait via...</p>
  </details>
</section>
```

#### Time et Data

```html
<!-- Dates et heures sémantiques -->
<article>
  <header>
    <h1>Événement Important</h1>
    <p>
      Publié le 
      <time datetime="2025-05-30T14:30:00+02:00" 
            title="30 mai 2025 à 14h30 CEST">
        30 mai 2025
      </time>
    </p>
    <p>
      Événement prévu le 
      <time datetime="2025-06-15T09:00:00+02:00">
        15 juin 2025 à 9h00
      </time>
    </p>
  </header>
</article>

<!-- Données structurées -->
<p>
  La température actuelle est de 
  <data value="23">23°C</data>
</p>

<p>
  Prix de vente : 
  <data value="299.99" title="299,99 euros">299,99 €</data>
</p>
```

---

## 4. WCAG 2.2 : Principes et Guidelines {#wcag-principes}

### Les 4 Principes Fondamentaux

#### 1. Perceptible
Le contenu doit être présentable de façon perceptible.

```html
<!-- Images avec alternatives textuelles appropriées -->
<!-- Image décorative -->
<img src="decoration.png" alt="" role="presentation">

<!-- Image informative -->
<img src="warning-icon.png" alt="Attention : ">

<!-- Image complexe avec description longue -->
<img src="complex-chart.png" 
     alt="Graphique des ventes par région"
     aria-describedby="chart-description">
<div id="chart-description" class="sr-only">
  Description détaillée : Le graphique montre que la région Nord 
  représente 45% des ventes, l'Ouest 30%, l'Est 15% et le Sud 10%.
</div>

<!-- Contenu vidéo avec alternatives -->
<video controls aria-labelledby="video-title" aria-describedby="video-desc">
  <source src="presentation.mp4" type="video/mp4">
  <source src="presentation.webm" type="video/webm">
  <track kind="captions" src="captions-fr.vtt" srclang="fr" label="Français">
  <track kind="descriptions" src="descriptions-fr.vtt" srclang="fr">
  <p id="video-desc">
    Votre navigateur ne supporte pas la vidéo HTML5. 
    <a href="presentation.mp4">Télécharger la vidéo</a>
  </p>
</video>
<h3 id="video-title">Présentation des nouveaux produits 2025</h3>
```

#### 2. Utilisable
Les composants d'interface doivent être utilisables.

```html
<!-- Navigation au clavier -->
<nav role="navigation" aria-label="Menu principal">
  <button type="button" 
          class="menu-toggle"
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label="Ouvrir le menu principal">
    <span class="hamburger" aria-hidden="true"></span>
  </button>
  
  <ul id="main-menu" class="menu" aria-hidden="true">
    <li><a href="/" tabindex="0">Accueil</a></li>
    <li><a href="/products" tabindex="0">Produits</a></li>
    <li>
      <button type="button" 
              aria-expanded="false" 
              aria-haspopup="true"
              aria-controls="services-submenu">
        Services
      </button>
      <ul id="services-submenu" aria-hidden="true">
        <li><a href="/consulting" tabindex="-1">Conseil</a></li>
        <li><a href="/support" tabindex="-1">Support</a></li>
      </ul>
    </li>
  </ul>
</nav>

<!-- Formulaire avec gestion d'erreurs -->
<form novalidate aria-labelledby="form-title">
  <h2 id="form-title">Formulaire de Contact</h2>
  
  <div class="form-group" role="group" aria-labelledby="name-label">
    <label id="name-label" for="name">
      Nom complet <span aria-label="requis">*</span>
    </label>
    <input type="text" 
           id="name" 
           name="name"
           required
           aria-describedby="name-error name-help"
           aria-invalid="false">
    <div id="name-help" class="help-text">
      Entrez votre prénom et nom de famille
    </div>
    <div id="name-error" class="error-message" aria-live="polite" role="alert">
      <!-- Message d'erreur inséré dynamiquement -->
    </div>
  </div>
</form>
```

#### 3. Compréhensible
L'information et l'utilisation de l'interface doivent être compréhensibles.

```html
<!-- Langue et changements de langue -->
<html lang="fr">
<head>
  <title>Site Multilingue</title>
</head>
<body>
  <header>
    <h1>Bienvenue sur notre site</h1>
    <nav aria-label="Sélection de langue">
      <ul>
        <li><a href="/fr" lang="fr" aria-current="page">Français</a></li>
        <li><a href="/en" lang="en" hreflang="en">English</a></li>
        <li><a href="/es" lang="es" hreflang="es">Español</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Article en français</h2>
      <p>Contenu en français...</p>
      
      <!-- Citation dans une autre langue -->
      <blockquote lang="en">
        <p>"The future belongs to those who believe in the beauty of their dreams."</p>
        <cite>Eleanor Roosevelt</cite>
      </blockquote>
      
      <!-- Définition de termes techniques -->
      <p>
        Le <dfn title="Application Programming Interface">API</dfn> 
        permet l'intégration avec des services tiers.
      </p>
    </article>
  </main>
</body>
</html>

<!-- Instructions claires -->
<section aria-labelledby="instructions-title">
  <h2 id="instructions-title">Instructions de Commande</h2>
  <ol>
    <li>
      <strong>Étape 1 :</strong> Sélectionnez vos produits
      <div class="step-help">
        Utilisez les cases à cocher pour choisir les articles souhaités
      </div>
    </li>
    <li>
      <strong>Étape 2 :</strong> Vérifiez votre panier
      <div class="step-help">
        Contrôlez les quantités et les prix avant de continuer
      </div>
    </li>
  </ol>
</section>
```

#### 4. Robuste
Le contenu doit être robuste pour être interprété par diverses technologies.

```html
<!-- Code HTML valide et bien structuré -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Robuste</title>
</head>
<body>
  <!-- Structure sémantique claire -->
  <header role="banner">
    <h1>Titre Principal</h1>
  </header>
  
  <main role="main">
    <!-- Contenu avec identifiants uniques -->
    <section aria-labelledby="section1">
      <h2 id="section1">Section 1</h2>
      <p>Contenu...</p>
    </section>
  </main>
  
  <!-- Compatibilité avec les technologies d'assistance -->
  <div role="region" aria-labelledby="dynamic-content" aria-live="polite">
    <h3 id="dynamic-content">Contenu Dynamique</h3>
    <div id="status-updates">
      <!-- Mises à jour annoncées aux lecteurs d'écran -->
    </div>
  </div>
</body>
</html>
```

---

## 5. ARIA : Techniques Avancées {#aria-avance}

### Propriétés ARIA Essentielles

#### aria-label, aria-labelledby, aria-describedby

```html
<!-- Bouton avec label explicite -->
<button aria-label="Fermer la fenêtre modale">
  <span aria-hidden="true">×</span>
</button>

<!-- Groupe de champs avec label complexe -->
<fieldset role="group" aria-labelledby="shipping-title shipping-subtitle">
  <legend>
    <span id="shipping-title">Adresse de Livraison</span>
    <span id="shipping-subtitle" class="subtitle">Informations requises</span>
  </legend>
  
  <input type="text" 
         id="address" 
         aria-describedby="address-help address-format"
         placeholder="123 Rue de la Paix">
  
  <div id="address-help" class="help">
    Entrez votre adresse complète
  </div>
  <div id="address-format" class="format-info">
    Format : Numéro, Rue, Code postal, Ville
  </div>
</fieldset>

<!-- Liste avec description -->
<section aria-labelledby="product-list-title" aria-describedby="product-list-desc">
  <h2 id="product-list-title">Nos Produits</h2>
  <p id="product-list-desc">
    Liste de nos produits phares avec prix et disponibilité
  </p>
  <ul role="list">
    <li role="listitem">Produit 1 - 29,99€ - En stock</li>
    <li role="listitem">Produit 2 - 49,99€ - Rupture de stock</li>
  </ul>
</section>
```

#### États Dynamiques

```html
<!-- Composant avec états multiples -->
<div class="accordion-item">
  <button type="button"
          class="accordion-trigger"
          aria-expanded="false"
          aria-controls="panel1"
          id="trigger1">
    <span>Section 1</span>
    <span class="icon" aria-hidden="true">+</span>
  </button>
  
  <div id="panel1"
       class="accordion-panel"
       role="region"
       aria-labelledby="trigger1"
       aria-hidden="true">
    <p>Contenu de la section 1...</p>
  </div>
</div>

<!-- Bouton toggle avec état -->
<button type="button"
        class="toggle-button"
        aria-pressed="false"
        aria-describedby="toggle-desc">
  <span class="toggle-text">Notifications</span>
  <span class="toggle-switch" aria-hidden="true"></span>
</button>
<div id="toggle-desc" class="sr-only">
  Active ou désactive les notifications push
</div>

<!-- Élément avec progression -->
<div role="progressbar" 
     aria-valuenow="32" 
     aria-valuemin="0" 
     aria-valuemax="100"
     aria-label="Progression du téléchargement">
  <div class="progress-fill" style="width: 32%"></div>
  <span class="progress-text">32% terminé</span>
</div>
```

#### Live Regions

```html
<!-- Annonces importantes -->
<div aria-live="assertive" aria-atomic="true" class="sr-only" id="status-important">
  <!-- Messages critiques (erreurs, confirmations) -->
</div>

<div aria-live="polite" aria-atomic="false" class="sr-only" id="status-general">
  <!-- Mises à jour générales -->
</div>

<!-- Exemple d'utilisation -->
<form id="contact-form">
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" required>
  </div>
  
  <button type="submit">Envoyer</button>
  
  <!-- Zone de statut pour les messages -->
  <div id="form-status" 
       role="status" 
       aria-live="polite" 
       aria-atomic="true"
       class="form-status">
    <!-- Messages injectés ici -->
  </div>
</form>

<script>
// Exemple de mise à jour accessible
function updateStatus(message, isError = false) {
  const statusElement = document.getElementById('form-status');
  const liveRegion = isError 
    ? document.getElementById('status-important')
    : document.getElementById('status-general');
    
  statusElement.textContent = message;
  liveRegion.textContent = message;
  
  if (isError) {
    statusElement.setAttribute('role', 'alert');
  } else {
    statusElement.setAttribute('role', 'status');
  }
}
</script>
```

---

## 6. Navigation et Focus Management {#navigation-focus}

### Skip Links et Navigation

```html
<!-- Skip links optimisés -->
<div class="skip-links">
  <a href="#main-content" class="skip-link">
    Aller au contenu principal
  </a>
  <a href="#main-navigation" class="skip-link">
    Aller à la navigation
  </a>
  <a href="#search" class="skip-link">
    Aller à la recherche
  </a>
  <a href="#footer" class="skip-link">
    Aller au pied de page
  </a>
</div>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  transition: top 0.3s;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
</style>
```

### Gestion du Focus Avancée

```html
<!-- Modal avec piège de focus -->
<div id="modal" 
     class="modal" 
     role="dialog" 
     aria-labelledby="modal-title"
     aria-describedby="modal-desc"
     aria-hidden="true"
     tabindex="-1">
  
  <div class="modal-content">
    <header class="modal-header">
      <h2 id="modal-title">Confirmation</h2>
      <button type="button" 
              class="modal-close"
              aria-label="Fermer la modal">
        <span aria-hidden="true">&times;</span>
      </button>
    </header>
    
    <div class="modal-body">
      <p id="modal-desc">Êtes-vous sûr de vouloir supprimer cet élément ?</p>
    </div>
    
    <footer class="modal-footer">
      <button type="button" class="btn btn-cancel">Annuler</button>
      <button type="button" class="btn btn-danger">Supprimer</button>
    </footer>
  </div>
</div>

<script>
class ModalManager {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.focusableElements = this.modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
    this.previousFocus = null;
  }
  
  open() {
    this.previousFocus = document.activeElement;
    this.modal.setAttribute('aria-hidden', 'false');
    this.modal.classList.add('is-open');
    this.firstFocusable.focus();
    
    // Piège de focus
    this.modal.addEventListener('keydown', this.trapFocus.bind(this));
  }
  
  close() {
    this.modal.setAttribute('aria-hidden', 'true');
    this.modal.classList.remove('is-open');
    
    // Restaurer le focus
    if (this.previousFocus) {
      this.previousFocus.focus();
    }
    
    this.modal.removeEventListener('keydown', this.trapFocus.bind(this));
  }
  
  trapFocus(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable.focus();
        }
      } else {
        if (document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable.focus();
        }
      }
    }
    
    if (e.key === 'Escape') {
      this.close();
    }
  }
}
</script>
```

### Navigation au Clavier

```html
<!-- Menu dropdown accessible -->
<nav class="main-nav" role="navigation" aria-label="Navigation principale">
  <ul class="nav-list" role="menubar">
    <li role="none">
      <a href="/" role="menuitem">Accueil</a>
    </li>
    <li role="none" class="has-submenu">
      <button type="button" 
              role="menuitem"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="products-menu"
              class="nav-trigger">
        Produits
        <span class="icon" aria-hidden="true">▼</span>
      </button>
      
      <ul id="products-menu" 
          class="submenu" 
          role="menu"
          aria-label="Menu Produits"
          aria-hidden="true">
        <li role="none">
          <a href="/laptops" role="menuitem">Ordinateurs portables</a>
        </li>
        <li role="none">
          <a href="/desktops" role="menuitem">Ordinateurs de bureau</a>
        </li>
        <li role="none">
          <a href="/accessories" role="menuitem">Accessoires</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

<script>
class AccessibleMenu {
  constructor() {
    this.menuItems = document.querySelectorAll('[role="menuitem"]');
    this.currentIndex = 0;
    this.init();
  }
  
  init() {
    this.menuItems.forEach((item, index) => {
      item.addEventListener('keydown', (e) => this.handleKeydown(e, index));
      item.addEventListener('click', (e) => this.handleClick(e));
    });
  }
  
  handleKeydown(e, index) {
    switch(e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.focusNext(index);
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.focusPrevious(index);
        break;
      case 'Home':
        e.preventDefault();
        this.focusFirst();
        break;
      case 'End':
        e.preventDefault();
        this.focusLast();
        break;
      case 'Enter':
      case ' ':
        if (e.target.getAttribute('aria-haspopup')) {
          e.preventDefault();
          this.toggleSubmenu(e.target);
        }
        break;
      case 'Escape':
        this.closeAllSubmenus();
        break;
    }
  }
  
  focusNext(currentIndex) {
    const nextIndex = (currentIndex + 1) % this.menuItems.length;
    this.menuItems[nextIndex].focus();
  }
  
  focusPrevious(currentIndex) {
    const prevIndex = currentIndex === 0 ? this.menuItems.length - 1 : currentIndex - 1;
    this.menuItems[prevIndex].focus();
  }
  
  toggleSubmenu(trigger) {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const submenu = document.getElementById(trigger.getAttribute('aria-controls'));
    
    trigger.setAttribute('aria-expanded', !isExpanded);
    submenu.setAttribute('aria-hidden', isExpanded);
    
    if (!isExpanded) {
      // Focus sur le premier élément du sous-menu
      const firstItem = submenu.querySelector('[role="menuitem"]');
      if (firstItem) firstItem.focus();
    }
  }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  new AccessibleMenu();
});
</script>
```

---

## 7. Formulaires Accessibles {#formulaires}

### Structure et Labels

```html
<form class="contact-form" novalidate aria-labelledby="form-title">
  <header class="form-header">
    <h2 id="form-title">Formulaire de Contact</h2>
    <p class="form-description">
      Tous les champs marqués d'un astérisque (*) sont obligatoires.
    </p>
  </header>
  
  <!-- Informations personnelles -->
  <fieldset class="form-section">
    <legend class="section-title">Informations Personnelles</legend>
    
    <div class="form-row">
      <div class="form-group">
        <label for="firstName" class="form-label">
          Prénom <span class="required" aria-label="requis">*</span>
        </label>
        <input type="text" 
               id="firstName" 
               name="firstName"
               class="form-input"
               required
               aria-describedby="firstName-help firstName-error"
               aria-invalid="false"
               autocomplete="given-name">
        <div id="firstName-help" class="help-text">
          Entrez votre prénom tel qu'il apparaît sur vos documents officiels
        </div>
        <div id="firstName-error" class="error-message" role="alert" aria-live="polite">
          <!-- Message d'erreur injecté dynamiquement -->
        </div>
      </div>
      
      <div class="form-group">
        <label for="lastName" class="form-label">
          Nom <span class="required" aria-label="requis">*</span>
        </label>
        <input