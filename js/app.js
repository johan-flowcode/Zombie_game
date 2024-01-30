
document.addEventListener('DOMContentLoaded', function () {

  const scene = document.querySelector('a-scene');
  const numeroDeCopias = 2; // Número de copias de cada modelo

  for (let i = 0; i < numeroDeCopias; i++) {
    ['modelo-3d', 'zombieW', 'zombieR', 'warrior'].forEach(modelo => {
      let personaje = document.createElement('a-entity');
      personaje.setAttribute('gltf-model', `#${modelo}`);
      personaje.setAttribute('animation-mixer', '');



      let x = Math.random() * 30 - 10; // Ajusta estos valores según tu escena
      let y = 0;
      let z = Math.random() * 30 - 20;
      personaje.setAttribute('position', `${x} ${y} ${z}`);

      scene.appendChild(personaje);

      // Agregar luces puntuales para cada personaje
      let luz = document.createElement('a-entity');
      luz.setAttribute('light', 'type: point; intensity: 0.5; distance: 5; color: #FFF');
      luz.setAttribute('position', `${x} ${y + 2} ${z}`);
      scene.appendChild(luz);
    });
  }

  let score = 0

  const numeroDehongos = 4
  for (let i = 0; i < numeroDehongos; i++) {
    ['hongo'].forEach(modelo => {
      let hongos = document.createElement('a-entity');
      hongos.setAttribute('png-model', `#${modelo}`);
      hongos.setAttribute('geometry', { primitive: 'sphere', radius: '0.2' });
      hongos.setAttribute('material', { shader: 'flat', src: '#hongo' });
      hongos.setAttribute('animation', 'property: rotation; to: 360 360 0; loop: true; dur: 30000; easing: linear');
      hongos.setAttribute('shootable', '');
      hongos.classList.add('clickable');


      let x = Math.random() * 30 - 10; // Ajusta estos valores según tu escena
      let y = 0.7;
      let z = Math.random() * 30 - 20;
      hongos.setAttribute('position', `${x} ${y} ${z}`);

      scene.appendChild(hongos);

    })
  }




  AFRAME.registerComponent('shootable', {
    init: function () {
      this.el.addEventListener('click', () => {
        console.log('Modelo clickeado');
        this.el.parentNode.removeChild(this.el);
        score++;
        const scoreText = document.querySelector('#score-text');
        if (scoreText) {
          scoreText.setAttribute('value', `Score: ${score}`);
        }
        if (score === numeroDehongos) {
          mostrarMensajeFinJuego();
        }
      });
    }
  });


  function mostrarMensajeFinJuego() {
    console.log("Intentando mostrar el mensaje de fin de juego");
    const mensajeFinJuego = document.getElementById('fin-juego-mensaje');
    mensajeFinJuego.style.display = 'block'; // Cambia a 'block' para mostrar
  }

  // Función para ocultar el mensaje del juego
  function ocultarMensajeFinJuego() {
    const mensajeFinJuego = document.getElementById('fin-juego-mensaje');
    mensajeFinJuego.style.display = 'none'; // Cambia a 'none' para ocultar
  }

  document.getElementById('next-level-button').addEventListener('click', function () {
    window.location.href = 'nivel.html';
  });


});







