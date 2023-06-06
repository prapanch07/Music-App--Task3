document.addEventListener('DOMContentLoaded', function () {
  var audioPlayer = document.createElement('audio');
  var playlist = document.getElementById('song-list');
  var songTitle = document.getElementById('song-title');
  var playBtn = document.getElementById('play-btn');
  var pauseBtn = document.getElementById('pause-btn');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  var replayBtn = document.getElementById('replay-btn');

  // Add music files to the playlist
  var musicList = [
      { title: 'Enna Sona [A.R Rahman,Arijith Singh]', image: 'OK-Janu.avif', file: 'enna sona.mp3' }, 
      { title: 'Puthiyoru Pathayil[Nazriya Nazim,Sushin Shyam]', image: 'varathan.jpeg', file: 'PuthiyoruPathayil.mp3' },
  ];

  function loadSong(index) {
      var song = musicList[index];
      audioPlayer.src = song.file;
      audioPlayer.play();

      var image = document.createElement('img');
      image.src = song.image;
      image.alt = song.title;
      image.className = 'song-image';

      var titleContainer = document.createElement('div');
      titleContainer.appendChild(document.createTextNode(song.title));

      songTitle.innerHTML = '';
      songTitle.appendChild(image);
      songTitle.appendChild(titleContainer);
  }


  function playSong() {
      audioPlayer.play();
  }

  function pauseSong() {
      audioPlayer.pause();
  }

  function previousSong() {
      currentSongIndex--;
      if (currentSongIndex < 0) {
          currentSongIndex = musicList.length - 1;
      }
      loadSong(currentSongIndex);
  }

  function nextSong() {
      currentSongIndex++;
      if (currentSongIndex >= musicList.length) {
          currentSongIndex = 0;
      }
      loadSong(currentSongIndex);
  }

  function replaySong() {
      audioPlayer.currentTime = 0;
  }


  var currentSongIndex = 0;
  loadSong(currentSongIndex);


  playBtn.addEventListener('click', playSong);


  pauseBtn.addEventListener('click', pauseSong);


  prevBtn.addEventListener('click', previousSong);

  nextBtn.addEventListener('click', nextSong);


  replayBtn.addEventListener('click', replaySong);


  document.getElementById('music-player').appendChild(audioPlayer);
});