$(document).ready(function() {
  $("#tweet-text").on('keyup', tweetCharacterCounter);

});

const tweetCharacterCounter = function() {
  let tweetLength = $("#tweet-text").val().length;
  let counter = $(this).parent().find(".counter");
  let letterCounting = 140 - tweetLength;

  $(counter).html(letterCounting);

  if (letterCounting  < 0) {
    $(counter).addClass("red");
  } else {
    $(counter).removeClass("red");
  }
};
