---
layout: page
title: Contact
permalink: /en/contact/
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

Fill in the form and your email client will open with the message ready to send.

<form id="contact-form" class="contact-form" action="mailto:giuseppe.luciano03@gmail.com" method="post" enctype="text/plain">
  <label for="contact-name">Name</label>
  <input id="contact-name" name="name" type="text" autocomplete="name" required>

  <label for="contact-email">Email</label>
  <input id="contact-email" name="email" type="email" autocomplete="email" required>

  <label for="contact-message">Message</label>
  <textarea id="contact-message" name="message" rows="6" required></textarea>

  <button type="submit" class="btn">Send</button>
</form>

<p id="contact-status" class="contact-status" aria-live="polite"></p>

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
  .contact-status {
    margin-top: 0.8rem;
    font-weight: 600;
  }
  .contact-status.is-success { color: #0f6b3a; }
  .contact-status.is-error { color: #8a1c1c; }
  .contact-status.is-loading { color: #1f2933; }
</style>

<script>
  (function () {
    if (!window.fetch) return;
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-status');
    const button = form ? form.querySelector('button[type="submit"]') : null;
    if (!form || !status) return;

    const setStatus = (message, type) => {
      status.textContent = message;
      status.className = 'contact-status' + (type ? ' is-' + type : '');
    };

    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      setStatus('Sending...', 'loading');
      if (button) button.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          setStatus('Message sent. Thank you!', 'success');
          form.reset();
          return;
        }

        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length) {
          setStatus(data.errors.map(e => e.message).join(' '), 'error');
        } else {
          setStatus('Error sending message. Please try again.', 'error');
        }
      } catch (err) {
        setStatus('Network error. Please try again.', 'error');
      } finally {
        if (button) button.disabled = false;
      }
    });
  })();
</script>

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

      const subject = encodeURIComponent('Contact from website - ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message
      );
      window.location.href = 'mailto:giuseppe.luciano03@gmail.com?subject=' + subject + '&body=' + body;
    });
  })();
</script>
