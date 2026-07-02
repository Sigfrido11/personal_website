---
layout: post
title: $B^0 \to k^* \mu^+ \mu^- $ Presentation
feature-img: "assets/img/feature-img/B_video.png"
thumbnail: "assets/img/thumbnails/feature-img/B_video.png"
tags: [Particle physics, B meson, LHCb]
lang: en
locale: en
lang: en
locale: en
lang_ref: B_presentation
youtube_url: "https://www.youtube.com/watch?v=-tgSiqshwXQ"
---
# $B^0 \to k^* \mu^+ \mu^- $ Presentation
This page contains the recorded version of a presentation on the decay $B^0 \to K^* \mu^+ \mu^-$, held at TU Dortmund within the "Particles meets Astroparticles" project.

<div class="thesis-download">
  <a class="btn" href="{{ '/assets/pdf/Giuseppe_Luciano_Angular_B0_decay.pdf' | relative_url }}" download>
    Donwload the presentation (PDF)
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

{% include default/youtube_embed.liquid youtube_url=page.youtube_url %}
---
# The following section contains a transcription of the talk in English:

The transcription was generated using automatic speech recognition software, and some errors may still be present.

Welcome everyone, I am Giuseppe Luciano and today I will be discussing one of the most interesting experimental results in particle physics of the last decade. I'm talking about the angular analysis of the B meson decay into two muons and a K*, which is an excited state of a kaon and immediately decays into a kaon and a pion.

But before diving into this analysis, it is better to take a step back and ask ourselves: where do we look for new physics?

Indeed, we know that the Standard Model is an extremely successful theory, able to describe nature with unprecedented precision across many orders of magnitude. However, we also know that it cannot be the complete picture. For example, it cannot explain the origin of dark matter, nor the observed asymmetry between matter and antimatter in the Universe.Therefore, new particles and new interactions must be added to complement this model. So again, where do we look for new physics?

In particle physics, we have two main approaches. The first is direct searches, in which we try to increase the collision energy and then, by studying the decay products, discover heavier particles. The second approach is indirect searches, in which we try to measure with extremely high precision observables related to processes involving the exchange of virtual particles. Indeed, virtual particles can open a window onto energy scales that are not directly accessible at our colliders. 

To understand how successful this approach can be, it is worth recalling that it played an essential role in the discovery of the top quark.What I want to underline is that the mass of the top quark is very large compared to the masses of the bottom and strange quarks. Indeed, it is around 170 GeV.

This analysis belongs to the second category. As you can see, the anti-bottom quark is transformed into an anti-strange quark.Therefore, we are looking at a flavour-changing neutral current process. These processes are forbidden at tree level in the Standard Model. Consequently, penguin and box diagrams are required, and virtual particles must be exchanged. If we observe discrepancies between Standard Model predictions and experimental measurements, we may obtain hints of new physics. This makes this decay one of the best places to search for new interactions.

Let us now look at the kinematics of this decay. It can be shown that only four kinematic variables are needed to describe it. The first is q², the squared invariant mass of the two muons. The other three are angular variables, which are particularly useful because they are usually associated with smaller theoretical uncertainties. We can now look at the figure to understand the definition of these angles. Please pay attention, because three different reference frames are shown simultaneously.

The first angle is the angle between the positively charged muon and the opposite direction of the B meson in the dilepton rest frame.

The second angle is defined similarly: it is the angle between the kaon and the opposite direction of the B meson in the K* rest frame.
The last angle is more difficult to explain because it is defined as the angle between two decay planes.

The first plane is formed by the two muons, while the second one is formed by the kaon and the pion. This angle is measured in the rest frame of the $B$ meson.

We can now briefly look at the mathematical description of this decay. As you can see, the differential decay rate can be written as the product of two main contributions. We have the angular observables $I_i$, which depend on $q^2$, the invariant mass squared of the two muons, and therefore act as a proxy for the energy scale at which the transition occurs. We also have the angular functions $f_i$, which depend on the previously introduced angles and can be expressed as combinations of spherical harmonics.

For our purposes, it is also convenient to introduce the observables $S_i$, often called the CP-averaged observables. Some of them have a clear physical interpretation. For example, $S_2$ is related to the fraction of longitudinally polarized $K^{*}$ mesons, while $S_6$ is related to the forward--backward asymmetry of the leptons.

The full expression of the differential decay rate can then be written as follows. Please do not be intimidated by its length. Although the equation appears complex, the underlying idea is quite simple. As you can see, each term can be written as the product of an angular function, depending on the decay angles, and a CP-averaged observable, represented here by the coefficients shown in orange.

