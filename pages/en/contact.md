---
layout: page
title: Contact
permalink: /en/contact/
feature-img: "assets/img/pexels/math.jpg"
lang: en
lang_ref: contact
position: 4
---

<div class="about-content" markdown="1">
  <div class="post-lang-switch is-en">
    <div class="lang-indicator"></div>
    <a class="lang-option" href="{{ '/contact/' | relative_url }}" data-set-lang="it" aria-label="Italiano">IT</a>
    <a class="lang-option is-active" href="{{ '/en/contact/' | relative_url }}" data-set-lang="en" aria-label="English">EN</a>
  </div>

## Contact Me

Fill in the form: the message will be sent directly without opening your email client.

<form id="contact-form" class="contact-form" action="https://formspree.io/f/xaqdpoae" method="POST">
  <label for="contact-name">Name</label>
  <input id="contact-name" name="name" type="text" autocomplete="name" required>

  <label for="contact-email">Email</label>
  <input id="contact-email" name="email" type="email" autocomplete="email" required>

  <label for="contact-message">Message</label>
  <textarea id="contact-message" name="message" rows="6" required></textarea>

  <input type="text" name="_gotcha" style="display:none">
  <input type="hidden" name="_subject" value="Contact from website">

  <button type="submit" class="btn">Send</button>
</form>

</div>

<style>
  .about-content {
    color: #1f2933;
  }
  .contact-form {
    display: grid;
    gap: 0.75rem;
    margin-top: 1rem;
  }
  .contact-form label {
    font-weight: 600;
    color: #111827;
  }
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.7rem 0.85rem;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.12);
    background: #fff;
    color: #111827;
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
