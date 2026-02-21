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

Grazie al programma di analisi <div class= "thermal-fist">
 <a class="btn secondary" href="https://amslaurea.unibo.it/id/eprint/37352/" target="_blank" rel="noopener">
    Thermal Fist
     </a>
</div>
Si sono generati diversi eventi andando ad analizzare come la variazione di diversi parametri della simulazione influenzassero la produzione di tale super-nulceo: fra i parametri analizzati vi è la variazione della temperatura di Freeze-out, il raggio di freez-out e la fugacità di charm.
I seguenti grafici riassumono gli andamenti individuati e i parametri di best fit.

Per maggiori informazioni si rimanda al testo.

Successivamente si è proceuto con la fase relativa alla rilevazione dei deutoni secondari derivante sal decadimento del c-deuteron. Per farlo usando i dati precedentemente raccolti si è ottenuta la distribuzione dell'imuplso trasverso del c-deuteon e si sono generati, mediante Pythia 8, tali supernuclei in modo che l'impulso trasverso fosse coerente con quanto precedentemente trovato. 

Quindi mediante un approccio di tipo Hit or Miss usando le spefiiche del rilevatore di ALICE si è ottenuta la frazione di deutoni secondari derivanti sal decadimento del c-deuteron la cui traccia riusciva ad essere ricostruita correttamente. 

L'incremento del numero di deutoni è risultato essere, sotto opportune ipotesi, pari a: 
$$ N_deut = (1938 \pm 12) deutoni $$

Per maggiori informazioni si rimanda nuovamente al testo.


## Esplora il codice

Per toccare con mano il codice è possibile visitare il <div class= "thermal-fist">
 <a class="btn secondary" href="https://amslaurea.unibo.it/id/eprint/37352/" target="_blank" rel="noopener">
    segunente link
     </a>
</div>
nel quale nel file tesi.C vi è la parte del codice relativa all'analisi dei dati prodotti e alla generazione dei grafici mentre nella cartella rilevazioni, oltre a file di Pythia si trova il codice con l'implementazione montecarlo. 
