// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log('API data for articles succesfully retrieved:', data)
        const extractArticles = data.data.articles
        extractArticles.bootstrap.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        extractArticles.javascript.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        extractArticles.jquery.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        extractArticles.node.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        extractArticles.technology.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })

        // @@@@@ Nested forEach (something to look at for a later stretch)
        // extractArticles.forEach(topicHeader => {
        //     console.log(topicHeader)
        //     topicHeader.forEach(article => {
        //         console.log(article)
        //         cardsContainer.appendChild(createCard(article))
        //     })
        // })
    })
    .catch(error => {
        console.log('API for articles currently down:', error)
    })

function createCard(dataObj) {
    // Create elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    // Structure elements
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(img)

    // Set attributes
    headline.textContent = dataObj.headline
    img.src = `${dataObj.authorPhoto}`
    authorName.textContent = `By ${dataObj.authorName}`

    // Set classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    return card
}