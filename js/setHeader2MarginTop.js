$('.HeaderPrincipal').on('show.bs.collapse', function () {
    // do something…
    setTimeout(() => {
        let header1 = document.getElementsByClassName("HeaderPrincipal");
        let header2 = document.getElementsByClassName('SubHeader')[0];
        let computedStyle = window.getComputedStyle(header1, null);
        header2.style.marginTop = computedStyle['height'];
    }, 250);
})

$('.HeaderPrincipal').on('hide.bs.collapse', function () {
    // do something…
    setTimeout(() => {
        let header1 = document.getElementsByClassName("HeaderPrincipal");
        let header2 = document.getElementsByClassName('SubHeader')[0];
        let computedStyle = window.getComputedStyle(header1, null);
        header2.style.marginTop = `${computedStyle.height.split('px')[0] - 10}px`
        header2.style.transition = '0.2s';
    }, 250);
})

function moveinY(pixels, time) {
    setTimeout(() => {
        window.scroll(0, pixels);
    }, time * 1000);
}

function selectCorrectIllness(illness) {
    moveinY(900, 0.1);
    if (illness == 'estresContainer') {
        document.getElementById('estresContainer').style = "background-color: white !important";
        document.getElementById('indigContainer').style = "background-color: inherit";
        document.getElementById('insomContainer').style = "background-color: inherit";
        document.getElementById('enferImg').style.backgroundImage = "url(img/card-images/ProductCards/EstresImg.png)";
        document.getElementById('imgCaption').innerText = 'Imagen Representativa del Estrés';
        document.getElementById('enfTitle').innerText = 'El estrés';
        window.document.location.hash = '#estresContainer';
    } else if (illness == 'indigContainer') {
        document.getElementById('indigContainer').style = "background-color: white !important";
        document.getElementById('estresContainer').style = "background-color: inherit";
        document.getElementById('insomContainer').style = "background-color: inherit";
        document.getElementById('enferImg').style.backgroundImage = "url(img/card-images/ProductCards/IndigImg.jpg)";
        document.getElementById('imgCaption').innerText = 'Imagen Representativa de la Indigestión';
        document.getElementById('enfTitle').innerText = 'La indigestión';
        window.document.location.hash = '#indigContainer';
    } else if (illness == 'insomContainer') {
        document.getElementById('insomContainer').style = "background-color: white !important";
        document.getElementById('estresContainer').style = "background-color: inherit";
        document.getElementById('indigContainer').style = "background-color: inherit";
        document.getElementById('enferImg').style.backgroundImage = "url(img/card-images/ProductCards/InsomImg.jpg)";
        document.getElementById('imgCaption').innerText = 'Imagen Representativa del Insomnio';
        document.getElementById('enfTitle').innerText = 'El insomnio';
        window.document.location.hash = '#insomContainer';
    } else {
        document.getElementById('estresContainer').style = "background-color: white !important";
    }
}

moveinY(900,0.1);
let path = window.document.location.hash;
console.log(path.slice(1,path.length));
selectCorrectIllness(path.slice(1, path.length));

function validatePath(path){
    if (path.slice(1,path.length) == 'estresContainer' || path.slice(1,path.length) == 'indigContainer' || path.slice(1,path.length) == 'insomContainer') {
        selectCorrectIllness(path.slice(1, path.length));
    }
}

window.addEventListener('hashchange',() => {
    path = window.document.location.hash;
    validatePath(path.toString());
})

let enfermSelectEstres = document.querySelector('#estresContainer');
let enfermSelectIndigestion = document.querySelector('#indigContainer');
let enfermSelectInsomnio = document.querySelector('#insomContainer');

enfermSelectEstres.addEventListener('click', () => {
    selectCorrectIllness('estresContainer');
})

enfermSelectIndigestion.addEventListener('click', () => {
    selectCorrectIllness('indigContainer');
})

enfermSelectInsomnio.addEventListener('click', () => {
    selectCorrectIllness('insomContainer');
})
