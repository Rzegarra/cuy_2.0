 var changeInput = document.querySelector('.js-check-change')
      , initChangeInput = new Powerange(changeInput, { start: 70 });

    changeInput.onchange = function() {
      document.getElementById('js-display-change').innerHTML = changeInput.value;
    };
