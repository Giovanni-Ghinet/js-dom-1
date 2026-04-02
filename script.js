const bottonePerAccendere = document.querySelector('#bottone');
const statoLampadina = document.querySelector('#lampadina');


function clickPerAccendere() {
    console.log('Luce accesa');

    const imgLampadinaAccesa = "./img/yellow_lamp.png"

    let urlAccesa = `
        <img src="${imgLampadinaAccesa}" alt="luce accesa">
        <button id="bottoneSpento">Spegni</button>
    `;
    statoLampadina.innerHTML = urlAccesa;
    const bottonePerSpegnere = document.querySelector('#bottoneSpento');
    bottonePerSpegnere.addEventListener(
    'click', clickPerSpegnere
)
}

function clickPerSpegnere() {
    console.log('Luce spenta');

    const imgLampadinaSpenta = "./img/white_lamp.png"

    let urlSpenta = `
        <img src="${imgLampadinaSpenta}" alt="luce spenta">
        <button id="bottone">accendi</button>
    `;
    statoLampadina.innerHTML = urlSpenta;
    
    const bottonePerAccendere = document.querySelector('#bottone');
    bottonePerAccendere.addEventListener(
        'click', clickPerAccendere
    )
}


bottonePerAccendere.addEventListener(
    'click', clickPerAccendere
)



