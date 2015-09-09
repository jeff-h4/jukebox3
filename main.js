
$(document).ready(function() {

  if (!songQueue) {
    var songQueue     = [];
    var songNameQueue = [];
  };
  // Your code here...
  // Let user enter song
  // On submit event, we will read the input song
  // Parse the song
  // Add List item to the Song queue

  var jukebox = function() {
    if (songQueue.length > 0) {
      var songName = songNameQueue.shift();
      var songStr = songQueue.shift();
      $("#now-playing").html("Playing " + songName);
      console.log("Playing song: " + songStr);
      playSong(parseSong(songStr),500,jukebox);
      $("#song-queue").children().first().remove();
    } else {
      $("#now-playing").html("");
    };

  };

  $("#play-button").on('click',function() {
    console.log("Play Event. Queue size is: " + songQueue.length);
    jukebox();
  });

  $("#song-form").on('submit', function(event) {
    console.log("Submit Event");
    var newSongName = $("input[name='song-name']").eq(0).val().trim();
    var newSong     = $("input[name='notes']").eq(0).val().trim();
    //Clear textbox
    $("input[name='song-name']").eq(0).val("");
    $("input[name='notes']").eq(0).val("");
    console.log("NewSong: " + newSong);
    $("#song-queue").append("<li>" + newSongName + ": " + newSong + "</li>");
    songNameQueue.push(newSongName);
    songQueue.push(newSong); 
    console.log(songQueue);
    event.preventDefault();
  });


});