Therefore, by performing a fit to the full data sample using this expression, it is possible to extract the values of the CP-averaged observables. Since these quantities can also be predicted within the Standard Model, we can directly compare experimental measurements with theoretical predictions.

Unfortunately, these observables exhibit a strong dependence on $q^2$ and on hadronic effects. As a consequence, their theoretical uncertainties can be rather large.

For this reason, it is convenient to introduce the optimized observables $P'_i$. As you can see, these quantities are constructed as ratios of CP-averaged observables. In this way, at leading order in the strong coupling constant and in the inverse bottom-quark mass expansion, they become largely independent of both $q^2$ and the hadronic form factors.

There is another important advantage of using these observables. In this analysis, events are divided into different bins according to their kinematic variables. Therefore, it is reasonable to assume that the optimized observables remain approximately constant within each $q^2$ bin.

Let us now take a brief look at the LHCb detector, since its design is closely connected to this analysis.

Unlike general-purpose detectors such as ATLAS, CMS, or ALICE, the LHCb detector is a single-arm forward spectrometer covering the pseudorapidity range $2 < \eta < 5$.

The reason for this design is that, at LHC energies, beauty and charm hadrons are predominantly produced in the forward and backward directions. This geometry therefore allows for a highly efficient and compact detector design. Nevertheless, the detector is far from small: it is more than 20 meters long and about 10 meters high.

We can now examine some of its main sub-detectors. The first detector encountered by particles after production is the VELO, the Vertex Locator.

The VELO is a silicon detector capable of measuring the positions of both the primary and secondary vertices with extremely high precision. This allows the determination of the impact parameter with a resolution of about $20\,\mu\mathrm{m}$, although the exact value depends on the particle transverse momentum.

An interesting fact is that the VELO operates only about $8\,\mathrm{mm}$ from the beampipe. Since placing detector components so close to the beam is potentially risky, a dedicated mechanism has been developed to retract and reinsert the detector. The VELO is moved into its operational position only once stable beam conditions have been declared.


Then the particles cross the first RICH detector that is suited for the analysis of the angle of emission of Cherenkov radiation.

Cherenkov radiation is a particular type of radiation spontaneously emitted by a medium when it is crossed by charged particles which travel faster than the speed of light in the medium, and as you can see from this animation there is a strong link that connects the velocity of the particle and the angle of emission of the radiation. Therefore, the measurement of the angle is a proxy for the measurement of the velocity.

Then the particles cross the tracking system that is composed of an inner tracking system and an outer tracking system made of straw drift tubes.

In this region there is also a very strong magnetic field with a bending power of around $4\,\mathrm{Tm}$ that can bend the trajectory of charged particles because, in this way, we can measure the radius of curvature of the trajectory, which is a quantity deeply connected to the value of the linear momentum.

Therefore, by combining the information on the linear momentum with the velocity provided by the RICH detector, we can compute the mass of the particles and then apply particle identification.

Then, after passing through the second RICH detector, the particles meet the two calorimeters.

The first one is the electromagnetic calorimeter, which can measure the energy deposited by electrons and photons, while the second one is the hadronic calorimeter, which is suited for the measurement of the energy deposited by different hadrons and is also used for the hardware trigger.

Then, in the outermost part, we can see that there is the muon system, which is composed of five muon stations made of alternating layers of iron and multi-wire proportional chambers.

This component is placed in the outermost part because, at LHC energies, muons are very weakly interacting particles that can therefore cross the entire detector without being stopped.

We can also have a look at the data selected for this analysis and indeed not all the events that happen in the LHCb detector are recorded in the LHCb dataset, but some selections performed using triggers are also applied.

The selected events usually have a significant transverse momentum or a significantly high impact parameter.

However, for this specific analysis I used only those events in which the impact parameter is quite high.

Indeed, the mean lifetime of the $B$ meson is estimated to be around $1.5\,\mathrm{ps}$ and therefore it can travel for a fraction of a centimetre in the laboratory reference frame before decaying, and so asking for a large impact parameter is one of the best ways to reduce the background contribution.

Then the quality of the vertex must be good and this means that all the tracks must point towards the same vertex and that the overall momentum of the $B$ meson must be aligned with the straight path that connects the primary vertex to the secondary vertex.

Of course, some additional selections on the invariant masses of the different particles are also required.

But we also have to consider different sources of background and we have two main contributions.

The first one is the combinatorial background that arises when all the tracks satisfy the aforementioned criteria but they do not originate from the same decay.

