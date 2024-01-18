class Blog {
  constructor(title, detail) {
    // Progression 1: Add 2 methods - addTitle() and addDescription()
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute("id", "blog-title");
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription() {
    let description_card = document.createElement('p');
    description_card.setAttribute('id', 'blog-description');
    description_card.innerHTML = this.detail;
    document.getElementById('card-text').appendChild(description_card);
  }
}

// Progression 2: Setup an event listener - add two functions
// 1. `helperAddPost()`
function helperAddPost() {
  document.getElementById('popupContact').style.display = "block";
}

// 2. `helperPost()`
function helperPost() {
  document.getElementById('popupContact').style.display = "block";
  let userTitle = document.getElementById('title').value;
  let userContent = document.getElementById('detail').value;

  let userData = new Blog(userTitle, userContent);
  userData.addTitle();
  userData.addDescription();
}
