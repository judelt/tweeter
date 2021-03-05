/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();

    const form = $(this);
    const url = form.attr("action");
    const serializedData = form.serialize();
    let text = $("#tweet-text").val();

    // Validate tweet
    if (!validateTweet(text)) {
      return;
    }

    $.ajax({
      method: "POST",
      url: url,
      data: serializedData,
    })
      .then(function () {
        //Tweeter feed is emptied before loading tweets again(preventing dupliction)
        $("#tweets-container").empty();
        loadTweets();

        //Character counter resets once a tweet is submitted
        $(".counter").text(140);

        //Form resets once a tweet is submitted
        document.querySelector("form").reset();
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  loadTweets();
});

//Preventing XSS
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const loadTweets = function () {
  return $.ajax({
    method: "GET",
    url: "/tweets",
  })
    .then(function (response) {
      renderTweets(response);
    })
    .catch(function (err) {
      console.log(err);
    });
};

const renderTweets = function (data) {
  for (const tweet of data) {
    const $tweet = createTweetElement(tweet);
    $("#tweets-container").prepend($tweet);
  }
};

const createTweetElement = function (data) {
  const a = moment.unix(data.created_at / 1000);
  const b = moment();
  const days = b.diff(a, "days");

  let $tweet = `
    <article class="tweet">
      
      <header>
        <div class="user"><img src="${escape(data.user.avatars)}"><span>${
    data.user.name
  }</span></div>
        <p><strong class="account">${escape(data.user.handle)}</strong></p>
      </header>

      <body>
        <p><strong>${escape(data.content.text)}</strong></p>
      </body>

      <footer class="log">
        <p>${escape(days)} days ago </p>
      
        <div class="icons">
          <i class="fab fa-font-awesome-flag fa-xs"></i>
          <i class="fas fa-retweet fa-xs"></i>
          <i class="fas fa-heart fa-xs"></i>
      
        </div>
      </footer>
    </article>
    `;
  return $tweet;
};
