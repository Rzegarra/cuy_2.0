 var changeInput = document.querySelector('#chan1')
      , initChangeInput = new Powerange(changeInput, { start: 50 });

    changeInput.onchange = function() {
      document.getElementById('change1').innerHTML = changeInput.value;
    };
     var cambio = document.querySelector('#chan2')
      , initcambio = new Powerange(cambio, { start: 50 });

    cambio.onchange = function() {
      document.getElementById('change2').innerHTML = cambio.value;
    };


