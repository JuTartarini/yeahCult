const place = 'Parque_Trianon';
const wikiUrl = 'https://pt.wikipedia.org/api/rest_v1/page/summary';
const wikiUrlEn = 'https://en.wikipedia.org/api/rest_v1/page/summary';

fetch(`${wikiUrl}/${place}`)
  .then(resp => resp.json())
  .then(resp => {
    const wikiTitle = resp.title;
    const wikiSummary = resp.extract;
    const moreUrl = resp.content_urls.mobile.page;

    summary.innerHTML = `
      <h1>${wikiTitle}</h1>
      <p id='text' class='text'>${wikiSummary}</p>
      <a class='read-more' href='${moreUrl}' target='_blank'>Saiba mais...</a>
    `;

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
    // fetchTTS(wikiSummary);
  });

$('#btnEnglish').on('click', () => {
  $('#summary').text('');

  fetch(`${wikiUrlEn}/${place}`)
    .then(resp => resp.json())
    .then(resp => {
      const wikiTitle = resp.title;
      const wikiSummary = resp.extract;
      const moreUrl = resp.content_urls.mobile.page;

      summary.innerHTML = `
      <h1>${wikiTitle}</h1>
      <p id='text' class='text'>${wikiSummary}</p>
      <a class='read-more' href='${moreUrl}' target='_blank'>Read more...</a>
    `;

      // fetchTTS(wikiSummary);
    });
})
