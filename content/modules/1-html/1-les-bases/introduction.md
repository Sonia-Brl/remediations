---
title: Introduction
module: Html
submodule: 1 - Les bases
ready: true
summary: false
toc: true
---

# Cours d'Introduction au HTML 


## 1. Qu'est-ce que le HTML ?

**HTML** (HyperText Markup Language) est le langage de balisage standard pour créer des pages web. Il décrit la structure et le contenu d'une page web à l'aide de balises.

### Caractéristiques principales :
- **Langage de balisage** : utilise des balises pour structurer le contenu
- **Interprété par les navigateurs** : Chrome, Firefox, Safari, Edge
- **Base du web** : tous les sites web utilisent du HTML
- **Évolutif** : HTML5 est la version actuelle


## 2. Structure de base d'un document HTML

Tout document HTML suit une structure standard :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la page</title>
</head>
<body>
    <!-- Le contenu visible de la page -->
    <h1>Bienvenue sur ma page</h1>
    <p>Ceci est un paragraphe.</p>
</body>
</html>
```

### Explication des éléments :
- `<!DOCTYPE html>` : déclare le type de document HTML5
- `<html>` : élément racine du document
- `<head>` : contient les métadonnées (non visibles)
- `<body>` : contient le contenu visible de la page



## 3. Les balises fondamentales

### Syntaxe des balises
```html
<nom_balise>contenu</nom_balise>
```

### Balises auto-fermantes
```html
<br>  <!-- saut de ligne -->
<hr>  <!-- ligne horizontale -->
<img> <!-- image -->
```

### Balises de titre
```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Sous-sous-titre</h3>
<h4>Titre de niveau 4</h4>
<h5>Titre de niveau 5</h5>
<h6>Titre de niveau 6</h6>
```

### Balises de paragraphe et texte
```html
<p>Ceci est un paragraphe.</p>
<strong>Texte en gras</strong>
<em>Texte en italique</em>
<mark>Texte surligné</mark>
<small>Petit texte</small>
<del>Texte barré</del>
<ins>Texte inséré</ins>
```



## 4. Les attributs

Les attributs fournissent des informations supplémentaires sur les éléments HTML.

### Syntaxe
```html
<balise attribut="valeur">contenu</balise>
```

### Attributs courants
```html
<!-- Attribut id (unique) -->
<p id="mon-paragraphe">Paragraphe avec un ID</p>

<!-- Attribut class (réutilisable) -->
<p class="texte-important">Paragraphe avec une classe</p>

<!-- Attribut style -->
<p style="color: red;">Texte rouge</p>

<!-- Attribut title -->
<p title="Information supplémentaire">Survolez ce texte</p>
```


## 5. Structurer le contenu

### Balises de structure HTML5
```html
<header>
    <h1>En-tête de la page</h1>
    <nav>
        <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Article principal</h2>
        <p>Contenu de l'article...</p>
    </article>
    
    <aside>
        <h3>Barre latérale</h3>
        <p>Contenu secondaire...</p>
    </aside>
</main>

<footer>
    <p>&copy; 2024 Mon site web</p>
</footer>
```

### Balises génériques
```html
<div>Conteneur générique (bloc)</div>
<span>Conteneur générique (inline)</span>
```

## 6. Les liens et images

### Créer des liens
```html
<!-- Lien externe -->
<a href="https://www.google.com">Aller sur Google</a>

<!-- Lien interne -->
<a href="#section1">Aller à la section 1</a>

<!-- Lien vers une autre page -->
<a href="contact.html">Page de contact</a>

<!-- Lien email -->
<a href="mailto:email@exemple.com">Envoyer un email</a>

<!-- Lien téléphone -->
<a href="tel:+33123456789">Appeler</a>
```

### Insérer des images
```html
<!-- Image simple -->
<img src="image.jpg" alt="Description de l'image">

<!-- Image avec dimensions -->
<img src="photo.jpg" alt="Photo" width="300" height="200">

<!-- Image responsive -->
<img src="banner.jpg" alt="Bannière" style="max-width: 100%;">
```

## 7. Les listes

### Liste non ordonnée
```html
<ul>
    <li>Premier élément</li>
    <li>Deuxième élément</li>
    <li>Troisième élément</li>
