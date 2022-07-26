function getRandomHexColor() {
  // return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return `rgb(${Math.floor((Math.random() * 255) + 1)} , ${Math.floor((Math.random() * 255) + 1)}, ${ Math.floor((Math.random() * 255) + 1) })`;
}

const boxes = document.querySelector('#boxes');
const counter = document.querySelector('input[type=number]');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]')



create.addEventListener('click', divGeneration);
destroy.addEventListener('click', divDestroy)

function divGeneration() {
  let divSize = 30;
  for (let i = 0; i < counter.value; i++){
    
  const newDiv = document.createElement("div");
    
  newDiv.style.width = `${divSize}px`;
  newDiv.style.height = `${divSize}px`;
    const color = getRandomHexColor()
    newDiv.style.backgroundColor = color;
    console.log(color)

    
    boxes.append(newDiv);
    divSize = divSize + 10;
  }
}

function divDestroy() {

  boxes.innerHTML = '';
}
