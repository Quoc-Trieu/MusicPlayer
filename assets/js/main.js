const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'MUSIC_PLAYER'

const player = $('.main-bar')
const tabNav = $$('.nav-item');
const tabLists = $$('.tablist');
const tabActive2 = $('.nav-item.active2');
const heading = $('.music-textname h5')
const sub = $('.music-textname p')
const cdThumb = $('.music-img')
const audio = $('#audio')
const volumBtn = $('.volum')
const volumArea =$('.volumbox')
const volumArea2 =$('.volumbox.mute')
const volumUp = $('.volumbox .fa-volume-up')
const volumMute = $('.volumbox.mute .fa-volume-mute')
const playBtn = $('.play-pause')
const progress = $('.progress-bar')
const progressArea = $('.progress-area')
const nextBtn = $('.music-icon .ti-control-skip-forward')
const prevBtn = $('.music-icon .ti-control-skip-backward')
const randomBtn = $('.music-icon .ti-control-shuffle')
const loopBtn = $('.music-icon .ti-loop')
const playList = $('.all-musicplay')
const tracks = $('#tracks')
const icon = $('.allicon')

tabNav.forEach((tab,index) => {
    const tabList = tabLists[index]
    tab.onclick = function() {
        $('.nav-item.active2').classList.remove('active2')
        $('.tablist.active2').classList.remove('active2')

        this.classList.add('active2');
        tabList.classList.add('active2');
    }
});

    const app = 
    {
        isLoop: false,
        isPlaying: false,
        isRandom: false,
        config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
        currentIndex: 0,
        setConfig: function(key,value) {
            this.config[key] = value;
            localStorage.setItem(PLAYER_STORAGE_KEY,JSON.stringify(this.config))
        },
        songs: 
        [
                    {
                        name: 'Rain',
                        singer: 'Lo-fi',
                        path: './assets/list-music/rain.mp3',
                        image:'./assets/img(2)/rain.jpg'
                    },
                    {
                        name: 'Try Me',
                        singer: 'The Weeknd',
                        path: './assets/list-music/TryMe.mp3.mp3',
                        image:'./assets/img(2)/tryme.jpg'
                    },
                    {
                        name: 'Save Your Tears',
                        singer: 'The Weeknd',
                        path: './assets/list-music/saveyourtears.mp3',
                        image:'./assets/img(2)/SaveYourTears.jpg'
                    },
                    {
                        name: 'Circles',
                        singer: 'Post Malone',
                        path: './assets/list-music/Circles.mp3.mp3',
                        image:'./assets/img(2)/Circles.jpg'
                    },
                    {
                        name: 'Feels',
                        singer: 'Calvin Harris ',
                        path: './assets/list-music/Feels.mp3.mp3',
                        image:'./assets/img(2)/Feels.png'
                    },
                    {
                        name: 'praise the lord',
                        singer: 'A$AP Rocky',
                        path: './assets/list-music/PraiseTheLord.mp3.mp3',
                        image:'./assets/img(2)/praisethelord.jpg'
                    },
                    {
                        name: 'The Box',
                        singer: 'Roddy Ricch',
                        path: './assets/list-music/TheBox.mp3.mp3',
                        image:'./assets/img(2)/The Box.jpg'
                    },
                    {
                        name: 'Down Below',
                        singer: 'Roddy Ricch',
                        path: './assets/list-music/DownBelow.mp3.mp3',
                        image:'./assets/img(2)/Down Below.jpg'
                    },
                    {
                        name: 'Blind feat Young Thug',
                        singer: 'DaBaby',
                        path: './assets/list-music/Blind.mp3.mp3',
                        image:'./assets/img(2)/Blind.jpg'
                    },
                    {
                        name: 'Just The Two Of Us',
                        singer: 'Bill Withers',
                        path: './assets/list-music/Grover.mp3.mp3',
                        image:'./assets/img(2)/Just The Two Of Us.jpg'
                    },
                    {
                        name: 'Treasure',
                        singer: 'Bruno Mars',
                        path: './assets/list-music/Treasure.mp3.mp3',
                        image:'./assets/img(2)/Treasure.jpg'
                    },
                    {
                        name: '24K Magic',
                        singer: 'Bruno Mars',
                        path: './assets/list-music/24KMagic.mp3.mp3',
                        image:'./assets/img(2)/24K Magic.jpg'
                    },
                    {
                        name: 'Levitating',
                        singer: 'Dua Lipa',
                        path: './assets/list-music/Levitating.mp3.mp3',
                        image:'./assets/img(2)/Levitating.jpg'
                    },
                    
        ],
        render: function() {
            
            const htmls = this.songs.map((song,index) => {
                 return `
                 <div class="box-musicplay ${index === this.currentIndex ? 'active4': ''}" data-index = "${index}">
                 <!-- Song -->
                 <div class="info-musicplay">
                     <div class="texts-infomusic">
                         <div class="imgmn-music" style="background-image: url('${song.image}')">
                            <div class="hoverplay">
                                <i class="fas fa-play"></i>
                            </div>
                         </div>
                         <div class="text-musics">
                             <h5 class="song">${song.name}</h5>
                             <p class="author">${song.singer}</p>
                         </div>
                     </div>
                     <div class="time-musicplay" id="${index}">
                         <p></p>
                     </div>
                 </div>
                 <div class="btn-musicplay">
                     <i class="ti-microphone-alt"></i>
                     <i class="ti-heart"></i>
                     <i class="ti-more-alt"></i>
                 </div>
             </div>
               `
            })
            tracks.innerHTML = htmls.join('')
            playList.innerHTML = htmls.join('')
        },
        defineProperties: function() {
            Object.defineProperty(this, 'currentSong', {
                get: function() {
                    return this.songs[this.currentIndex]
                }
            })
        },
        handleEvents: function() {
            const _this = this
            // xử lí khi play 
            playBtn.onclick = function() {
                if(_this.isPlaying) {
                    audio.pause()
                }else {
                    audio.play()
                }
            }
 
            // xử lý cd quay 
            const cdThumbAnimate = cdThumb.animate([
                {transform: 'rotate(360deg)'}
            ], {
                duration:10000,
                iterations : Infinity
            })
            cdThumbAnimate.pause()
            // Playing 
            audio.onplay = function() {
                _this.isPlaying = true
                player.classList.add("playing")
                icon.classList.add("active5")
                cdThumbAnimate.play()
            }
            // Pause
            audio.onpause = function() {
                _this.isPlaying = false
                player.classList.remove("playing")
                icon.classList.remove("active5")
                cdThumbAnimate.pause()
            }

            // Vomlum
            volumBtn.onchange = function(e) {
                let currentValum = e.target.value
                audio.volume = currentValum / 100
                if(currentValum == 0) {
                    volumArea.classList.add('mute')
                }else {
                    volumArea.classList.remove('mute')
                }
            }
            volumUp.onclick = function() {
                let currentValum = volumBtn.value
                currentValum = 0
                audio.volume = currentValum
                volumArea.classList.add('mute')
            }
            
            
            // tiến độ bài hát 
            audio.addEventListener("timeupdate",(e) => {
                const currentTime = e.target.currentTime
                const duration = e.target.duration
                let progressWidth = (currentTime / duration) * 100
                progress.style.width = `${progressWidth}%`

                let musicCurrentTime = $(".current"),
                musicDuartion = $(".duration");
                audio.addEventListener("loadeddata", ()=>{
                    // update song total duration
                    let mainAdDuration = audio.duration;
                    let totalMin = Math.floor(mainAdDuration / 60);
                    let totalSec = Math.floor(mainAdDuration % 60);
                    if(totalSec < 10){ //if sec is less than 10 then add 0 before it
                    totalSec = `0${totalSec}`;
                    }
                    musicDuartion.innerText = `${totalMin}:${totalSec}`;
                });
                // update playing current song
                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if(currentSec < 10){ //if sec is less than 10 then add 0 before it
                currentSec = `0${currentSec}`;
                }
                musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
            })
            
            // xử lí click tua 
            progressArea.addEventListener("click",(e) => {
                let progressWidthval = progressArea.clientWidth
                let clickedOffset = e.offsetX
                let songDuration = audio.duration

                audio.currentTime = (clickedOffset / progressWidthval) * songDuration
            })
            //khi next song 
            nextBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSong()
                    audio.play()
                }
                else {
                    _this.nextSong()
                    audio.play()
                    _this.render()
                    _this.loadDurationSong(_this.songs)
                    _this.scrollToActiveSong()
                }   
            }

            //khi Prev song 
            prevBtn.onclick = function() {
                    if(_this.isRandom) {
                        _this.playRandomSong()
                        audio.play()
                    }
                    else {
                        _this.prevSong()
                        audio.play()
                        _this.render()
                        _this.loadDurationSong(_this.songs)
                        _this.scrollToActiveSong()
                    }   
            }
            //khi random
             randomBtn.onclick = function(e) {
                 _this.isRandom = !_this.isRandom
                 _this.setConfig('isRandom',_this.isRandom)
                 randomBtn.classList.toggle('active3', _this.isRandom)
             }
            
            // Tự động Next khi kết thúc bài hát
            audio.onended = function() {
                if(_this.isLoop){
                    setTimeout(function () {
                        audio.play()
                    },1000)
                }
                else{
                    setTimeout(function() {
                        nextBtn.click()
                    },1000)
                }
            }

            // Lắng nghe click vào playlist
            playList.onclick = function(e) {
                const songNode = e.target.closest('.box-musicplay:not(.active4)')
                const optionNode = e.target.closest('.btn-musicplay')
                if( songNode || optionNode){
                        if(songNode) {
                            _this.currentIndex = Number(songNode.dataset.index)
                            _this.loadCurrentSong()
                            audio.play()
                            _this.render()
                            _this.loadDurationSong(_this.songs)
                        }
                        if(optionNode) {

                        }
                }
            }

            // xử lí loop song
            loopBtn.onclick = function(e) {
                _this.isLoop = !_this.isLoop
                _this.setConfig('isLoop',_this.isLoop)
                loopBtn.classList.toggle('active3',_this.isLoop)
            }
        },
        loadconfig: function() {
            this.isRandom = this.config.isRandom
            this.isLoop = this.config.isLoop
            loopBtn.classList.toggle('active3',this.isLoop)
            randomBtn.classList.toggle('active3', this.isRandom)
        },

        scrollToActiveSong: function() {
            setTimeout(() => {
                $('.box-musicplay.active4').scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                })
            },500)
        },
        loadCurrentSong: function() {
            heading.textContent = this.currentSong.name
            sub.textContent = this.currentSong.singer
            cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
            audio.src = this.currentSong.path
        },
        // Time duration song 
        loadDurationSong: function(songs) {
            let listAu = document.getElementById('listAudio')
            let timeMusic =document.getElementsByClassName("time-musicplay");
            for(let i =0 ; i < timeMusic.length;i++) {
                let au = document.createElement('audio')
                au.src = songs[i].path;
                au.setAttribute("id",`au${i}`)
                listAu.appendChild(au);
                let timer = document.getElementById(`au${i}`)
                timer.addEventListener("loadeddata", ()=>{
                    let mainAdDuration = timer.duration;
                    let totalMin = Math.floor(mainAdDuration / 60);
                    let totalSec = Math.floor(mainAdDuration % 60);
                    if(totalSec < 10){ 
                    totalSec = `0${totalSec}`;
                    }
                    timeMusic[i].innerText = `0${totalMin}:${totalSec}`;
                });
            }
            listAu.innerHTML = ""
        },
        nextSong: function() {
            this.currentIndex++
            if(this.currentIndex >= this.songs.length ){
                this.currentIndex = 0
            }
            this.loadCurrentSong()
        },
        prevSong: function() {
            this.currentIndex--
            if(this.currentIndex <= 0  ){
                this.currentIndex = this.songs.length - 1 
            }
            this.loadCurrentSong()
        },
        playRandomSong: function() {
            let newIndex
            do {
                newIndex = Math.floor(Math.random() * this.songs.length)
            } while (newIndex === this.currentIndex)

            this.currentIndex = newIndex
            this.loadCurrentSong()
            this.render()
            this.loadDurationSong(this.songs)
            this.scrollToActiveSong()
        },
        start: function() {
            // gán cấu hình từ config vào ứng dụng
            this.loadconfig()

            // định nghĩa thuộc tính object
            this.defineProperties()

            // Lắng nghe xử lí sự kiện 
            this.handleEvents()
            
            // tải thông tin bài hát đầu tiên vao UI
            this.loadCurrentSong()
            
            // render playlist
            this.render()
            this.loadDurationSong(this.songs)
        }
    }
    app.start()

            
