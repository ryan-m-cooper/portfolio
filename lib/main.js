// Create Portfolio
const interactivePortfolioContainer = document.getElementById("interactive-portfolio-container")
const cartographyPortfolioContainer = document.getElementById("cartography-portfolio-container")
const dataPortfolioContainer = document.getElementById("data-portfolio-container")

fetch("./lib/portfolio.json")
    .then(response => response.json())
    .then(responseJSON => {
        // Process Interactive Items
        const interactiveItems = responseJSON["interactive"]
        setPortfolioSection(interactiveItems, interactivePortfolioContainer)

        // Process cartography
        const cartographyItems = responseJSON["cartography"]
        setPortfolioSection(cartographyItems, cartographyPortfolioContainer)

        // Process data analysis and vix 
        const dataItems = responseJSON["data"]
        setPortfolioSection(dataItems, dataPortfolioContainer)
    })

function setPortfolioSection(items, el) {
    // Create HTML list items for tech stack
    const itemsListHTML = items.map(createTechStackList).join("")
    items.stackHTML = itemsListHTML

    // Generate HTML for each portfolio item
    itemsPortfolioHTML = items.map(createPortfolioItem)

    // Insert the portfolio items into the specified element
    itemsPortfolioHTML.forEach(item => el.insertAdjacentHTML("beforeend", item))

}


function createTechStackList(item) {
    let stackListHTML = ""
    if (item.stack) {
        item.stack.forEach(stackItem => {
            stackListHTML+=`<li><a href=${stackItem.url} target="_blank">${stackItem.name.toLowerCase()}</a></li>`
        })
        item.stackHTML = stackListHTML
        return stackListHTML
    }
    return "No stack specified"
}

function createPortfolioItem(item) {

    let externalPageIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </svg>`


    return `
        <div class="card col-sm-12 col-md-6">
        <img src=${item.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${item.title.toLowerCase()}</h4>
        <p class="card-text">${item.description.toLowerCase()}</p>
        <h5 class="stack-list-header">stack:</h5>
        <ul>${item.stackHTML}</ul>
        <a href=${item.url} class="btn btn-outline-primary shadow-none portfolio-link-btn" target="_blank">visit live version <i class="bi bi-box-arrow-up-right"></i></a> 
        </div>
        </div>
        `
    }
