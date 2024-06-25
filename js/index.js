function playAudio() {
  var audio = document.querySelector('.song');
  audio.play().then(function() {
      console.log('Playback started!');
  }).catch(function(error) {
      console.error('Failed to start playback.', error);
  });
}
function pauseAudio() {
  var audio = document.querySelector('.song');
  audio.pause().then(function() {
      console.log('Playback started!');
  }).catch(function(error) {
      console.error('Failed to start playback.', error);
  });
}

(function() {
  function $(id) {
    return document.getElementById(id);
  }
  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });
}());