For example, as you can see from this picture, the first muon originates from the decay of the first $B$ meson and the second muon from another $B$ meson, and so their observables are not correlated at all and we cannot add them to our dataset.

To reduce this kind of background it is possible to use a boosted decision tree that, when properly trained, is able to retain up to $85\%$ of the signal while discarding $97\%$ of the background, and this is extremely important especially for this analysis because the estimated branching ratio of this decay is around $10^{-6}$.

Therefore, a considerable amount of events is needed before being able to perform this measurement.

The second source of background is the peaking background that arises when we have a similar decay producing a similar final state and at least one misidentification occurs.

For example, in the fourth decay, if the proton is misidentified as a pion, we would also add $\Lambda_b^0$ candidates to our dataset, polluting it.

The same applies to the $B_s^0$ decay if one of the two kaons is misidentified as a pion.

To reduce this kind of background it is possible to use particle identification techniques and also apply some vetoes in the invariant-mass regions where we expect the production of those particles.

As you can see from this plot, the red line represents the remaining contribution of the background, while the blue shaded area represents the number of candidates.

We can observe a clear peak much higher with respect to the level of the background in correspondence with the invariant mass of the $B$ meson, and so this means that the background suppression has been performed successfully.

But we also have to remove those regions in $q^2$ in which the charmonium resonances are produced.

Indeed, in those regions some assumptions made in the Standard Model calculations are thought to be no longer valid.

In this plot, as you can see, the black solid line represents the expected number of candidates produced including the charmonium resonances, while the dashed line represents the expected number of candidates without them.

And as you can see, the production of those two particles, the $J/\psi$ and the $\psi(2S)$, is much more abundant because these processes are also allowed through tree-level diagrams.

Therefore, the estimated branching ratios are around $10^{-3}$ and $10^{-4}$.

But we also have to consider the S-wave contribution.

Indeed, the decay I have described until now involves the presence of the $K^{*}(892)$.

It is an excited state of the kaon with spin equal to one.

Therefore, when it decays, it emits a pion and a kaon with relative angular momentum equal to one.

This is called the P-wave contribution.

However, this process is also possible through the $K^{*}_0(800)$ and the $K^{*}_0(1430)$, which are spin-zero particles and therefore produce an S-wave contribution when they decay.

And this is a problem because the two processes can interfere, and we must complement the previous expression of the differential decay width by adding this additional term.

And this makes the analysis more complex.

So, to constrain the expected value of the S-wave contribution, we can plot the invariant mass of the kaon and the pion for different bins in $q^2$.

And as you can see, we observe a clear peak around $892\,\mathrm{MeV}$.

That is the mass of the $K^{*}(892)$.

But we also expect a smaller contribution from the S-wave component in the two tails of the distribution.

And the expected contribution of the S-wave is around $5\%$.

But we also have to model the acceptance. Indeed, as I told you before, not all the events produced at the LHCb detector are actually recorded because some triggers are applied.

Some additional selections over the entire dataset are also used. So we are artificially modifying the number of candidates in a non-uniform way. And since the number of candidates is what we need to perform the fit, we must correct this effect by modelling the acceptance.

As you can see, we have two main contributions: those $c$ coefficients that can be estimated using Monte Carlo simulation. And since the acceptance depends on all four kinematic variables, these coefficients should not depend on the software used for the simulation.

Then we have those $L$ functions, which are the so-called Legendre polynomials of different order.

As you can see from this plot, the black solid line represents the relative efficiency for low $q^2$, while the red solid line corresponds to high $q^2$, probably in the region between 18 and 19 $\mathrm{GeV}^2$.

And as you can see, the shape is completely different.

We can finally discuss the results. I am now showing you the result in the region of $q^2$ between 1.1 and 6 $\mathrm{GeV}^2$.

However, similar evaluations are also performed in the other bins.

As before, the red line represents the remaining background and the blue area the estimated contribution from this decay. The black solid line instead is the sum of these two terms, which corresponds to the Standard Model prediction.

And as you can see, there is good agreement between the Standard Model prediction and the experimental result.

This agreement is also observed in all the other $q^2$ regions in which the analysis is performed, and is also reflected in the values of the different observables like the CP-averaged functions $S_i$ and the optimized observables $P'_i$. For all of them, except for two.

Indeed, we are observing a tension for the $S_5$ and the associated $P'_5$ coefficient in two different bins: in the region of $q^2$ between 4 and 6, and from 6 to 8. And this tension is up to 2.8 and 3 sigma respectively. Please also pay attention to the fact that these two bins are very close to the $J/\psi$ resonance.

And this becomes particularly important for our last discussion.

