---
layout: page
title: Portfolio
permalink: /portfolio/
feature-img: "assets/img/pexels/computer.jpeg"
lang: it
lang_ref: portfolio
tags: [Page]
---

{% assign projects = site.portfolio | where: "lang", "it" | sort: "date" | reverse %}
{% for project in projects %}
  <article>
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    {{ project.excerpt }}
  </article>
{% endfor %}

<style>
  /* Soft zoom for feature image */
  .feature-image img {
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .feature-image:hover img {
    transform: scale(1.03);
  }
</style>