class Testimonio {

    constructor() {
        this.hidden = true;
    }
}

// let body = document.querySelector('#parentApp');
// body.addEventListener('click', () => {
//     closeAllTestimonies();
// })

let Testimonios = new Object(Testimonio);

const desplegarTestimonio = (id) => {
    const animatedStyle = 'animation: easeInCardTitle 0.5s ease-in-out; opacity: 0.9;';
    const notAnimatedStyle = 'animation: none; opacity: 0;';
    let cardId = 'cardImage' + id + 'InnerDiv';
    if (Testimonios.hasOwnProperty(id - 1)) {
        let hidden = Testimonios[id - 1].hidden;
        if (!hidden) {
            Testimonios[id - 1].hidden = true;
            document.getElementById(cardId).style = notAnimatedStyle;
        } else {
            Testimonios[id - 1].hidden = false;
            document.getElementById(cardId).style = animatedStyle;
        }
    } else {
        let test = new Testimonio();
        test.hidden = !test.hidden;
        Testimonios[id - 1] = test;
        document.getElementById(cardId).style = animatedStyle;
    }
    console.log(Object.entries(Testimonios));
}

const closeAllTestimonies = () => {
    const testimoniosLength = Object.entries(Testimonios).length
    for (let i = 0; i < testimoniosLength; i++) {
        testimoniosLength[i].hidden = true;
    }
}