// Select sites
const index = get('.index')
const bookmarks = get('.bookmarks')
const create = get('.create')
const profile = get('.profile')

// Select Nav-Items
const navIndex = get('.nav__index')
const navBookmarks = get('.nav__bookmarks')
const navCreate = get('.nav__create')
const navProfile = get('.nav__profile')

// Answer Toggle
const answerButton = get('.card__button')
const answerText = get('.card__answer')
answerButton.addEventListener('click', () => {
  answerText.classList.toggle('blurred')
})
//bookmark toggle
const bookmark = get('.card__bookmark')
bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('card__bookmark--active')
})

// Darkmode
const body = get('body')
const header = get('header')
const svg = get('svg')
const darkmodeSwitch = get('.button__darkmode')
darkmodeSwitch.addEventListener('click', () => {
  body.classList.toggle('darkmode')
  header.classList.toggle('darkmode')
  svg.classList.toggle('svg__darkmode')
})
// Nav Event Listeners
navIndex.addEventListener('click', () => {
  nav(index)
})
navBookmarks.addEventListener('click', () => {
  nav(bookmarks)
})
navCreate.addEventListener('click', () => {
  nav(create)
})
navProfile.addEventListener('click', () => {
  nav(profile)
})

// Show/Hide pages
function nav(newSite) {
  index.classList.add('hidden')
  bookmarks.classList.add('hidden')
  create.classList.add('hidden')
  profile.classList.add('hidden')
  newSite.classList.remove('hidden')
}
// Select Items shortend
function get(selector) {
  return document.querySelector(selector)
}
