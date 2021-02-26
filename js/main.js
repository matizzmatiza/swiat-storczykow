const plants = [...document.querySelectorAll('.plant')];
const resultPlants = document.querySelector('.result-plants');

const getInformation = (name, description, url) => {
    plants.forEach(e => {
        e.classList.remove('underline');
    })
    resultPlants.innerHTML = '';
    let desc = document.createElement('p');
    resultPlants.appendChild(desc);
    desc.innerHTML = description;
    resultPlants.setAttribute("style", "background-image: url('./img/" + url + ".jpg')")
    plants.forEach(e => {
        if(e.classList.contains(name)){
            e.classList.add('underline');
        }
    })
}

const getName = (event, name) => {
    return event.classList.contains(name);
}

plants.forEach(e => {
    e.addEventListener('click', () => {
        if(getName(e, 'blady')) {
            getInformation('blady', 'Liście odwrotnie jajowate lub eliptyczne, siedzące, w liczbie 4-6, skupione w rozetę u nasady łodygi, połyskujące.', '1');
        } else if(getName(e, 'blotny')) {
            getInformation('blotny', 'Do 50 cm wysokości. Ulistniony (3-5 liści), wyprostowany, obły lub lekko kanciasty, zielony pęd, w górze niekiedy czerwonawo nabiegły. Równowąskie, ostro zakończone, o długości 10-20 cm i szerokości 1 cm. Kwiaty o średniej wielkości skupione w groniastym kwiatostanie o długości 7-10 cm.', '2');
        } else if(getName(e, 'cuchnacy')) {
            getInformation('cuchnacy', 'Roślina osiąga wysokość 15-40 cm. Osiąga od 1 do 2 cm średnicy. Równowąskie i lancetowate o długości do 10 cm. Zebrane w kwiatostan, dość gęsty, długości do 15 cm.', '3');
        } else if(getName(e, 'drobnokwiatowy')) {
            getInformation('drobnokwiatowy', 'Kłos początkowo jajowaty, potem walcowaty. Zewnętrzne listki okwiatu 3-3.5mm długości, z zewnątrz czerwonobrązowe. Warżka 2-4mm długości. Ostroga krótka, 2-4× krótsza od zalążni.', '4');
        } else if(getName(e, 'kukawka')) {
            getInformation('kukawka', 'Mają długość do 15 cm, są szerokolancetowate i błyszczące. Najwyższy z liści obejmuje pochwiasto łodygę. Zebrane na szczycie łodygi w gęsty 20-60 kwiatowy kwiatostan o długości 5-20 cm.', '5');
        } else if(getName(e, 'meski')) {
            getInformation('meski', 'Smukła, bladozielona, często na górze fioletowo nabiegła, a u nasady lekko plamista i czasami pusta. Rośnie do wysokości od 20 do 60 cm. ... Zebrane w kwiatostan stożkowaty o wysokości do 20 cm, liczący od 10-45 kwiatów, gęsty w górze, kłos dołem zwykle luźny. Kwiaty średniej wielkości.', '6');
        } else if(getName(e, 'purpurowy')) {
            getInformation('purpurowy', 'Łodyga wzniesiona, prosta, nierozgałęziona, o wysokości 30-75 cm. Często jest w górnej części purpurowo nabiegłaLiście Kwiaty zebrane w gęsty 30-90-kwiatowy kwiatostan na szczycie łodygi.', '7');
        } else if(getName(e, 'samczy')) {
            getInformation('samczy', 'Łodyga prosta smukła, zielona ale czerwono nabiegła, o wysokości do 35cm, zakończona luźnym kwiatostanem. Wyrasta z jajowatej, niepodzielonej bulwy.', '8');
        } else if(getName(e, 'trojzebny')) {
            getInformation('trojzebny', 'Przysadka długości 0,3 cm do 0,4 cm, zalążnia 0,8 – 1,1 cm. Kwiaty średniej wielkości. Warżka do 1 cm długości. Górny, zewnętrzny listek okwiatu osiąga 0,8 cm, boczny zewnętrzny ma 1 cm, a boczny wewnętrzny - 0,5 cm.', '9');
        }
    })
})