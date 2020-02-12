'use strict';
// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:

// You must use a CDN-hosted version of jQuery
// Put your application code in a file called index.js and link to it in index.html
// Be sure to put both script elements at the bottom of the <body> element.
// Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closes

function main() {
  deleteItem();
  addItem();
  checkItem();
}
//adds new item matching text in field to shopping list
function addItem() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let input = $('#shopping-list-entry').val();
    console.log(input);
    $('.shopping-list').append( `<li>
  <span class="shopping-item">`+ input + `</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>` );

  });
}
//strikes through corresponding list item
function checkItem() {
  $(document).on('click','.shopping-item-toggle', (function(event) {
    $(this).closest('li', '.shopping-item').toggleClass('shopping-item__checked');
  }));
} 

//deletes corresponding list item
function deleteItem() {
  $(document).on('click', '.shopping-item-delete', (function() {
    $(this).closest('li').remove();
  }));
}

$(main);