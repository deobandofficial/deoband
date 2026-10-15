/*
  SONG DATABASE for "Guess the Intro".

  Every entry is {title, artist}. Add as many as you like: covers, other bands, anything.
  - An entry WITH a "src" can be played as a question. It plays the first 3 seconds of that
    audio (or from "start" seconds in, if you set it).
  - An entry WITHOUT a "src" is never played, but its title still shows up as a wrong
    answer on the buttons. That is how you fill the pool cheaply.

  Each game picks 5 random entries that have a "src", then adds 3 random wrong titles from
  this whole list for the 4 answer buttons.

  To add a playable song: put a short clip (5 to 10 seconds is plenty) in games/audio/intro/
  and add a line like:
     {title:"Song name", artist:"Band", src:"audio/intro/song-name.mp3"},
  To cut a clip from a full song with ffmpeg:
     ffmpeg -i full.mp3 -t 8 -c:a libmp3lame -q:a 4 song-name.mp3
*/
window.SONG_POOL=[
  /* ---- playable demo clips (generated tunes so you can test the game; delete these once you add real songs) ---- */
  {title:"Demo Tune 1",artist:"Deo Band Demo",src:"audio/intro/demo1.mp3",demo:true},
  {title:"Demo Tune 2",artist:"Deo Band Demo",src:"audio/intro/demo2.mp3",demo:true},
  {title:"Demo Tune 3",artist:"Deo Band Demo",src:"audio/intro/demo3.mp3",demo:true},
  {title:"Demo Tune 4",artist:"Deo Band Demo",src:"audio/intro/demo4.mp3",demo:true},
  {title:"Demo Tune 5",artist:"Deo Band Demo",src:"audio/intro/demo5.mp3",demo:true},

  /* ---- your band's songs: uncomment and fill in once you add the clips ----
  {title:"Your Song Title",artist:"Deo Band",src:"audio/intro/your-song.mp3"},
  */

  /* ---- general pool (titles only, used as wrong answers until you add a src) ---- */
  {title:"Bohemian Rhapsody",artist:"Queen"},
  {title:"Don't Stop Me Now",artist:"Queen"},
  {title:"Billie Jean",artist:"Michael Jackson"},
  {title:"Thriller",artist:"Michael Jackson"},
  {title:"Smells Like Teen Spirit",artist:"Nirvana"},
  {title:"Come as You Are",artist:"Nirvana"},
  {title:"Hotel California",artist:"Eagles"},
  {title:"Stairway to Heaven",artist:"Led Zeppelin"},
  {title:"Whole Lotta Love",artist:"Led Zeppelin"},
  {title:"Wonderwall",artist:"Oasis"},
  {title:"Don't Look Back in Anger",artist:"Oasis"},
  {title:"Yellow",artist:"Coldplay"},
  {title:"Clocks",artist:"Coldplay"},
  {title:"Viva la Vida",artist:"Coldplay"},
  {title:"Blinding Lights",artist:"The Weeknd"},
  {title:"Rolling in the Deep",artist:"Adele"},
  {title:"Someone Like You",artist:"Adele"},
  {title:"Shape of You",artist:"Ed Sheeran"},
  {title:"Creep",artist:"Radiohead"},
  {title:"In the End",artist:"Linkin Park"},
  {title:"Numb",artist:"Linkin Park"},
  {title:"Basket Case",artist:"Green Day"},
  {title:"Boulevard of Broken Dreams",artist:"Green Day"},
  {title:"Sweet Child o' Mine",artist:"Guns N' Roses"},
  {title:"Back in Black",artist:"AC/DC"},
  {title:"Highway to Hell",artist:"AC/DC"},
  {title:"Enter Sandman",artist:"Metallica"},
  {title:"Another Brick in the Wall",artist:"Pink Floyd"},
  {title:"Comfortably Numb",artist:"Pink Floyd"},
  {title:"Dreams",artist:"Fleetwood Mac"},
  {title:"Africa",artist:"Toto"},
  {title:"Take On Me",artist:"a-ha"},
  {title:"Don't Stop Believin'",artist:"Journey"},
  {title:"Livin' on a Prayer",artist:"Bon Jovi"},
  {title:"Purple Rain",artist:"Prince"},
  {title:"Space Oddity",artist:"David Bowie"},
  {title:"Hey Jude",artist:"The Beatles"},
  {title:"Let It Be",artist:"The Beatles"},
  {title:"Paint It Black",artist:"The Rolling Stones"},
  {title:"With or Without You",artist:"U2"},
  {title:"Californication",artist:"Red Hot Chili Peppers"},
  {title:"Under the Bridge",artist:"Red Hot Chili Peppers"},
  {title:"Everlong",artist:"Foo Fighters"},
  {title:"Do I Wanna Know?",artist:"Arctic Monkeys"},
  {title:"Believer",artist:"Imagine Dragons"},
  {title:"Poker Face",artist:"Lady Gaga"},
  {title:"Die With a Smile",artist:"Lady Gaga & Bruno Mars"},
  {title:"Locked Out of Heaven",artist:"Bruno Mars"},
  {title:"bad guy",artist:"Billie Eilish"},
  {title:"Levitating",artist:"Dua Lipa"},
  {title:"As It Was",artist:"Harry Styles"},
  {title:"Shake It Off",artist:"Taylor Swift"},
  {title:"Umbrella",artist:"Rihanna"},
  {title:"Halo",artist:"Beyoncé"},
  {title:"Get Lucky",artist:"Daft Punk"},
  {title:"Somebody That I Used to Know",artist:"Gotye"},
  {title:"Eye of the Tiger",artist:"Survivor"},
  {title:"I Will Always Love You",artist:"Whitney Houston"},
  {title:"Tamally Maak",artist:"Amr Diab"},
  {title:"Nassam Alayna El Hawa",artist:"Fairuz"},
  {title:"Enta Omri",artist:"Umm Kulthum"},
  {title:"Ghammad Einak",artist:"Cairokee"}
];

/*
  TRACKS for "Rhythm Tap" (optional). The game can also play any audio file chosen on the
  page, so this list is only for songs you want on a leaderboard. Notes are generated
  automatically from the audio, so you don't need to map anything by hand.
  Example:
     {id:"our-song", title:"Our Song", src:"audio/our-song.mp3"}
  Use a short lowercase id with no spaces. Leaderboards are kept per track and per difficulty.
*/
window.RHYTHM_TRACKS=[
  {id:"demo-beat",title:"Demo Beat (generated)",src:"audio/demo-beat.mp3"}
];
