const btn = document.querySelector('#btn');
const paragrafo = document.querySelector('#cont-click');
let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount += 1;
    paragrafo.innerHTML = clickCount;
})