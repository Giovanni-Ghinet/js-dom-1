const bottonePerAccendere = document.querySelector('#bottone');
const statoLampadina = document.querySelector('#lampadina');


function clickPerAccendere() {
    console.log('Luce accesa');

    const imgLampadinaAccesa = "./img/yellow_lamp.png"

    let urlAccesa = `
        <img src="${imgLampadinaAccesa}" alt="luce accesa">
    `;
    statoLampadina.innerHTML = urlAccesa;
    
}



bottonePerAccendere.addEventListener(
    'click', clickPerAccendere
)

