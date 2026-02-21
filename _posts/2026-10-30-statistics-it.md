---
layout: post
title: Post colorato
tags: [Test, Color]
color: brown
author: sylhare
categories: Example
last_modified: "01-02-2023"
excerpt_separator: <!--more-->
lang: it
locale: it
lang_ref: color-post
---

# Che post colorato!

Questa e' un'idea che viene da [xukimseven/HardCandy-Jekyll](https://github.com/xukimseven/HardCandy-Jekyll)
vedendo questo tema allegro e colorato, ho voluto abilitare qualcosa di simile per Type-on-Strap.

Puoi anche fare fork e mettere una stella a _HardCandy-Jekyll_.

<!--more-->

## Come funziona?

In pratica devi aggiungere solo una cosa: il colore.

```yml
---
layout: post
title: Post colorato
color: brown
---
```

Puo' essere un colore HTML come `brown` (che a me sembra rosso). Oppure in RGB:

```yml
---
layout: post
title: Post colorato
color: rgb(165,42,42)
---
```

Lo sfondo usato e' `lineart.png` da [xukimseven](https://github.com/xukimseven). Puoi modificarlo nel file di configurazione.
Se ne vuoi un altro, mettilo anche in `/assets/img`.

> Nota: E' un piccolo hack del CSS in `post.html`
