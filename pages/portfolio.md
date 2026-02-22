---
layout: page
title: Portfolio
permalink: /portfolio/
feature-img: "assets/img/pexels/math.jpg"
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