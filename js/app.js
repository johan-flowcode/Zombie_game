
window.onload = function() {
  const scene = document.querySelector('a-scene');
  const numeroDeCopias = 5; // Número de copias de cada modelo

  for (let i = 0; i < numeroDeCopias; i++) {
    ['modelo-3d', 'zombieW', 'zombieR'].forEach(modelo => {
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
};
