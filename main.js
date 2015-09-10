
$(document).ready(function() {

  var songQueue     = [];
  // Your code here...
  // Let user enter song
  // On submit event, we will read the input song
  // Parse the song
  // Add List item to the Song queue

  var jukebox = function() {
    if (songQueue.length > 0) {
      var songObj   = songQueue.shift();
      var songName  = songObj.name;
      var songStr   = songObj.song;
      $("#now-playing").html("Playing " + songName);
      console.log("Playing song: " + songStr);
      $("#" + songName).off('mouseenter');
      $("#" + songName).off('mouseleave');
      playSong(parseSong(songStr),500,jukebox);
      
      $("#song-body").children().first().remove();
    } else {
      $("#now-playing").html("");
    };

  };

  $("#play-button").on('click',function() {
    console.log("Play Event. Queue size is: " + songQueue.length);
    jukebox();
  });

  $("#song-form").on('submit', function(event) {
    var newSongName = $("input[name='song-name']").eq(0).val().trim();
    var newSong     = $("input[name='notes']").eq(0).val().trim();
    //Clear textbox
    $("input[name='song-name']").eq(0).val("");
    $("input[name='notes']").eq(0).val("");

    console.log("NewSong: " + newSong);
    //$("#song-queue").append("<li>" + newSongName + ": " + newSong + "</li>");
    var nameTag = "<td id='" + newSongName + "'>" + newSongName + "</td>";
    var songTag = "<td id='" + newSongName + "-song' hidden>" + newSong + "</td>";
    $("#song-body").append("<tr>" + nameTag + songTag + "</tr>");
    songQueue.push({name: newSongName, song: newSong});
    console.log(songQueue);
    //Add a handler for this new song.
    $("#" + newSongName).on('mouseenter',function(event) {
      $("#" + newSongName + "-song").attr("hidden",false);
    });
    $("#" + newSongName).on('mouseleave',function(event) {
      $("#" + newSongName + "-song").attr("hidden",true);
    });
    event.preventDefault();
  });

  $("#songQueue").on('mouseenter',function(event){
    for (var i=0; i<songQueue.length; i++) {
    };
    
  });

});
