import questions from './data.js';
console.log(questions);

document.addEventListener('DOMContentLoaded', () => {

    const accordContainer = document.querySelector('.accordion');

    const toggleClick = (event) => {
        const accordItem = event.target.closest('.accord-item');

        if (accordItem) {
            const accordInfo = accordItem.querySelector('.accord-info');
            const accordSymbol = accordItem.querySelector('.accord-symbol');

            // Toggle the clicked accord-info element and set its symbol
            const isVisible = accordInfo.style.display === 'block';
            accordInfo.style.display = isVisible ? 'none' : 'block';
            accordSymbol.textContent = isVisible ? '+' : '-';

            // Hide all other accord-info elements and set their symbols to +
            accordContainer.querySelectorAll('.accord-info').forEach(info => {
                if (info !== accordInfo) {
                    info.style.display = 'none';
                }
            });
            accordContainer.querySelectorAll('.accord-symbol').forEach(symbol => {
                if (symbol !== accordSymbol) {
                    symbol.textContent = '+';
                }
            });
        }
    };

    // Attaching event listener to parent container and using event delegation to handle click on child elements
    accordContainer.addEventListener('click', toggleClick);

    questions.forEach((item) => {

        const accordItem = document.createElement('div');
        accordItem.classList.add('accord-item');

        const accordTitle = document.createElement('div');
        accordTitle.classList.add('accord-title');
        accordTitle.textContent = item.title;

        const accordSymbol = document.createElement('div');
        accordSymbol.classList.add('accord-symbol');
        accordSymbol.textContent = '+';

        const accordInfo = document.createElement('div');
        accordInfo.classList.add('accord-info');
        accordInfo.textContent = item.info;
        accordInfo.style.display = 'none';

        accordTitle.appendChild(accordSymbol);
        accordItem.appendChild(accordTitle);
        accordItem.appendChild(accordInfo);

        accordContainer.appendChild(accordItem);
    });
});
