'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const cards = [
        'ciri.png',
        'iorweth.png',
        'ciri.png',
        'jaskier.png',
        'jaskier.png',
        'triss.png',
        'yen.png',
        'geralt.png',
        'triss.png',
        'iorweth.png',
        'yen.png',
        'gerant.png'
    ];
    const c = [];
    for (var i = 0; i <= 11; ++i) {
        c[i] = document.getElementById('card' + i);
    }
    c[0].addEventListener('click', function () {
        reverseCard(c[0])
    });
    c[1].addEventListener('click', function () {
        reverseCard(c[1])
    });
    c[2].addEventListener('click', function () {
        reverseCard(c[2])
    });
    c[3].addEventListener('click', function () {
        reverseCard(c[3])
    });
    c[4].addEventListener('click', function () {
        reverseCard(c[4])
    });
    c[5].addEventListener('click', function () {
        reverseCard(c[5])
    });
    c[6].addEventListener('click', function () {
        reverseCard(c[6])
    });
    c[7].addEventListener('click', function () {
        reverseCard(c[7])
    });
    c[8].addEventListener('click', function () {
        reverseCard(c[8])
    });
    c[9].addEventListener('click', function () {
        reverseCard(c[9])
    });
    c[10].addEventListener('click', function () {
        reverseCard(c[10])
    });
    c[11].addEventListener('click', function () {
        reverseCard(c[11])
    });

    function reverseCard(cardID) {
        console.log(cardID.id);
    }

});
