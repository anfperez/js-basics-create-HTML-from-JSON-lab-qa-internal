document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  updateHTMLContent('Titanic')
  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  titanicButton.addEventListener('click', (event) => {
    //do something here
    updateHTMLContent('Titanic')
  })
  terminatorButton.addEventListener('click', (event) => {
    // do something
    updateHTMLContent('Terminator 2')
  })
});

function updateHTMLContent(movieName) {
  let title = document.getElementById('title')
  let director = document.getElementById('director')
  let genre = document.getElementById('genre')
  let filmRating = document.getElementById('filmRating')
  let poster = document.getElementById('poster')
  let description = document.getElementById('description')
  let audienceScore = document.getElementById('audienceScore')
  let currentMovie = movies[movieName]
  let cast = document.getElementById('cast')
  let reviews = document.getElementById('reviews')
  
  title.innerHTML = currentMovie.title
  director.innerHTML = currentMovie.director
  genre.innerHTML = currentMovie.genre
  filmRating.innerHTML = currentMovie.filmRating
  poster.setAttribute('src', currentMovie.poster)
  description.innerHTML = currentMovie.description
  audienceScore.innerHTML = currentMovie.audienceScore
  let castInnerHTML = ""
  let reviewInnerHTML = ""
  
  for (let castMember of currentMovie.cast) {
    let role = castMember.role
    let actor = castMember.actor
    castInnerHTML += ("<li>" + role + ": " + actor + "</li>")
  }
  castInnerHTML += ""
  cast.innerHTML = castInnerHTML
  for (let review of currentMovie.reviews) {
    let userName = review.username
    let content = review.content
    reviewInnerHTML += ("<p>" + userName + ": " + content + "</p>")
  }
  reviewInnerHTML += ""
  reviews.innerHTML = reviewInnerHTML
}
/*
    let json = movies[movie]
    document.getElementById('title').innerHTML = json.title
    document.getElementById('director').innerHTML = json.director
    document.getElementById('genre').innerHTML = json.genre
    document.getElementById('filmRating').innerHTML = json.filmRating
    document.getElementById('poster').src=json.poster
    document.getElementById('description').innerHTML = json.description
    document.getElementById('audienceScore').innerHTML = json.audienceScore
    document.getElementById('cast').innerHTML = ""
    document.getElementById('reviews').innerHTML = ""
    json.cast.forEach(star => {
      let div = document.createElement('div')
      div.innerHTML = `<span>${star.actor}</span><span>${star.role}</span>`
      document.getElementById('cast').appendChild(div)
    })
    json.reviews.forEach(review => {
      let div = document.createElement('div')
      div.innerHTML = `<div>${review.content}</div><div>-${review.username}</div>`
      document.getElementById('reviews').appendChild(div)
    })
}

function handleButton(event) {
    handleJSON(event.target.id)
}


window.onload = () => {

  handleJSON("Titanic")

  let buttons = document.getElementsByTagName('button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButton)
  }
  */
};