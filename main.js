"use strict";

// Select sites
var index = get(".index");
var bookmarks = get(".bookmarks");
var create = get(".create");
var profile = get(".profile"); // Select Nav-Items

var navIndex = get(".nav__index");
var navBookmarks = get(".nav__bookmarks");
var navCreate = get(".nav__create");
var navProfile = get(".nav__profile"); // Nav Event Listeners

navIndex.addEventListener("click", function () {
  nav(index);
});
navBookmarks.addEventListener("click", function () {
  nav(bookmarks);
});
navCreate.addEventListener("click", function () {
  nav(create);
});
navProfile.addEventListener("click", function () {
  nav(profile);
}); // Show/Hide pages

function nav(newSite) {
  index.classList.add("hidden");
  bookmarks.classList.add("hidden");
  create.classList.add("hidden");
  profile.classList.add("hidden");
  newSite.classList.remove("hidden");
} // Select Items shortend


function get(selector) {
  return document.querySelector(selector);
}