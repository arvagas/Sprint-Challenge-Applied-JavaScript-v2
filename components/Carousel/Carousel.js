/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
document.querySelector('.carousel-container').appendChild(createCarousel())

function createCarousel() {
  // Create elements
  const carousel = document.createElement('div')
  const leftBtn = document.createElement('div')
  const imgOne = document.createElement('img')
  const imgTwo = document.createElement('img')
  const imgThree = document.createElement('img')
  const imgFour = document.createElement('img')
  const rightBtn = document.createElement('div')

  // Structure elements
  carousel.appendChild(leftBtn)
  carousel.appendChild(imgOne)
  carousel.appendChild(imgTwo)
  carousel.appendChild(imgThree)
  carousel.appendChild(imgFour)
  carousel.appendChild(rightBtn)

  // Set attributes
  leftBtn.textContent = '<'
  imgOne.src = './assets/carousel/mountains.jpeg'
  imgTwo.src = './assets/carousel/computer.jpeg'
  imgThree.src = './assets/carousel/trees.jpeg'
  imgFour.src = './assets/carousel/turntable.jpeg'
  rightBtn.textContent = '>'

  // Set classes
  carousel.classList.add('carousel')
  leftBtn.classList.add('left-button')
  imgOne.classList.add('img-reveal')
  rightBtn.classList.add('right-button')

  // Button events
  rightBtn.addEventListener('click', () => {
    if (imgOne.classList.contains('img-reveal')) {
      imgOne.classList.toggle('img-reveal')
      imgTwo.classList.toggle('img-reveal')
    } else if (imgTwo.classList.contains('img-reveal')) {
      imgTwo.classList.toggle('img-reveal')
      imgThree.classList.toggle('img-reveal')
    } else if (imgThree.classList.contains('img-reveal')) {
      imgThree.classList.toggle('img-reveal')
      imgFour.classList.toggle('img-reveal')
    } else if (imgFour.classList.contains('img-reveal')) {
      imgFour.classList.toggle('img-reveal')
      imgOne.classList.toggle('img-reveal')
    }
  })

  leftBtn.addEventListener('click', () => {
    if (imgOne.classList.contains('img-reveal')) {
      imgOne.classList.toggle('img-reveal')
      imgFour.classList.toggle('img-reveal')
    } else if (imgFour.classList.contains('img-reveal')) {
      imgFour.classList.toggle('img-reveal')
      imgThree.classList.toggle('img-reveal')
    } else if (imgThree.classList.contains('img-reveal')) {
      imgThree.classList.toggle('img-reveal')
      imgTwo.classList.toggle('img-reveal')
    } else if (imgTwo.classList.contains('img-reveal')) {
      imgTwo.classList.toggle('img-reveal')
      imgOne.classList.toggle('img-reveal')
    }
  })
  
  return carousel
}