function createPortfolioItem(item) {

    let externalPageIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </svg>`

    // let techStackItems = item.stack
    // // let techStackHTML = techStackItems.map(createTechStackList).join("")
    // console.log(techStackItems)


    return `
        <div class="card col-sm-12 col-md-6">
        <img src=${item.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item.title.toLowerCase()}</h5>
        <p class="card-text">${item.description.toLowerCase()}</p>
        <ul>${item.stack.map(createTechStackList).join("")}</ul>
        <a href=${item.url} class="btn btn-outline-primary shadow-none landing-btn" target="_blank">visit live version</a> ${externalPageIcon}
        </div>
        </div>
        `
    }

function createTechStackList(item) {
    if (item.length > 0){
        return `<li><a href=${item.url} target="_blank">${item.name}</a></li>`
    }
    return null
}

function addPortfolioItem(parent, itemHTML) {
    parent.insertAdjacentHTML("beforeend", itemHTML)
}

