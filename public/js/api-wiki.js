let place = 'Parque_Trianon';
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

let photos = {
  'Fundação_Cásper_Líbero': ['../imgs/fundaçao-casper-libero.jpg', '../imgs/fundaçao-casper-libero-2.jpeg'],
  'Conjunto_Nacional': ['../imgs/conjunto-nacional.jpg', '../imgs/conjunto-nacional-2.jpg', '../imgs/conjunto-nacional-3.jpg', '../imgs/conjunto-nacional-4.jpg'],
  'Parque_Trianon': ['../imgs/parque-trianon.jpg', '../imgs/parque-trianon-2.jpg', '../imgs/parque-trianon-3.jpg'],
  'Edifício_Anchieta': ['../imgs/edificio_anchieta.jpg', '../imgs/edificio_anchieta-2.jpg', '../imgs/edificio_anchieta-3.jpg'],
  'Museu_de_Arte_de_São_Paulo': ['../imgs/masp.jpg', '../imgs/masp-assis-chateaubriand.jpg', '../imgs/masp-pietro-bardi.jpg', '../imgs/masp-aerea.jpg']
};

function showPhotos(place) {
  console.log(photos[place]);
  // for (photo in photos[place]) {
  // gallery.innerHTML = ``;
  gallery.innerHTML = `
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 photo" src="${photos[place][0]}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 photo" src="${photos[place][1]}" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 photo" src="${photos[place][2]}" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      `;
}
