const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const fs = require('fs');

var textToSpeech = new TextToSpeechV1({
  iam_apikey: 'Xrl8IFQHYLlIYgmceaC-3SDJoFaNSJ4Drdzdrqo0Uouu',
  url: 'https://stream.watsonplatform.net/text-to-speech/api',
});

var params = {
  text: 'Olá, conheça o mundo ao seu redor',
  voice: 'pt-BR_IsabelaVoice',
  accept: 'audio/mp3',
};

textToSpeech.synthesize(params, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res.pipe(fs.createWriteStream('audio.mp3'));
  }
});

