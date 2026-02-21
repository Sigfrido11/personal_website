---
layout: page
title: Contattami
permalink: /contact/
feature-img: "assets/img/pexels/math.jpg"
lang: it
lang_ref: contact
position: 4
---

<div class="about-content" markdown="1">
  <div class="post-lang-switch">
    <div class="lang-indicator"></div>
    <a class="lang-option is-active" href="{{ '/contact/' | relative_url }}" data-set-lang="it" aria-label="Italiano">IT</a>
    <a class="lang-option" href="{{ '/en/contact/' | relative_url }}" data-set-lang="en" aria-label="English">EN</a>
  </div>

## Contattami

Compila il modulo e si aprira il tuo client email con il messaggio gia pronto.

<form id="contact-form" class="contact-form" action="mailto:giuseppe.luciano03@gmail.com" method="post" enctype="text/plain">
  <label for="contact-name">Nome</label>
  <input id="contact-name" name="name" type="text" autocomplete="name" required>

  <label for="contact-email">Email</label>
  <input id="contact-email" name="email" type="email" autocomplete="email" required>

  <label for="contact-message">Messaggio</label>
  <textarea id="contact-message" name="message" rows="6" required></textarea>

  <button type="submit" class="btn">Invia</button>
</form>

</div>

<style>
  .contact-form {
    display: grid;
    gap: 0.75rem;
    margin-top: 1rem;
  }
  .contact-form label {
    font-weight: 600;
  }
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.7rem 0.85rem;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.12);
    background: #fff;
  }
  .contact-form .btn {
    display: inline-block;
    padding: 0.7rem 1.6rem;
    border-radius: 999px;
    background: linear-gradient(120deg, #0b6fa4, #00a67c);
    color: #fff;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
</style>

<script>
  (function () {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) return;

      const subject = encodeURIComponent('Contatto dal sito - ' + name);
      const body = encodeURIComponent(
        'Nome: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message
      );
      window.location.href = 'mailto:giuseppe.luciano03@gmail.com?subject=' + subject + '&body=' + body;
    });
  })();
</script>
