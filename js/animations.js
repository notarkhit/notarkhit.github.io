const name = document.querySelector('[data-name]')
const letters = [..."Aryan Arkhit Behra"]

export function hoverPop() {

  letters.forEach((letter) => {
    let letterElement = document.createElement('span')
    letterElement.innerText = letter
    letterElement.classList.add('popper')
    name.appendChild(letterElement)
  })

  const poppers = document.querySelectorAll('.popper')

  poppers.forEach((popper) => {
    
    popper.addEventListener('mouseenter', () => {
      popper.style.color = '#f07b4f'
    })

    popper.addEventListener('mouseleave', () => {
      setTimeout(() => {
        popper.style.color = '#ffffff'
      }, 50);
    })

  });

}