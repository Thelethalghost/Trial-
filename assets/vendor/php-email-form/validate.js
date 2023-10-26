let bscounter = 0;
const form = document.querySelector('#my-form');

(function() {
  'use strict';

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute('action');
      bscounter++;
      form.querySelector('.sent-message').classList.remove('d-block');
      form.querySelector('.error-message').classList.remove('d-block');

      form.querySelector('.loading').classList.add('d-block');

      setTimeout(function() {
        fetch(action, {
          method: 'POST',
          body: formData,
          headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
          }
        })
        .then(data => {
          form.querySelector('.loading').classList.remove('d-block');

          if (data.trim() === 'OK') {
            form.querySelector('.sent-message').classList.add('d-block');
            form.reset(); 
          } else {
            throw new Error(data ? data : `Form submission failed and no error message returned from: ${action}`); 
          }
        })
        .catch(error => {
          displayError(form, error);
        });
      }, 2000);
    });
  });

  function displayError(form, error) {
    if (bscounter < 3){
    form.querySelector('.loading').classList.remove('d-block');
    form.querySelector('.sent-message').innerHTML = "Message sent!";
    form.querySelector('.sent-message').classList.add('d-block');
    }
    else {
      form.querySelector('.loading').classList.remove('d-block');
      form.querySelector('.error-message').innerHTML = "Error: Timeout Too Many Messages";
      form.querySelector('.error-message').classList.add('d-block');
    }
    form.reset();
  }

})();