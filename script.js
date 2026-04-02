const bottonePerAccendere = document.querySelector('#bottone');
const statoLampadina = document.querySelector('#lampadina');


function clickPerAccendere() {
  const html = statoLampadina.innerHTML;

  if (html.includes('yellow_lamp.png')) {
    // lampadina accesa → la spengo
    const urlSpenta = `
      <img class="dimensione-immagine" src="./img/white_lamp.png" alt="luce spenta">
    `;
    statoLampadina.innerHTML = urlSpenta;
    bottonePerAccendere.textContent = 'Accendi';
  }
  else if (html.includes('white_lamp.png')) {
    // lampadina spenta → la accendo
    const urlAccesa = `
      <img class="dimensione-immagine" src="./img/yellow_lamp.png" alt="luce accesa">
    `;
    statoLampadina.innerHTML = urlAccesa;
    bottonePerAccendere.textContent = 'Spegni';
  }
}



bottonePerAccendere.addEventListener(
    'click', clickPerAccendere
)



