function loadContent(type) {
    let columnSection = document.querySelector('.column-section');
    let rowSection = document.querySelector('.row-section');

    let columnFrame1 = document.getElementById('columnFrame1');
    let columnFrame2 = document.getElementById('columnFrame2');
    let columnFrame3 = document.getElementById('columnFrame3');
    
    let rowFrame1 = document.getElementById('rowFrame1');
    let rowFrame2 = document.getElementById('rowFrame2');
    let rowFrame3 = document.getElementById('rowFrame3');

    if (type === 'card') {
        columnFrame1.src = 'bootstrap/bootstrap-card.html';
        columnFrame2.src = 'tailwind/tailwind-card.html';
        columnFrame3.src = 'foundation/foundation-card.html';
        columnSection.style.display = 'block';
        rowSection.style.display = 'none';
    } else if (type === 'buttons') {
        columnFrame1.src = 'bootstrap/bootstrap-buttons.html';
        columnFrame2.src = 'tailwind/tailwind-buttons.html';
        columnFrame3.src = 'foundation/foundation-buttons.html';

        columnSection.style.display = 'block';
        rowSection.style.display = 'none';
    } else if (type === 'grid') {
        rowFrame1.src = 'bootstrap/bootstrap-grid.html'
        rowFrame2.src = 'tailwind/tailwind-grid.html'
        rowFrame3.src = 'foundation/foundation-grid.html'

        rowSection.style.display = 'block';
        columnSection.style.display = 'none';
    }
}