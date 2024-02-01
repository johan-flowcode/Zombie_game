
document.addEventListener('DOMContentLoaded', function () {
    const scene = document.querySelector('a-scene');
    const numeroDeCopias = 2; // Número de copias de cada modelo

    for (let i = 0; i < numeroDeCopias; i++) {
        ['zombieR','modelo-3d'].forEach(modelo => {
            let personaje = document.createElement('a-entity');
            personaje.setAttribute('gltf-model', `#${modelo}`);
            personaje.setAttribute('animation-mixer', '');



            let x = Math.random() * 10 - 10; // Ajusta estos valores según tu escena
            let y = 0;
            let z = Math.random() * 20 - 10;
            personaje.setAttribute('position', `${x} ${y} ${z}`);

            scene.appendChild(personaje);

            // Agregar luces puntuales para cada personaje
            let luz = document.createElement('a-entity');
            luz.setAttribute('light', 'type: point; intensity: 0.5; distance: 5; color: #FFF');
            luz.setAttribute('position', `${x} ${y + 2} ${z}`);
            scene.appendChild(luz);
        });
    }


});
