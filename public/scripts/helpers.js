$(document).ready(function() {
  $("#tweet-text").on("keyup", tweetCharacterCounter);
  $("#error").hide();
});

const tweetCharacterCounter = function() {
  const text = $("#tweet-text").val();
  let counter = $(this).parent().find(".counter");
  let letterCounting = 140 - text.length;

  $(counter).html(letterCounting);
  if (!validateTweet(text, counter)) {
    return;
  }

  $(counter).removeClass("red");
  $("#error").html("");
};

const validateTweet = function(text, counter) {
  if (text.length > 140) {
    if (counter) {
      $(counter).addClass("red");
    }

    $("#error").html(
      `<i class="fas fa-exclamation-triangle"></i> Maximum message length exceeded  <i class="fas fa-exclamation-triangle"></i>`
    );
    $("#error").show();
    return false;
  }

  if (text.length < 1) {
    $("#error").html(
      `<i class="fas fa-exclamation-triangle"></i> Minimum lenght of 1 character  <i class="fas fa-exclamation-triangle"></i>`
    );
    $("#error").show();
    return false;
  }

  $("#error").hide();
  return true;
};
