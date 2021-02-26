/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const renderTweets = function(data) {
    for (const tweet of data) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
  };


  $("form").on("submit", function(event) {
    event.preventDefault();

    const form = $(this);
    const url = form.attr('action');
    const serializedData = form.serialize();

    $(this).validate({
      rules: {
        text: {
          required: true,
          minlength: 1,
          maxlength: 140,
        }
      },
      messages: {
        text: {
          required: `<i class="fas fa-exclamation-triangle"></i> Minimum lenght of 1 character <i class="fas fa-exclamation-triangle"></i>`,
          minlength: `<i class="fas fa-exclamation-triangle"></i> Minimum lenght of 1 character <i class="fas fa-exclamation-triangle"></i>`,
          maxlength: `<i class="fas fa-exclamation-triangle"></i> Maximum message length exceeded <i class="fas fa-exclamation-triangle"></i>`
        }
      },
    });

    $.ajax({
      method: "POST",
      url: url,
      data: serializedData // serializes the form's elements.
    }).then(function() {
      loadTweets();
      $(".counter").val(140);

    }).catch(function(err) {
      console.log(err);
    });

    document.querySelector("form").reset();
  
  });

  const loadTweets = function() {
    return $.ajax({
      method: "GET",
      url: '/tweets',
    }).then(function(response) {
      renderTweets(response);
    }).catch(function(err) {
      console.log(err);
    });
  };

  loadTweets();

});

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(data) {
  const a = moment.unix(data.created_at / 1000);
  const b = moment();
  const days = b.diff(a, "days"); // =1
  

  let $tweet = `
    <article class="tweet">
      
      <header>
        <div class="user"><img src="${escape(data.user.avatars)}"><span>${data.user.name}</span></div>
        <p><strong class="account">${escape(data.user.handle)}</strong></p>
      </header>

      <footer>
        <p><strong>${escape(data.content.text)}</strong></p>
      </footer>
      <div class="log">
        <p>${escape(days)} days ago </p>
      
        <div>
          <i class="fab fa-font-awesome-flag fa-xs"></i>
          <i class="fas fa-retweet fa-xs"></i>
          <i class="fas fa-heart fa-xs"></i>
      
        </div>
      </div>
    </article>
    `;
  return $tweet;
};
