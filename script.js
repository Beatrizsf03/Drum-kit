'use strict';
            
            const sons = {
                'A': 'boom.wav',
                'S': 'clap.wav',
                'D': 'hihat.wav',
                'F': 'kick.wav',
                'G': 'openhat.wav',
                'H': 'ride.wav',
                'J': 'snare.wav',
                'K': 'tink.wav',
                'L': 'tom.wav'
            }

            const createDiv = (texto) => {
                const div = document.createElement('div');
                div.classList.add('key');
                div.textContent = texto;
                div.id = texto;
                document.getElementById('container').appendChild(div);
            }
            
            const exibir = (sons) => Object.keys(sons).forEach(createDiv);
            
            const playSound = (letter) => {
                const audio = new Audio(`./sounds/${sons[letter]}`);
                audio.play();
            }

            const addEffect = (letter) => document.getElementById(letter).classList.toggle('active');


            const removeEffect = (letter) => {
                const div = document.getElementById(letter);
                const removeActive = () => div.classList.remove('active');
                div.addEventListener('transitionend', removeActive);
            }

            const activateDiv = (evento) => {

                const letter = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();

                const letterAllowed = sons.hasOwnProperty(letter);
                if(letterAllowed){
                    addEffect(letter);
                    playSound(letter);
                    removeEffect(letter);
                }
            }
            
            exibir(sons);
            document.getElementById('container').addEventListener('click', activateDiv);
            window.addEventListener('keyup', activateDiv);