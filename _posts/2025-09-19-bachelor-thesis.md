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
locale: it
lang_ref: bachelor-thesis
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

Grazie al programma di analisi [Thermal Fist](https://amslaurea.unibo.it/id/eprint/37352/), si sono generati diversi eventi analizzando come la variazione di parametri della simulazione influenzi la produzione del supernucleo: temperatura di freeze-out, raggio di freeze-out e fugacità di charm. I grafici seguenti riassumono gli andamenti individuati e i parametri di best fit.

Per maggiori dettagli rimando al testo.

Successivamente si è proceduto con la fase relativa alla rilevazione dei deutoni secondari derivanti dal decadimento del c-deuteron. Usando i dati precedentemente raccolti si è ottenuta la distribuzione dell’impulso trasverso del c-deuteron e si sono generati, con Pythia 8, tali supernuclei in modo che l’impulso trasverso risultasse coerente con quanto trovato.

Con un approccio di tipo Hit or Miss, impiegando le specifiche del rivelatore di ALICE, è stata stimata la frazione di deutoni secondari da decadimento del c-deuteron la cui traccia risulta ricostruibile.

L’incremento del numero di deutoni è risultato, sotto opportune ipotesi, pari a:
$$ N_{deut} = (1938 \pm 12) \text{deutoni} $$

Per approfondire, rimando nuovamente al testo.


## Esplora il codice

Per toccare con mano il codice è possibile visitare il seguente link: [repository su GitHub](https://github.com/Sigfrido11/tesi_triennale). Nel file `tesi.C` trovi la parte di codice relativa all’analisi dei dati prodotti e alla generazione dei grafici, mentre nella cartella `rilevazioni/`, oltre ai file di Pythia, si trova il codice con l’implementazione Monte Carlo.
