// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector(".header-container")

function header() {
    //create elements
    const header = document.createElement("div")
    const date = document.createElement("span")
    const title = document.createElement("h1")
    const temp = document.createElement("span")

    //nest them
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

    //add class names
    header.classList.add("header")
    date.classList.add("date")
    temp.classList.add("temp")


    //add context
    date.textContent = "MARCH 28, 2019"
    title.textContent = "Lambda Times"
    temp.textContent = "98F"


    return header
}

headerContainer.appendChild(header());