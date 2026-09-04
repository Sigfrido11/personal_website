---
layout: post
title: Tesi triennale
feature-img: "assets/img/portfolio/c-deuteron.png"
thumbnail: "assets/img/portfolio/c-deuteron.png"
tags: [Tesi, Fisica nucleare, Charm]
last_modified: "2025-05-30"
excerpt_separator: <!--more-->
lang: it
locale: it
lang_ref: bachelor-thesis
canonical_url: https://sigfrido11.github.io/personal_website/2025/09/19/bachelor-thesis.html
---
## Tesi triennale 

La tesi di laurea triennale è un’indagine sulla possibile esistenza e rilevazione di un ipotetico supernucleo ancora non osservato sperimentalmente, chiamato *c‑deuterone*. Il c‑deuterone è un supernucleo esotico ipotizzato come uno stato
legato tra un barione $\Lambda_{c}^{+}$ e un neutrone. Studi teorici suggeriscono che tale sistema possa fornire approfondimenti unici sulle interazioni tra barioni charmati e nucleoni, offrendo una nuova finestra sulle dinamiche delle interazioni forti in presenza del quark charm. Sebbene la conferma sperimentale sia ancora assente, la sua ricerca in strutture dove avvengono collisioni ad alta energia mira a identificare la possibile esistenza di questo supernucleo esotico. 

Puoi leggere la tesi completa dai link qui sotto.

<div class="thesis-download">
  <a class="btn" href="{{ '/assets/pdf/tesi_triennale.pdf' | relative_url }}" download>
    Scarica la tesi (PDF)
  </a>
  <a class="btn secondary" href="https://amslaurea.unibo.it/id/eprint/37352/" target="_blank" rel="noopener">
    Visita il sito
  </a>
</div>

## Cosa è stato fatto?

Grazie al programma di analisi [Thermal Fist](https://arxiv.org/abs/1901.05249), si sono generati diversi eventi analizzando come la variazione di parametri della simulazione influenzi la produzione del supernucleo: temperatura di freeze-out, raggio di freeze-out e fugacità di charm. I grafici seguenti riassumono gli andamenti individuati e i parametri di best fit.

<div class="bachelor-media">
  <img src="{{ 'assets/img/feature-img/2dgraph.png' | relative_url }}">
  <img src="{{ 'assets/img/feature-img/var_radius.png' | relative_url }}">
  <img src="{{ 'assets/img/feature-img/var_temperaure.png' | relative_url }}">
  <img src="{{ 'assets/img/feature-img/var_fugacity.png' | relative_url }}">

 </div>

Per maggiori dettagli rimando al testo.

Successivamente si è proceduto con la fase relativa alla rilevazione dei deutoni secondari derivanti dal decadimento del c-deuterone. Usando i dati precedentemente raccolti si è ottenuta la distribuzione dell’impulso trasverso del c-deuterone e si sono generati, con Pythia 8, tali supernuclei in modo che l’impulso trasverso risultasse coerente con quanto trovato.

Con un approccio di tipo Hit or Miss, impiegando le specifiche del rivelatore di ALICE, è stata stimata la frazione di deutoni secondari da decadimento del c-deuterone la cui traccia risulta ricostruibile.

L’incremento del numero di deutoni è risultato, sotto opportune ipotesi, pari a:
$$ N_{deut} = (1938 \pm 12) \text{deutoni} $$

Per approfondire, rimando nuovamente al testo.


## Esplora il codice

Per toccare con mano il codice è possibile visitare il seguente [link](https://github.com/Sigfrido11/tesi_triennale). Nel file `tesi.C` trovi la parte di codice relativa all’analisi dei dati prodotti e alla generazione dei grafici, mentre nella cartella `rilevazioni/`, oltre ai file di Pythia, si trova il codice con l’implementazione Monte Carlo.
