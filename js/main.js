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
    for (var i = 0; i < 11; ++i) {
        c[i] = document.getElementById('card'+i);
    }
    c[3].addEventListener('click', function () {
        alert(c[3]);
    });

    /*
    const c0 = document.getElementById('c0');
    const c1 = document.getElementById('c1');
    const c2 = document.getElementById('c2');
    const c3 = document.getElementById('c3');
    const c4 = document.getElementById('c4');
    const c5 = document.getElementById('c5');
    const c6 = document.getElementById('c6');
    const c7 = document.getElementById('c7');
    const c8 = document.getElementById('c8');
    const c9 = document.getElementById('c9');
    const c10 = document.getElementById('c10');
    const c11 = document.getElementById('c11');
    */
});
