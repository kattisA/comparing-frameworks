function loadContent(type) {
    let frame1 = document.getElementById('frame1');
    let frame2 = document.getElementById('frame2');
    let frame3 = document.getElementById('frame3');

    if (type === 'card') {
        frame1.src = 'bootstrap/bootstrap-card.html';
        frame2.src = 'tailwind/tailwind-card.html';
        frame3.src = 'foundation/foundation-card.html';
    } else if (type === 'buttons') {
        frame1.src = 'bootstrap/bootstrap-buttons.html';
        frame2.src = 'tailwind/tailwind-buttons.html';
        frame3.src = 'foundation/foundation-buttons.html';
    }
}