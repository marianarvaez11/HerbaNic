let count = 0;

function activateText(options) {
    switch (options) {
        case 'mision':
            document.getElementById('vision-text').style.display = 'none';
            document.getElementById('values-text').style.display = 'none';
            document.getElementById('mision-text').style.display = 'block';
            break;

        case 'vision':
            document.getElementById('mision-text').style.display = 'none';
            document.getElementById('values-text').style.display = 'none';
            document.getElementById('vision-text').style.display = 'block';
            break;

        case 'valores':
            document.getElementById('mision-text').style.display = 'none';
            document.getElementById('values-text').style.display = 'block';
            document.getElementById('vision-text').style.display = 'none';
            break;

        default:
            document.getElementById('mision-text').style.display = 'block';
            break;
    }
}

function changeTextMessageNext() {
    switch (count) {
        case 0:
            count++;
            document.getElementById('text-message-1').style.display = 'none';
            document.getElementById('text-message-2').style.display = 'block';
            document.getElementById('text-message-3').style.display = 'none';

            document.getElementById('person-1').style.display = 'none';
            document.getElementById('person-2').style.display = 'block';
            document.getElementById('person-3').style.display = 'none';
            break;

        case 1:
            count++;
            document.getElementById('text-message-1').style.display = 'none';
            document.getElementById('text-message-2').style.display = 'none';
            document.getElementById('text-message-3').style.display = 'block';

            document.getElementById('person-1').style.display = 'none';
            document.getElementById('person-2').style.display = 'none';
            document.getElementById('person-3').style.display = 'block';
            break;

        case 2:
            document.getElementById('text-message-1').style.display = 'block';
            document.getElementById('text-message-2').style.display = 'none';
            document.getElementById('text-message-3').style.display = 'none';

            document.getElementById('person-1').style.display = 'block';
            document.getElementById('person-2').style.display = 'none';
            document.getElementById('person-3').style.display = 'none';
            count = 0;
            break;
    }
}

function changeTextMessageBack() {
    switch (count) {
        case 0:
            count = 2;
            document.getElementById('text-message-1').style.display = 'none';
            document.getElementById('text-message-2').style.display = 'none';
            document.getElementById('text-message-3').style.display = 'block';

            document.getElementById('person-1').style.display = 'none';
            document.getElementById('person-2').style.display = 'none';
            document.getElementById('person-3').style.display = 'block';
            break;

        case 1:
            count--;
            document.getElementById('text-message-1').style.display = 'block';
            document.getElementById('text-message-2').style.display = 'none';
            document.getElementById('text-message-3').style.display = 'none';

            document.getElementById('person-1').style.display = 'block';
            document.getElementById('person-2').style.display = 'none';
            document.getElementById('person-3').style.display = 'none';
            break;

        case 2:
            count--;
            document.getElementById('text-message-1').style.display = 'none';
            document.getElementById('text-message-2').style.display = 'block';
            document.getElementById('text-message-3').style.display = 'none';

            document.getElementById('person-1').style.display = 'none';
            document.getElementById('person-2').style.display = 'block';
            document.getElementById('person-3').style.display = 'none';
            break;

        default:
            break;
    }
}

function commentText() {
    let element = document.createElement('div');
    let quote = document.getElementById('comment').value;
    element.className = 'container-vt gap-12';
    element.innerHTML = '<hr>' +
        '<p class="body-1 on-background">' + '“' + quote + '”' +
        '</p><div class="container-ht gap-12"><img style="width: 56px; height: 56px;" class="br-all-50" src="./img/person.png" alt="profile"><div class="container-vt"><a href="#" class="button on-background">Joseph Martínez</a><span class="caption on-background">Paciente</span></div></div>';

    document.getElementById('comments').appendChild(element);
}

function controlInputNumber(idNumber, idPurchaseText, add) {
    let value = document.getElementById(idNumber).value;
    if (add) {
        let valueNumber = Number(value) + 1;
        let elements = document.querySelectorAll("span[id*='price-pruchase']");
        document.getElementById(idPurchaseText).innerHTML = + valueNumber * 230;
        document.getElementById(idNumber).value = valueNumber;

        valueNumber = 0;
        elements.forEach(element => {

            valueNumber += parseInt(element.textContent);
        });

        elements = document.querySelectorAll("span[id*='purchase']");

        elements.forEach(element => {
            element.innerHTML = valueNumber;
        });
    }
    else {
        if (value > 1) {
            let valueNumber = Number(value) - 1;
            let elements = document.querySelectorAll("span[id*='price-pruchase']");
            document.getElementById(idNumber).value = valueNumber;
            document.getElementById(idPurchaseText).innerHTML = valueNumber * 230;

            valueNumber = 0;
            elements.forEach(element => {

                valueNumber += parseInt(element.textContent);
            });

            elements = document.querySelectorAll("span[id*='purchase']");

            elements.forEach(element => {
                element.innerHTML = valueNumber;
            });
        }
        else {
            let valueNumber = Number(1);
            document.getElementById(idNumber).value = Number(1);
            document.getElementById(idPurchaseText).innerHTML = valueNumber * 230;
        }
    }
}

function hideCard(idCard) {
    document.getElementById(idCard).style.display = 'none';
}