// FiledPermit landing — placeholder form handling only.
// PLACEHOLDER: no endpoint is wired yet. On submit, validate natively and
// show the confirmation state. Wire the real endpoint where marked below.
(function () {
  var form = document.getElementById('signup-form');
  var success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // TODO(wiring): POST the form data (name, email, trade, cities) to the
    // real signup endpoint here, then show the success state on success.
    form.hidden = true;
    success.hidden = false;
    success.setAttribute('tabindex', '-1');
    success.focus();
  });
})();
