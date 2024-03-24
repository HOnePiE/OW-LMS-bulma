document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  const $dropdown = Array.prototype.slice.call(document.querySelectorAll('.dropdown'), 0);
  const $menuLinks = Array.prototype.slice.call(document.querySelectorAll('.menu-link'), 0);

  // navbarBurgur
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
  //active link
  // menu-link

  $menuLinks.forEach(el => {
    el.addEventListener('click', () => {
      $menuLinks.forEach(link => link.classList.remove('is-active'));
      el.classList.add('is-active');
    });
  });
  // dropdown
  $dropdown.forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
  // colaspe toggle
  document.querySelectorAll('.toggle-collapse').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var menu = this.nextElementSibling;
      menu.classList.toggle('is-hidden');

      var chevron = this.querySelector('.chevron-arrow');
      chevron.style.transform = chevron.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
  //image preview
  $('#upload').change(function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      $('#preview').attr('src', reader.result);
      $('#preview').show();
      $('#file-name').hide();
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      $('#preview').attr('src', "");
      $('#preview').hide();
      $('#file-name').show();
    }
  });
  // close form
  $(document).ready(function () {
    $('#closeForm').click(function () {
      $('#addSectionModal').removeClass('is-active');
    });
  });
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});