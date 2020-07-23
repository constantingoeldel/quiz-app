"use strict";

// Select sites
var index = get('.index');
var bookmarks = get('.bookmarks');
var create = get('.create');
var profile = get('.profile'); // Select Nav-Items

var navIndex = get('.nav__index');
var navBookmarks = get('.nav__bookmarks');
var navCreate = get('.nav__create');
var navProfile = get('.nav__profile'); // Answer Toggle

var answerButton = get('.card__button');
var answerText = get('.card__answer');
answerButton.addEventListener('click', function () {
  answerText.classList.toggle('blurred');
}); //bookmark toggle

var bookmark = get('.card__bookmark');
bookmark.addEventListener('click', function () {
  bookmark.classList.toggle('card__bookmark--active');
}); // Darkmode

var body = get('body');
var header = get('header');
var svg = get('svg');
var darkmodeSwitch = get('.button__darkmode');
darkmodeSwitch.addEventListener('click', function () {
  body.classList.toggle('darkmode');
  header.classList.toggle('darkmode');
  svg.classList.toggle('svg__darkmode');
}); // Nav Event Listeners

navIndex.addEventListener('click', function () {
  nav(index);
});
navBookmarks.addEventListener('click', function () {
  nav(bookmarks);
});
navCreate.addEventListener('click', function () {
  nav(create);
});
navProfile.addEventListener('click', function () {
  nav(profile);
}); // Show/Hide pages

function nav(newSite) {
  index.classList.add('hidden');
  bookmarks.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
  newSite.classList.remove('hidden');
} // Select Items shortend


function get(selector) {
  return document.querySelector(selector);
}