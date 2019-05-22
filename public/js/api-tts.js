const voiceUrl = 'http://api.voicerss.org/';
const apiKey = '4f7e97301b1f4542b90ca9ffaa0c9e81';

function fetchTTS(text) {
  fetch(`${voiceUrl}?key=${apiKey}&hl=pt-BR&src=${text}&f=48khz_16bit_stereo`)
    .then(resp => {
      player.preload = 'auto';
      const sourceTag = document.createElement('source');
      sourceTag.type = 'audio/wav';
      sourceTag.src = resp.url;

      player.appendChild(sourceTag);
    })
    .catch(error => {
      errorMsg.textContent = error + 'Erro. Não foi possível carregar o áudio!';
    });
}

// function fetchTTSEn(text) {
//   fetch(`${voiceUrl}?key=${apiKey}&hl=en&src=${text}&f=48khz_16bit_stereo`)
//     .then(resp => {
//       player.preload = 'auto';
//       const sourceTag = document.createElement('source');
//       sourceTag.type = 'audio/wav';
//       sourceTag.src = resp.url;

//       player.appendChild(sourceTag);
//     })
//     .catch(error => {
//       errorMsg.textContent = error + 'Erro. Não foi possível carregar o áudio!';
//     });
//   window.location.reload()

// }
