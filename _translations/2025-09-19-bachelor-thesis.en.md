---
lang: en
lang_ref: bachelor-thesis
---
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
