<span class="requirements">Prérequis: manipulation des outils développeur sur navigateur</span>

Outillage d'audit
====================

## Lighthouse

<figure>
	<img src="../img/pwa-lighthouse.png" alt="Logo de Lighthouse">
</figure>

Lighthouse est l'outil d'audit de référence des Progressive Web Applications. Cet outil open-source développé par Google peut être exécuté en tant que :
- [extension au navigateur Chrome](https://chrome.google.com/webstore/detail/blipmdconlkpinefehnmjammfjpmpbjk)
- outil en ligne de commande
- [module Node.js](https://www.npmjs.com/package/lighthouse)

**Depuis Chrome 60, Lighthouse est directement intégré à l'onglet Audits des Developer Tools.** Vous n'avez plus rien à installer.

Cet outil analyse un domaine particulier en effectuant une série de tests pour générer un rapport avec **un score sur 100**.

<figure>
	<img src="../img/lighthouse-report.png" alt="Exemple de rapport de Lighthouse">
	<figcaption>Exemple de rapport de Lighthouse</figcaption>
</figure>

L'objectif est bien entendu d'arriver à ce fameux score de 100 sur 100. Chaque point négatif ou imparfait dans le rapport est accompagné d'un message explicatif et de liens pour en savoir plus. **Lighthouse est donc un excellent moyen pour concevoir pas à pas une PWA en partant d'une application générique.**

---

 [La check-list de développement d'une PWA](checklist.md)
