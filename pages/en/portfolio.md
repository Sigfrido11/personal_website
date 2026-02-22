---
layout: page
title: Portfolio
permalink: /en/portfolio/
subtitle: "Projects I am working on"
feature-img: "assets/img/pexels/computer.jpeg"
position: 3
tags: [Page]
lang: en
lang_ref: portfolio
---

{% assign projects = site.portfolio | where: "lang", "en" | sort: "date" | reverse %}
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