But before trying to explain this tension, we can have a look at the different sources of systematic uncertainties. Unfortunately, I do not have time to describe all of them in detail, but as you can see the main contribution arises from the order used in the polynomials to model the acceptance.

The acceptance in general provides the biggest contribution because we have three different entries from this source. But also the way in which we fit the model of the invariant mass of the kaon and the pion contributes, because two different fits are applied: both for the parameterisation of the S-wave contribution and the Gaussian fit for the P-wave contribution.

However, I do not want you to memorise all those numbers. The take-home message is that this analysis is strongly dominated by statistical uncertainties and not by systematic ones. The systematic uncertainties are below 30% of the statistical ones, which in turn are only a fraction of the size of the $P'_5$ observable.

We can also try to explain this tension by introducing a more general theoretical framework, namely the effective Standard Model description.

The key idea is to separate high-energy physics from low-energy physics thanks to a sum where we have the $C_i$ coefficients, the so-called Wilson coefficients, which depend on the energy scale, and the $O_i$ operators, which represent different operators related to processes in the Standard Model. For example, $O_9$ is associated with the vector current, while $O_{10}$ is associated with the axial-vector current.

Hopefully, in the future we will be able to extend this sum to include contributions that are not yet part of the Standard Model of particle physics.

Therefore, this effective Hamiltonian is a common way to describe possible theories beyond the Standard Model and to compare them. What we find is that we can describe the data by introducing a shift only in a single parameter of the Standard Model, namely the real part of the $C_9$ coefficient.

Of course, this is not the only possible explanation, but it is certainly the simplest and one of the most effective.

As you can see, this shift is negative. As I told you before, the $C_9$ coefficient is associated with the $O_9$ operator, which corresponds to the vector current. Therefore, we expect the vector coupling to be suppressed with respect to the Standard Model prediction.

This shift corresponds to a tension with the Standard Model value (i.e. a shift from zero in the real part) of up to 3.4 sigma.

We can also plot the $P^2$ distribution with respect to the real part of this coefficient. However, to obtain this result it is mandatory to make some assumptions, for example on the shape of the form factors, the number of resonance parameters, the uncertainties on the CKM matrix elements, and also including some subleading effects.

However, as you can see from this plot, the Standard Model prediction is around 4.3 while the minimum of the $P^2$ is observed around 3.3.

This is extremely important because loop contributions can also modify the $C_9$ coefficient, and so two main schools of thought have emerged.

Some, like Chukin and others, suggest that we are observing this tension because these bins are too close to the $J/\psi$ resonance, and therefore the Standard Model is not well constrained in this region and this can mimic new physics.

However, other scientists, like Descotes-Genon and others, suggest that this is not entirely true because in our dataset we also have other resonances that do not produce this discrepancy, and we observe this tension only in the $P'_5$ and $S_5$ observables. Since for all the other observables the agreement is good, they argue that charm-loop contributions cannot explain the full shift, and therefore we should look for new physics.

So we can consider two possible explanations beyond the Standard Model. The first and most discussed is the introduction of a $Z'$ boson, a new heavy gauge boson that allows flavour-changing neutral currents at tree level and therefore can modify the $C_9$ Wilson coefficient. However, direct searches have excluded such a boson for masses below a few TeV.

Another possible explanation is the introduction of leptoquarks.

Leptoquarks are hypothetical particles that can couple both to quarks and leptons, and also allow flavour-changing neutral currents at tree level, and could explain this tension.

To conclude this talk, we can summarise: we have analysed the decay of the $B$ meson into two muons and a $K^{*}$, and we observe a clear and reproducible tension with respect to the Standard Model prediction, especially in the $P'_5$ observable. This tension can be described by introducing a shift in the real part of the $C_9$ coefficient.

Maybe this tension is related to our understanding of low-energy QCD, which is still incomplete, or maybe it is a hint of new physics that could lead to the introduction of a $Z'$ boson or leptoquarks, or something even more unexpected, or maybe it is just a statistical fluctuation.

In any case, this remains one of the most interesting and actively investigated topics in flavour physics today.

Thank you very much for your attention.


## Papers
R. Aaij et al. 1v35081.2152:viXra
R. Aaij et al. 2v24440.2151:viXra
R. Aaij et al. 2v13840.3002:viXra

## 👥 Contributors

This project was possible thanks to the following collaborators:

- **Sigfrido11**  🔗 [GitHub](https://github.com/Sigfrido11)  
- **Dr. Dominik Mitzel** 🔗 [TU Dortmund Profile](https://physik.tu-dortmund.de/en/research/research-focus-particle-physics/dr-dominik-mitzel/)
