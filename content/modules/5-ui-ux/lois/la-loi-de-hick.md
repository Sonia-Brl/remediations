---
title: La Loi de Hick
module: UI/UX
submodule: 6 - Les principales lois de l'UX
toc: true
---
![Visuel de la loi de Hick](/assets/img/ui-ux/lois/loi-hick.png)
# La Loi de Hick

## La loi 
La loi de Hick établit que la durée requise pour accomplir une action s’accroît proportionnellement au nombre d’alternatives disponibles et à leur degré de complexité.

## L’application

Structurez au maximum la présentation des données et **optez systématiquement pour le format le plus instantanément lisible.**

Simplifiez les choix sans appauvrir l'expérience. Utilisez la hiérarchisation, la catégorisation et la progressive disclosure pour offrir puissance et simplicité.

Commencez par compter les options dans vos interfaces actuelles, puis appliquez les techniques d'optimisation présentées dans ce cours. Les gains en expérience utilisateur et en métriques business seront mesurables rapidement.

### Guidelines de Design
#### Règles d'or
1. **Questionnez chaque option** : Est-elle vraiment nécessaire ?
2. **Groupez logiquement** : Créez des catégories cohérentes
3. **Priorisez visuellement** : Hiérarchisez par importance
4. **Testez régulièrement** : Mesurez l'impact de vos choix

#### Checklist Pratique

- Compter les options à chaque niveau de navigation
- Identifier les points de friction dans les parcours
- Analyser les taux d'abandon par étape
- Comparer avec les meilleures pratiques sectorielles
- Tester les alternatives avec de vrais utilisateurs


## L'explication
La Loi de Hick est un principe incontournable pour créer des interfaces efficaces. Elle nous rappelle que **chaque option supplémentaire a un coût cognitif**. L'art du design réside dans l'équilibre entre richesse fonctionnelle et simplicité d'usage.

### Principe Scientifique

#### Formule Mathématique
```
T = a + b × log₂(n + 1)
```
Où :
- **T** = Temps de réaction
- **a** = Temps de base (incompressible)
- **b** = Constante empirique
- **n** = Nombre d'options équiprobables
- **log₂** = Logarithme en base 2

#### Mécanisme Cognitif
1. **Reconnaissance** : L'utilisateur identifie les options disponibles
2. **Évaluation** : Chaque option est analysée mentalement
3. **Comparaison** : Les alternatives sont pesées les unes contre les autres
4. **Décision** : Un choix final est effectué
5. **Exécution** : L'action correspondante est déclenchée

#### Implications Pratiques
- **2 options** : Temps de base + 1 bit d'information
- **4 options** : Temps de base + 2 bits d'information  
- **8 options** : Temps de base + 3 bits d'information
- **16 options** : Temps de base + 4 bits d'information

**Observation clé** : Doubler les options n'augmente que d'1 bit le temps de traitement (croissance logarithmique, pas linéaire).

## Les exemples

::hick-law
::

## Techniques utilisées

#### Stratégiques
- **Catégorisation** : Grouper les éléments similaires
- **Priorisation** : Mettre en avant les actions principales
- **Progressive disclosure** : Révéler les options par étapes

#### Optimisations
- **Auto-complétion** : Réduire les options pendant la frappe
- **Valeurs par défaut** : Pré-sélectionner les choix les plus probables
- **Groupement géographique** : Organiser par régions/zones
- **Filtres intelligents** : Proposer les plus pertinents selon le contexte
- **Nombre de résultats** : Indiquer l'impact de chaque filtre
- **Historique** : Mémoriser les filtres fréquemment utilisés

#### Simplification
- **Analyse d'usage** : Identifier les 20% d'actions qui représentent 80% de l'usage
- **Contextualisation** : Adapter les options selon la situation
- **Élimination progressive** : Supprimer les fonctionnalités peu utilisées

#### Groupement 
- **Sémantique** : Par fonction ou domaine
- **Fréquence** : Les plus utilisées en premier
- **Workflow** : Selon l'ordre logique des tâches

#### Hiérarchisation Visuelle
- **Contraste** : Actions principales plus visibles
- **Taille** : Boutons proportionnels à l'importance
- **Position** : Placement selon les patterns de lecture
- **Couleur** : Codes visuels pour guider l'attention

#### Patterns de Design Spécialisés

**Choix Binaires**
- Toggle switches pour Oui/Non
- Boutons radio pour choix exclusifs

**Choix Multiple**
- Checkboxes avec "Tout sélectionner"
- Tags avec recherche/filtrage

## Impact UX

**E-commerce :**
- **Conversion** : +15-30% en moyenne
- **Panier moyen** : Moins d'abandon pendant l'achat
- **Satisfaction** : Expérience plus fluide

**Applications :**
- **Engagement** : Utilisateurs plus actifs
- **Rétention** : Moins de désinstallations
- **Support** : Réduction des demandes d'aide

**Sites Web :**
- **Taux de rebond** : Réduction significative
- **Pages vues** : Navigation plus profonde
- **Objectifs** : Meilleure completion des conversions