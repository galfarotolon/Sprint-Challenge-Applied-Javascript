// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log(response.data)


        const data = response.data.articles

        const newArr = Object.keys(data)

        console.log(data)

        newArr.forEach(item => {
            data[item].forEach(newItem => {
                const articleMaker = getArticles(newItem)

                cardsContainer.appendChild(articleMaker)

            })

        })
    })

const cardsContainer = document.querySelector(".cards-container")

function getArticles(newItem) {

    const card = document.createElement("div")
    const articleHeadline = document.createElement("div")
    const author = document.createElement("div")
    const imgContainer = document.createElement("div")
    const img = document.createElement("img")
    const authorName = document.createElement("span")

    card.appendChild(articleHeadline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    imgContainer.appendChild(authorName)

    card.classList.add("card")
    articleHeadline.classList.add("headline")
    author.classList.add("author")
    imgContainer.classList.add("img-container")

    articleHeadline.textContent = newItem.headline
    img.src = newItem.authorPhoto
    authorName.textContent = `By: ${newItem.authorName}`




    return card
}