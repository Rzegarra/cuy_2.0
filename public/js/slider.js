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
    var cambio1 = document.querySelector('#chan3')
      , initcambio1 = new Powerange(cambio1, { start: 50 });

    cambio1.onchange = function() {
      document.getElementById('change3').innerHTML = cambio1.value;
    };
    var cambio2 = document.querySelector('#chan4')
      , initcambio2 = new Powerange(cambio2, { start: 50 });

    cambio2.onchange = function() {
      document.getElementById('change4').innerHTML = cambio2.value;
    };
    var cambio3 = document.querySelector('#chan5')
      , initcambio3 = new Powerange(cambio3, { start: 50 });

    cambio3.onchange = function() {
      document.getElementById('change5').innerHTML = cambio3.value;
    };


