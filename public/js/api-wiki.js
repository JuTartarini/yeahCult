const place = 'Museu_de_Arte_de_São_Paulo';
const wikiUrl = 'https://pt.wikipedia.org/api/rest_v1/page/summary';

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

    photosMasp.forEach = (i) => {
      console.log(i);

      let newImg = document.createElement('img');
      newImg.src = photosMasp.i;

      gallery.appendChild(newImg);
    }

    fetchTTS(wikiSummary);
  });

