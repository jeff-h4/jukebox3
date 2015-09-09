
$(document).ready(function() {

  if (!songQueue) {
    var songQueue = [];
  };
  // Your code here...
  // Let user enter song
  // On submit event, we will read the input song
  // Parse the song
  // Add List item to the Song queue

  var jukebox = function() {
    if (songQueue.length > 0) {
      var songStr = songQueue.shift();
      console.log("Playing song: " + songStr);
      playSong(parseSong(songStr),500,jukebox);
    }
    $("#song-queue").children().first().remove();
  };

  $("#play-button").on('click',function() {
    console.log("Play Event. Queue size is: " + songQueue.length);
    jukebox();
  });

  $("#song-form").on('submit', function(event) {
    console.log("Submit Event");
    var newSong = $("input[name='notes']").eq(0).val().trim();
    //Clear textbox
    $("input[name='notes']").eq(0).val("");
    console.log("NewSong: " + newSong);
    $("#song-queue").append("<li>" + newSong + "</li>");
    songQueue.push(newSong); 
    console.log(songQueue);
    event.preventDefault();
  });


});
