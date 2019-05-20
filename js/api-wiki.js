const place = 'Museu_de_Arte_de_S%C3%A3o_Paulo';
const wikiUrl = 'https://pt.wikipedia.org/api/rest_v1/page/summary';

fetch(`${wikiUrl}/${place}`)
  .then(resp => resp.json())
  .then(resp => {
    const wikiSummary = resp.extract;
    const newP = document.createElement('p');
    newP.textContent = wikiSummary;
    newP.setAttribute('id', 'text');
    summary.appendChild(newP);
    fetchTTS(wikiSummary)
  });

