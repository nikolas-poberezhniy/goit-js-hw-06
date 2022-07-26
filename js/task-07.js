const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener("input", (element) => {
    text.style.fontSize = `${element.currentTarget.value}px`;
})