</ul>
```

### Liste ordonnée
```html
<ol>
    <li>Première étape</li>
    <li>Deuxième étape</li>
    <li>Troisième étape</li>
</ol>
```

### Liste de définitions
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```
## 8. Les tableaux

```html
<table>
    <caption>Tableau des ventes</caption>
    <thead>
        <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ordinateur</td>
            <td>800€</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Souris</td>
            <td>25€</td>
            <td>20</td>
        </tr>
    </tbody>
</table>
```


## 9. Les formulaires

```html
<form action="/submit" method="POST">
    <fieldset>
        <legend>Informations personnelles</legend>
        
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required>
        
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>
        
        <label for="age">Âge :</label>
        <input type="number" id="age" name="age" min="0" max="120">
        
        <label for="pays">Pays :</label>
        <select id="pays" name="pays">
            <option value="">Choisir un pays</option>
            <option value="fr">France</option>
            <option value="be">Belgique</option>
            <option value="ch">Suisse</option>
        </select>
        
        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
        
        <input type="checkbox" id="newsletter" name="newsletter">
        <label for="newsletter">S'abonner à la newsletter</label>
        
        <button type="submit">Envoyer</button>
    </fieldset>
</form>
```


## 10. HTML5 et les nouvelles balises sémantiques

HTML5 a introduit de nouvelles balises pour améliorer la sémantique :

### Balises structurelles
- `<header>` : en-tête de section
- `<nav>` : navigation
- `<main>` : contenu principal
- `<article>` : contenu autonome
- `<section>` : section thématique
- `<aside>` : contenu secondaire
- `<footer>` : pied de page

### Balises multimédia
```html
<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Votre navigateur ne supporte pas l'audio.
</audio>

<!-- Vidéo -->
<video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Votre navigateur ne supporte pas la vidéo.
</video>
```

### Autres balises utiles
```html
<time datetime="2024-01-15">15 janvier 2024</time>
<progress value="70" max="100">70%</progress>
<meter value="0.8" min="0" max="1">80%</meter>
<details>
    <summary>Cliquez pour plus d'infos</summary>
    <p>Contenu masqué par défaut</p>
</details>
```

## 11. Bonnes pratiques

### Structure et organisation
1. **Indentation** : utilisez une indentation cohérente (2 ou 4 espaces)
2. **Noms de fichiers** : utilisez des noms explicites et en minuscules
3. **Commentaires** : documentez votre code
```html
<!-- Ceci est un commentaire -->
```

### Accessibilité
1. **Attribut alt** : toujours renseigner pour les images
2. **Labels** : associer les labels aux champs de formulaire
3. **Structure logique** : utiliser les balises de titre dans l'ordre (h1, h2, h3...)
4. **Contraste** : assurer un bon contraste de couleurs

### Performance
1. **Images optimisées** : utiliser des formats appropriés (WebP, AVIF)
2. **Validation** : valider le code HTML avec des outils comme W3C Validator
3. **Sémantique** : utiliser les bonnes balises pour le bon contenu

### Exemple complet
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page d'accueil de mon site web">
    <title>Mon Premier Site Web</title>
</head>
<body>
    <header>
        <h1>Bienvenue sur mon site</h1>
        <nav>
            <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="accueil">
            <h2>À propos de moi</h2>
            <p>Je suis un développeur web passionné par la création de sites internet.</p>
            <img src="photo.jpg" alt="Photo de profil" width="200">
        </section>

        <section id="services">
            <h2>Mes services</h2>
            <ul>
                <li>Développement web</li>
                <li>Design UI/UX</li>
                <li>Référencement SEO</li>
            </ul>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form>
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required>
                
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message :</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Envoyer</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Mon Site Web. Tous droits réservés.</p>
    </footer>
</body>
</html>
```

## Conclusion

Ce cours vous a donné les bases essentielles du HTML. Pour continuer votre apprentissage :

1. **Pratiquez** : créez vos propres pages web
2. **Explorez CSS** : pour styliser vos pages
3. **Apprenez JavaScript** : pour ajouter de l'interactivité
4. **Utilisez les outils de développement** : inspecteur d'éléments du navigateur
5. **Consultez la documentation** : MDN Web Docs est une excellente ressource

Le HTML est la fondation du développement web. Une fois ces concepts maîtrisés, vous pourrez créer des sites web structurés et accessibles !