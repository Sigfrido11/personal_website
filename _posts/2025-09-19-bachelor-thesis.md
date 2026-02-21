---
layout: post
title: Tesi triennale
feature-img: "assets/img/feature-img/c-deuteron.png"
thumbnail: "assets/img/thumbnails/feature-img/c-deuteron.png"
tags: [A Tag, Katex]
last_modified: "2025-05-30"
excerpt_separator: <!--more-->
categories: Example
lang: it
translation_en: |
  ## Bachelor's Thesis

  My bachelor’s thesis investigates the possible existence and detection of a hypothetical exotic supernucleus, the *c-deuteron*. This state is theorised as a bound system between a charmed baryon, $\Lambda^+_c$, and a neutron. Theoretical studies suggest it could offer unique insights into interactions between charmed baryons and nucleons, opening a new window on strong-interaction dynamics in the presence of the charm quark. Although no experimental confirmation exists yet, searches in high-energy collision facilities aim to identify this exotic supernucleus.

  You can read the full thesis using the links below.

  <div class="thesis-download">
    <a class="btn" href="{{ '/assets/pdf/tesi_triennale.pdf' | relative_url }}" download>
      Download the thesis (PDF)
    </a>
    <a class="btn secondary" href="https://amslaurea.unibo.it/id/eprint/37352/" target="_blank" rel="noopener">
      Visit the repository page
    </a>
  </div>

  ## What was done?

  Using the **Thermal Fist** simulation framework, multiple event samples were generated to study how varying key parameters affects the production of the c‑deuteron: freeze‑out temperature, freeze‑out radius, and charm fugacity. The plots below summarise the observed trends and best‑fit parameters.

  For full details, see the thesis.

  The next step focused on detecting secondary deuterons from c‑deuteron decay. The transverse‑momentum distribution of the c‑deuteron was derived from the previous analysis, then events were generated with **Pythia 8** so that the $p_T$ spectrum matched the expected one.

  Using a Hit‑or‑Miss approach with ALICE detector specifications, we estimated the fraction of secondary deuterons whose tracks could be correctly reconstructed.

  The increase in reconstructed deuterons, under reasonable assumptions, is:
  $$ N_{\text{deut}} = (1938 \pm 12)\ \text{deuterons} $$

  Again, all methodological details are in the thesis text.

  ## Explore the code

  The analysis code is available on GitHub:
  <div class="thermal-fist">
    <a class="btn secondary" href="https://github.com/Sigfrido11/tesi_triennale" target="_blank" rel="noopener">
      Open the repository
    </a>
  </div>

  In `tesi.C` you will find the data analysis and plotting routines; the `rilevazioni/` folder (plus the accompanying Pythia files) contains the Monte Carlo implementation used for the reconstruction study.
---
## Tesi triennale 

La tesi di laurea triennale è un’indagine sulla possibile esistenza e rilevazione di un ipotetico supernucleo ancora non osservato sperimentalmente, chiamato *c‑deuterone*. Il c‑deuterone è un supernucleo esotico ipotizzato come uno stato
legato tra un barione $\Lambda^+_c$ e un neutrone. Studi teorici suggeriscono che tale sistema possa fornire approfondimenti unici sulle interazioni tra barioni charmati e nucleoni, offrendo una nuova finestra sulle dinamiche delle interazioni forti in presenza del quark charm. Sebbene la conferma sperimentale sia ancora assente, la sua ricerca in strutture dove avvengono collisioni ad alta energia mira a identificare la possibile esistenza di questo supernucleo esotico. 

Puoi leggere la tesi completa dai link qui sotto.

<div class="thesis-download">
  <a class="btn" href="{{ '/assets/pdf/tesi_triennale.pdf' | relative_url }}" download>
    Scarica la tesi (PDF)
  </a>
  <a class="btn secondary" href="https://amslaurea.unibo.it/id/eprint/37352/" target="_blank" rel="noopener">
    Visita il sito
  </a>
</div>

<style>
  .thesis-download {
    margin-top: 1.25rem;
    text-align: center;
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .thesis-download .btn {
    display: inline-block;
    padding: 0.75em 1.6em;
    border-radius: 999px;
    background: linear-gradient(120deg, #0b6fa4, #00a67c);
    color: #fff;
    box-shadow: 0 10px 25px -12px rgba(0, 166, 124, 0.55);
    transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }
  .thesis-download .btn.secondary {
    background: linear-gradient(120deg, #3a4f63, #5a7490);
  }
  .thesis-download .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px -14px rgba(0, 166, 124, 0.65), 0 0 12px rgba(11, 111, 164, 0.65);
    filter: brightness(1.06);
  }
  .thesis-download .btn:active {
    transform: translateY(1px) scale(0.99);
    box-shadow: 0 8px 18px -12px rgba(0, 166, 124, 0.7), 0 0 16px rgba(11, 111, 164, 0.75);
  }
</style>

## Cosa è stato fatto?

Grazie al programma di analisi
<div class="thermal-fist">
  <a class="btn secondary" href="https://amslaurea.unibo.it/id/eprint/37352/" target="_blank" rel="noopener">
    Thermal Fist
  </a>
</div>
si sono generati diversi eventi analizzando come la variazione di parametri della simulazione influenzi la produzione del supernucleo: temperatura di freeze‑out, raggio di freeze‑out e fugacità di charm. I grafici seguenti riassumono gli andamenti individuati e i parametri di best fit.

Per maggiori dettagli rimando al testo.

Successivamente si è proceduto con la fase relativa alla rilevazione dei deutoni secondari derivanti dal decadimento del c‑deuteron. Usando i dati precedentemente raccolti si è ottenuta la distribuzione dell’impulso trasverso del c‑deuteron e si sono generati, con Pythia 8, tali supernuclei in modo che l’impulso trasverso risultasse coerente con quanto trovato.

Con un approccio di tipo Hit or Miss, impiegando le specifiche del rivelatore di ALICE, è stata stimata la frazione di deutoni secondari da decadimento del c‑deuteron la cui traccia risulta ricostruibile.

L’incremento del numero di deutoni è risultato, sotto opportune ipotesi, pari a:
$$ N_{deut} = (1938 \pm 12) \text{deutoni} $$

Per approfondire, rimando nuovamente al testo.


## Esplora il codice

Per toccare con mano il codice è possibile visitare il <div class= "thermal-fist">
 <a class="btn secondary" href="https://github.com/Sigfrido11/tesi_triennale" target="_blank" rel="noopener">
    seguente link
     </a>
</div>
nel quale, nel file `tesi.C`, trovi la parte di codice relativa all’analisi dei dati prodotti e alla generazione dei grafici, mentre nella cartella `rilevazioni/`, oltre ai file di Pythia, si trova il codice con l’implementazione Monte Carlo. 
