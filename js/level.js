
document.addEventListener('DOMContentLoaded', function () {
    const scene = document.querySelector('a-scene');
    const numeroDeCopias = 6; // Número de copias de cada modelo

    for (let i = 0; i < numeroDeCopias; i++) {
        ['zombieR', 'modelo-3d'].forEach(modelo => {
            let personaje = document.createElement('a-entity');
            personaje.setAttribute('gltf-model', `#${modelo}`);
            personaje.setAttribute('animation-mixer', '');



            let x = Math.random() * 20 - 10; // Ajusta estos valores según tu escena
            let y = 0;
            let z = Math.random() * 20 - 10;
            personaje.setAttribute('position', `${x} ${y} ${z}`);

            scene.appendChild(personaje);

        });

    }

    let score = 0

    const numeroDehongos = 3
    for (let i = 0; i < numeroDehongos; i++) {
        ['hongo'].forEach(modelo => {
            let hongos = document.createElement('a-entity');
            hongos.setAttribute('png-model', `#${modelo}`);
            hongos.setAttribute('geometry', { primitive: 'sphere', radius: '0.2' });
            hongos.setAttribute('material', { shader: 'flat', src: '#hongo' });
            hongos.setAttribute('animation', 'property: rotation; to: 360 360 0; loop: true; dur: 30000; easing: linear');
            hongos.setAttribute('shootable', '');
            hongos.classList.add('clickable');


            let x = Math.random() * 30 - 10;
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

    const light = document.getElementById('camera-light');
    document.addEventListener('keydown', function (e) {
        if (e.key === 'l') {
            light.setAttribute('intensity', light.getAttribute('intensity') > 0 ? 0 : 5);
        }
    });


});
