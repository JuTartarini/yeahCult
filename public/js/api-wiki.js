const place = 'Parque_Trianon';
const wikiUrl = 'https://pt.wikipedia.org/api/rest_v1/page/summary';
const wikiUrlEn = 'https://en.wikipedia.org/api/rest_v1/page/summary';

fetch(`${wikiUrl}/${place}`)
  .then(resp => resp.json())
  .then(resp => {
    const wikiSummary = resp.extract;
    const newP = document.createElement('p');
    newP.textContent = wikiSummary;
    newP.setAttribute('id', 'text');
    newP.setAttribute('class', 'text');
    summary.appendChild(newP);

    const moreUrl = resp.content_urls.mobile.page;
    const newA = document.createElement('a');
    newA.setAttribute('class', 'read-more');
    newA.textContent = 'Saiba Mais...';
    newA.href = moreUrl;
    newA.target = '_blank';
    summary.appendChild(newA);

    if (place === 'Museu_de_Arte_de_São_Paulo') {
      showPhotos('Museu_de_Arte_de_São_Paulo');
    } else if (place === 'Parque_Trianon') {
      showPhotos('Parque_Trianon');
    } else if (place === 'Conjunto_Nacional') {
      showPhotos('Conjunto_Nacional');
    } else if (place === 'Fundação_Cásper_Líbero') {
      showPhotos('Fundação_Cásper_Líbero');
    } else if (place === 'Edifício_Anchieta') {
      showPhotos('Edifício_Anchieta');
    }

    fetchTTS(wikiSummary);
  });

$('#btnEnglish').on('click', () => {
  $('#summary').text('');

  fetch(`${wikiUrlEn}/${place}`)
    .then(resp => resp.json())
    .then(resp => {
      const wikiSummary = resp.extract;
      const newP = document.createElement('p');
      newP.textContent = wikiSummary;
      newP.setAttribute('id', 'text');
      newP.setAttribute('class', 'text');
      summary.appendChild(newP);

      const moreUrl = resp.content_urls.mobile.page;
      const newA = document.createElement('a');
      newA.setAttribute('class', 'read-more');
      newA.textContent = 'Know more...';
      newA.href = moreUrl;
      newA.target = '_blank';
      summary.appendChild(newA);

      fetchTTS(wikiSummary);
    });
})
