# LF Foodtruck — site vitrine / e-commerce (base)

## Structure
```
lf-foodtruck/
├── index.html        ← page unique, toutes les sections
├── css/style.css      ← tokens de design + tous les styles
├── js/main.js          ← données du menu + logique panier + paiement
└── images/             ← photos fournies, déjà intégrées
```

## ⚠️ Important : vérifier que cette version remplace bien la précédente
Si vous mettez à jour un dossier déjà existant, assurez-vous que **tous** les fichiers
(index.html, css/style.css, js/main.js) ont bien été remplacés — pas seulement certains.
Une mise à jour partielle peut désynchroniser le HTML et le JavaScript, et faire
disparaître des éléments comme le bouton de paiement par carte.

Pour vérifier rapidement dans Cursor : ouvrez `index.html`, faites Ctrl+F et recherchez
`ouvrir-formulaire-carte`. Vous devez trouver exactement 1 résultat (ligne ~410). Si vous
n'en trouvez aucun, votre fichier `index.html` est une version ancienne — remplacez-le
entièrement par celui de cette archive.

## Bug corrigé dans cette version : le bouton "Carte bancaire" disparaissait définitivement
**Cause précise** : deux systèmes différents masquaient les mêmes éléments (un style CSS
inline `display:none` posé après un paiement, et une classe `.masque` gérée par la logique
normale du panier). Le style inline avait une priorité plus forte et n'était jamais retiré
correctement — le bouton restait caché pour de bon.

**Correction** : tout le système de masquage repose maintenant sur une seule classe CSS
(`.masque`), sans aucun style inline. Une seule source de vérité, plus de conflit possible.

## Paiement — deux moyens distincts
1. **Bouton PayPal natif** : connexion à un compte PayPal sandbox, fonctionnel en mode test (Client ID `sb`).
2. **Formulaire "Carte bancaire" custom** : géré par notre propre code (pas par PayPal). Affiche le parcours complet (numéro de carte, expiration, CVV, prénom), simule un court traitement, puis affiche la confirmation. **Aucun vrai débit n'est effectué.**

## ⚠️ Rendre le paiement par carte réellement fonctionnel
1. Allez sur **developer.paypal.com**, connectez-vous avec un compte PayPal.
2. Dans **Apps & Credentials**, créez une application (Sandbox pour tester, puis Live).
3. Copiez le **Client ID** généré.
4. Dans `index.html`, remplacez `client-id=sb` par ce Client ID, et ajoutez `card-fields` :
   ```html
   <script src="https://www.paypal.com/sdk/js?client-id=VOTRE_CLIENT_ID&currency=EUR&components=buttons,card-fields"></script>
   ```
5. Remplacez le formulaire custom par l'intégration `paypal.CardFields` (voir doc PayPal "Advanced Card Payments").
6. Supprimez la mention "Mode démonstration".
7. Vérifiez dans les paramètres PayPal Business que le paiement par carte sans compte est activé.

## Ce qui est déjà fait
- Carte complète, panier fonctionnel, modes de commande, statut ouvert/fermé en direct, carte Google Maps, design complet, responsive.

## Pour aller plus loin dans Cursor
1. Notification de commande au foodtruck (email/SMS/backend).
2. Persistance du panier via `localStorage`.
3. Photos manquantes sur certains plats.
4. SEO (Open Graph, JSON-LD, favicon, sitemap).
5. Hébergement statique (Netlify, Vercel...).

## Comment ouvrir ce projet dans Cursor
1. **Supprimez d'abord l'ancien dossier `lf-foodtruck`** s'il existe déjà sur votre PC (pour éviter tout mélange entre ancienne et nouvelle version).
2. Dézippez ce nouveau `lf-foodtruck.zip` dans l'explorateur Windows (clic droit → "Extraire tout").
3. Dans Cursor : File → Open Folder, sélectionnez le dossier `lf-foodtruck` extrait.
4. Vérifiez avec Ctrl+F dans `index.html` que `ouvrir-formulaire-carte` est bien présent.

## Notes de design
- Couleurs : `--noir #0E0D0C`, `--or #D4A437`, `--or-clair #E8C468`, `--braise #B5472E`, `--creme #F4ECDD`.
