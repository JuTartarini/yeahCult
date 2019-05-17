let text = 'hey, Olá, tudo pronto para começar a conhecer o mundo ao seu redor?';
let url = 'http://api.voicerss.org/';
let apiKey = '4f7e97301b1f4542b90ca9ffaa0c9e81';
const playBtn = document.getElementById('play-btn');
const player = document.getElementById('player');
const urlGen = `${url}?key=${apiKey}&hl=pt-BR&src=${text}&f=48khz_16bit_stereo`;

const play = () => player.setAttribute('src', urlGen);

player.addEventListener('click', play());
