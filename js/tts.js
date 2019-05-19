const text = 'hey, Olá, tudo pronto para começar a conhecer o mundo ao seu redor?';
const url = 'http://api.voicerss.org/';
const apiKey = '4f7e97301b1f4542b90ca9ffaa0c9e81';
const playBtn = document.getElementById('play-btn');
const player = document.getElementById('player');
const endpoint = `${url}?key=${apiKey}&hl=pt-BR&src=${text}&f=48khz_16bit_stereo`;

player.setAttribute('src', endpoint);
