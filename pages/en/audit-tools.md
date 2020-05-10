<span class="requirements">Prerequisites: manipulation of internet browsers' developer tools</span>

# Audit tools

## Lighthouse

<figure>
	<img src="../img/pwa-lighthouse.png" alt="Lighthouse Logo">
</figure>

Lighthouse is the reference Audit tool for Progressive Web Apps. It is developed by Google and is Open Source. It can be used in many ways:

- As a [Chrome extension (built-in since Chrome 60)](https://chrome.google.com/webstore/detail/blipmdconlkpinefehnmjammfjpmpbjk)
- As a [Command line tool](https://github.com/GoogleChrome/lighthouse)
- As a [Node.js module](https://www.npmjs.com/package/lighthouse)

**Since Chrome 60, Lighthouse is built-in and is accessible in the "Audits" tab in the Developer Tools panel.** no need to install anything else to get started.

This tool analyses a particular domain by performing series of tests and generates a report that lists issues and gives **a mark out of 100** to the audited website or PWA.

<figure>
	<img src="../img/lighthouse-report.png" alt="Example Lighthouse report">
	<figcaption>Example Lighthouse report</figcaption>
</figure>

The goal is to reach a score of 100 out of 100. Each issue or imperfect item in the report is accompanied with a descriptive message and links to more details. **Lighthouse is thus an excellent tool for building a PWA step-by-step starting with a generic application.**

---

 [PWA checklist](checklist.md)
