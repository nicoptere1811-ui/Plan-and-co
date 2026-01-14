# Commande: /deliver

Workflow de livraison fichier.

## Règles absolues

### Avant livraison
1. Exécuter `/review` mentalement
2. Vérifier 0 erreur code
3. Tester logique si possible
4. S'assurer fichier 100% complet
5. Vérifier aucun `any`

### Format livraison
- 1 fichier COMPLET par message
- Code dans artefact uniquement
- Pas de récapitulatif long
- Réponses courtes

### Après livraison
- Attendre validation utilisateur
- Ne pas continuer sans accord explicite

## Checklist finale

- [ ] Fichier complet (pas de `...reste du code`)
- [ ] Tous imports présents
- [ ] Typage complet (aucun `any`)
- [ ] Séparateurs en place
- [ ] Patterns projet respectés
- [ ] Testé si possible

## Interdictions

- ❌ Livrer fichier partiel
- ❌ Continuer sans validation
- ❌ Récapituler longuement
- ❌ Inventer fonctionnalités
- ❌ Modifier conventions établies
