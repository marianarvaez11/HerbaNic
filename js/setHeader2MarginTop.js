$('#HeaderPrincipal').on('show.bs.collapse', function () {
    // do something…
    setTimeout(() => {
        let header1 = document.getElementById("HeaderPrincipal");
        let header2 = document.getElementsByClassName('SubHeader')[0];
        let computedStyle = window.getComputedStyle(header1, null);
        header2.style.marginTop = computedStyle['height'];
    }, 250);
})

$('#HeaderPrincipal').on('hide.bs.collapse', function () {
    // do something…
    setTimeout(() => {
        let header1 = document.getElementById("HeaderPrincipal");
        let header2 = document.getElementsByClassName('SubHeader')[0];
        let computedStyle = window.getComputedStyle(header1, null);
        header2.style.marginTop = `${computedStyle.height.split('px')[0] - 10}px`
        header2.style.transition = '0.2s';
    }, 250);
})