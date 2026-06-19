---
layout: post
title: Particle project
tags: [Particle physics, Data analysis, simulation]
last_modified: "2025-05-30"
excerpt_separator: <!--more-->
feature-img: "assets/img/portfolio/collision.png"
thumbnail: "assets/img/portfolio/collision.png"
lang: en
locale: en
lang_ref: particle
canonical_url: https://sigfrido11.github.io/personal_website/2024/02/12/particle-en.html
---
# Particle Physics Simulation and K\* Reconstruction

## Overview

This project can be explored at the following link.
<div class="thesis-download">
  <a class="btn secondary" href="https://github.com/Sigfrido11/Particle_sim" target="_blank" rel="noopener">
    View the project site
  </a>
</div>

This project implements a **Monte Carlo simulation of particle physics events** using ROOT for statistical analysis and visualization.

The main goal is:

>  **Reconstruct the K\*** resonance (mass ~0.892 GeV) from the invariant-mass spectrum of $\pi$-K pairs.

The code simulates events with light particles ($\pi$, K, p) and an unstable resonance (K\*) whitch decays into two particles. Then it analyzes the invariant-mass spectra to identify the resonance peak above the combinatorial background.

---

#  Project Structure

The project is split into three main components:

## 1 `particle.cpp`

Implements the `Particle` class, which represents a physical particle with:

- name
- momentum (px, py, pz)
- mass
- charge
- optional decay width (for resonances)

### Main features

- Relativistic energy calculation:
$$ E = \sqrt{p^2 + m^2}$$


- Invariant mass calculation between two particles:

$$m_{inv} = \sqrt{(E1 + E2)^2 - |p1 + p2|^2}$$


- Two-body decay (`Decay2Body`)
- Includes resonance width effects (Breit-Wigner simulated via Gaussian distribution)
- Isotropic generation of decay products
- Relativistic boost to the laboratory frame

This class is the physics core of the project.

---

## 2 `main.cpp`

It is the **simulation engine**.

### What it does

Defines particle types:
- $\pi^+$, $\pi^-$
- $K^+$, $K^-$
- $p^+$, $p^-$
- K\* resonance (mass 0.89166 GeV, width 0.050 GeV)

Simulates 100,000 events with 100 particles each.

---

## Particle Generation

Particles are generated with the following probabilities:

| Particle | Probability |
|------------|------------|
| $\pi^+$ | 40% |
| $\pi^-$ | 40% |
| $K^+$ | 5% |
| $K^-$ | 5% |
| $p^+$ | 4.5% |
| $p^-$ | 4.5% |
| K\* | 1% |

The magnitude of the momentum follows an isotropic exponential distribution:

$$p \sim e^{-p}$$


---

## K\* Production and Decay

When a resonance is generated:

1. A particle `"resonance"` is created
2. It decays into:
   - $\pi^+ K^-$  (50%)
   - $\pi^- K^+$  (50%)

3. The following are recorded:
   - invariant mass of decay products
   - contribution to the combinatorial background

This is essential to verify that the resonance peak can be reconstructed even in the presence of background.

---
#  Analysis (`analyse.cpp`)

The analysis phase reads the generated ROOT file and checks the physical and statistical consistency of the simulation.
---

## Consistency Checks

- Total number of particles generated  
- Species distributions ($\pi$, K, p, K\*)  
- Comparison with theoretical probabilities (compatibility within $3\sigma$)

The goal is to verify that the Monte Carlo generation correctly reproduces the fractions set in the generator.

---

## Distribution Studies

Several kinematic observables are analyzed:

- Uniform angle distributions ($\phi$, $\theta$)
- Exponential fit of the momentum magnitude:

$$ f(p) \propto e^{-p} $$

- Invariant mass spectra built for:
  - all pairs
  - same-charge pairs
  - opposite-charge pairs
  - $\pi$-K pairs only

---

## Combinatorial Background Subtraction

To isolate the K\* signal, the difference between opposite-charge and same-charge pairs is used:

$$
\text{Signal}(m) =
\left( \frac{dN}{dm} \right)_{\text{opposite charge}}
-
\left( \frac{dN}{dm} \right)_{\text{same charge}}
$$

This method reduces the uncorrelated background, allowing the contribution of real resonances to emerge.

Two spectra are obtained:

- Full spectrum (all combinations)
- Spectrum selecting only $\pi$-K pairs

After removing the background, the graph of the invariant mass, visible below, show clearly a pcik in correspondence of the resonance mass k\*.

<div class="project-media">
  <img src="{{ '/assets/img/graph/k*_picture.png' | relative_url }}" alt="Invariant mass plot for K* resonance">
 </div>
---

## Resonance Fit

The peak is fitted with a Gaussian function:

$$
f(m) = A \exp\left(
-\frac{(m - \mu)^2}{2\sigma^2}
\right)
$$

The fit extracts:

- K\* mass ($\mu$)
- Observed width ($\sigma$)
- $\chi^2/\text{NDF}$
- Fit probability

The expected result is a mass compatible with:

$$
m_{K^*} \approx 0.892 \ \text{GeV}
$$

---

# Why This Project Is Interesting

This code reproduces, in simplified form, real analysis techniques used in high-energy physics:

- Resonance reconstruction via invariant mass  
- Combinatorial background estimation and subtraction  
- Statistical fits with ROOT  
- Validation through $\chi^2$ and fit probability  

To do this, it goes through all phases of a simulation. It starts with the physical part of the project where particles are generated according to a given distribution and the decay of possible K\* is studied. Thanks to the data analysis phase different histograms of possible combinations are built and the background is then removed. This process highlights a peak in the invariant-mass plot, revealing the presence of the resonance. This small-scale model allow to understand in a simplified way a possible process used to discover new particles.

## 👥 Collaborators

This project was possible thanks to the contributions of:
- **Sigfrido11**  🔗 [GitHub](https://github.com/Sigfrido11)
- **Fioralli**  🔗 [GitHub](https://github.com/Fioralli)
- **SierraTangoEcho**  🔗 [GitHub](https://github.com/SierraTangoEcho)
