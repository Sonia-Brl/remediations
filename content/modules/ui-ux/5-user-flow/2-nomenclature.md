Voici le guide complet des formes utilisées dans les user flows et leur signification précise :

## Les formes de base

**Ovale/Cercle** 🔵
- **Fonction** : Point de départ et point de fin
- **Utilisation** : "Utilisateur arrive sur le site" (début) ou "Commande confirmée" (fin)
- **Couleur courante** : Vert pour le début, rouge pour la fin

**Rectangle** 📦
- **Fonction** : Pages, écrans ou étapes d'action
- **Utilisation** : "Page d'accueil", "Formulaire d'inscription", "Écran de paiement"
- **Ce qu'il contient** : Le nom de la page/écran et parfois les actions principales

**Losange** 💎
- **Fonction** : Points de décision ou conditions
- **Utilisation** : "L'utilisateur est-il connecté ?", "Le paiement a-t-il réussi ?"
- **Particularité** : Toujours suivi de plusieurs flèches avec des labels "Oui/Non" ou "Succès/Échec"

## Les formes avancées

**Parallélogramme** 📐
- **Fonction** : Entrée de données ou input utilisateur
- **Utilisation** : "Saisir email", "Uploader une photo", "Remplir le formulaire"
- **Contexte** : Quand l'utilisateur doit fournir une information

**Hexagone** ⬡
- **Fonction** : Processus automatisé ou traitement système
- **Utilisation** : "Validation du paiement", "Envoi d'email de confirmation", "Calcul des frais"
- **Particularité** : L'utilisateur n'agit pas, le système travaille

**Rectangle aux coins arrondis** 📱
- **Fonction** : Actions utilisateur ou boutons
- **Utilisation** : "Cliquer sur Acheter", "Appuyer sur Valider", "Swiper vers la droite"
- **Différence** : Plus spécifique qu'un rectangle classique

## Les connecteurs et annotations

**Flèches simples** →
- **Fonction** : Flux linéaire standard
- **Utilisation** : Passage d'une étape à la suivante sans condition

**Flèches avec labels** →[Oui]
- **Fonction** : Résultat d'une décision
- **Utilisation** : Sortent toujours d'un losange avec "Oui/Non", "Succès/Erreur"

**Flèches pointillées** ⇢
- **Fonction** : Flux alternatif ou retour en arrière
- **Utilisation** : "Retour à la page précédente", "Flux d'erreur"

**Annotations/Notes** 📝
- **Fonction** : Précisions ou contraintes
- **Utilisation** : "Seulement si premium", "Maximum 3 tentatives"

## Exemple pratique d'assemblage

Pour un login :
1. **Ovale** : "Utilisateur arrive"
2. **Rectangle** : "Page de connexion"
3. **Parallélogramme** : "Saisir email/mot de passe"
4. **Hexagone** : "Vérification des identifiants"
5. **Losange** : "Identifiants corrects ?"
6. **Flèche [Oui]** → **Rectangle** : "Dashboard"
7. **Flèche [Non]** → **Rectangle** : "Message d'erreur"

## Règles de bonnes pratiques

Chaque forme doit être utilisée de manière cohérente dans tout le diagramme. Un rectangle doit toujours représenter la même chose (une page), un losange toujours une décision. Cette standardisation permet à toute l'équipe de lire et comprendre instantanément le flow, qu'elle soit développeur, product manager ou designer.

https://oscar-black.com/blog/marketing-digital/user-flow/