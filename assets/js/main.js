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
const playList = $$('.all-musicplay')
const tracks = $('#tracks')
const icon = $('.allicon')
const playlistLove = $('.box-music-upload.playlist-love')

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
                        image:'./assets/img(2)/rain.jpg',
                        link: 'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX1%2bgoVuHCAb2aG68H8yKYcJQqlmQ3CjPt4jsUcJQr49RYYyIvO3jARxBa8MyMDlZq1rbflR17a41EWM%2fRnlrVnRsk9C5D2oqt1fefEpxrBZoDF8sIDpAAB5V8B0Tj9E8%2fd1gwsLA2%2freXA%3d%3d&s=youtube&id=&h=7986292408678248959'
                    },
                    {
                        name: 'Try Me',
                        singer: 'The Weeknd',
                        path: './assets/list-music/TryMe.mp3.mp3',
                        image:'./assets/img(2)/tryme.jpg',
                        link: 'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX1%2fSw1GV6xGjsMWSWhz40jY4DlUeiKxN2w51vnAeIz9WBX%2f7ShJ8RfxhgLFLpLFpRw9%2f%2fcM0ssSLUYQoOWk0T5jP0pJo00B9ORiAe%2b3qjte%2fEvj9hNAEJ0%2foXjJaC%2fW3wZlhml0G7j5yRV7ODB0kx6xpCjYryWWpgxE%3d&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'Save Your Tears',
                        singer: 'The Weeknd',
                        path: './assets/list-music/saveyourtears.mp3',
                        image:'./assets/img(2)/SaveYourTears.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX1%2frv4%2bLB7xzrrDhnDjjwfe554pRsMIxNhhMl1wdKlGh7KVqwQl0eav5hsnbHzloq2v8ByiXtuGhpVkZkBhUbNg3b1UKj1okFXzGgdBoGMEfeXXSyNoquFLVODpoTAI%2fbVOM302f1fidJIC6PbAoERAmziGmzrbvg%2b4%3d&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'Circles',
                        singer: 'Post Malone',
                        path: './assets/list-music/Circles.mp3.mp3',
                        image:'./assets/img(2)/Circles.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX18fRLuvtP62PsFKTPQl6xvKvMaC94ZITT5d4wAssYwWAhyI9ZB42UsI%2beOP0Bw6nzW5RfgzuPHcIM6MQTKVeOgTohb0LdxyZVaX4YOc1MSZgwxSUSwoXC%2f2R%2fS38uy%2fzZRVp73SYBBGXw%3d%3d&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'Feels',
                        singer: 'Calvin Harris ',
                        path: './assets/list-music/Feels.mp3.mp3',
                        image:'./assets/img(2)/Feels.png',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX18skY4guLvQfdUZYoiVH3SUgtA%2bxcsF60XyK9NxN5IN%2fHAH00qE%2bFY718j0x1HeQDOfphWDcrw8aBCHefdPwWxjjNT0aJyYHOOZ%2bYpnQQMovXNHGGQj1x968EpL%2bM6ZbdsqF9PFQU69HZdCOMyMgQghGIFgcXxrTKI8rh%2bf2YShg%2fDtO5VM9TnPg9cPgO2s53zTqcnRCo2JRg%3d%3d&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'praise the lord',
                        singer: 'A$AP Rocky',
                        path: './assets/list-music/PraiseTheLord.mp3.mp3',
                        image:'./assets/img(2)/praisethelord.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX191boP0779r9cZtezBMnFDCHh0Y5sj2W9Nzqj8Mw5Foca1oNzusaLWt0xw1vRU5wY1ReFdnc8cdEY6OxC8cWdfRc%2f0useG39ONDvsF5IGF5bstKNbq1OvYjzYs8WGUZnFbnABSelxZ%2fo1DCQNFWfsH1fmCElz458N4%2bKIS40O5k4wymARFdfM80&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'The Box',
                        singer: 'Roddy Ricch',
                        path: './assets/list-music/TheBox.mp3.mp3',
                        image:'./assets/img(2)/The Box.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX188d6hCV5r5hrc87p%2bI9YmOn50Jn3FQ85K2N7IkHuxQp5%2fo1%2f40ALiUTH6KCyLpPWOcIAOSO961qOuVD%2fIGEzlH%2bwUozi%2f2AMQiuG7brpZNyAqsFv%2bFrnnXa2Oz%2bM4ucNYeuOqWvgITJzIqqb4%2baSjATQHovjTFvnw%3d&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'Down Below',
                        singer: 'Roddy Ricch',
                        path: './assets/list-music/DownBelow.mp3.mp3',
                        image:'./assets/img(2)/Down Below.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX1%2b4NWHk9QqmnnFOR2aDByjL96nXFiIqWU16H38Kdn1DcBVAG3WxmCglPGm2lUa%2bTiR0LbDNfJqW1jDbE%2fzul6mIvx4SBLHu8YGLDjLv23bGI3OCVUtoDn2RDWBSHzP0twwA8zw498pdvsQF9IhnFyWKAEMXAatTtgjBLV59sc1mVff4iPXyh4lu&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'Blind feat Young Thug',
                        singer: 'DaBaby',
                        path: './assets/list-music/Blind.mp3.mp3',
                        image:'./assets/img(2)/Blind.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX19Q6BipMTRuacM%2fYF5BQUJdWbluAfeGKt1zig8S7IV2mPtWZvaz6BIc9s0OpTnWjQjycihDbXDNjamJ0mYxTjnS8eBwha4EjJnfOvQI%2fb639IoNP2QP2DLKmBiIiidHXqs99Yhp00K4Nizfy%2bXVEOW7Js7H%2fr5ALGs%3d&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'Just The Two Of Us',
                        singer: 'Bill Withers',
                        path: './assets/list-music/Grover.mp3.mp3',
                        image:'./assets/img(2)/Just The Two Of Us.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX1%2b5iR6JFxR1q%2bQ4vZmHcQWnWARwqZL5BDYDlWI2ZbIOiJDHWEsNO43zCujhLhc8caKx7%2fSRYwEFERyadmoen9tR01TrQsjuqFV84CsPkuOngXe7KYtux2Ii84995swxFgBrHzuhnKMV0SHc1bqStses%2fUqQTMFRYotzUuBuCfdJBpngtpxGVJwB&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'Treasure',
                        singer: 'Bruno Mars',
                        path: './assets/list-music/Treasure.mp3.mp3',
                        image:'./assets/img(2)/Treasure.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX1%2fu8pEvhcdzb2ZvPoD6A%2bKLGsecJ74Xj%2flo4f4hvc6x%2f39CwVzRuvuiFviGH1hYIHS1McY3EHaGnOwvKLBTAvWb67%2b9TL7bdYmP7UQiY7ROQCg%2b%2bxQIBf%2fNQzAe0i%2fA95XOU2OrAEowgc51zlCvFwFG6ZIOedVblxI%3d&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: '24K Magic',
                        singer: 'Bruno Mars',
                        path: './assets/list-music/24KMagic.mp3.mp3',
                        image:'./assets/img(2)/24K Magic.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX19ljkrfdq20QzfLNqdLowM13AzMEGbFEKAQ1lanqGS5AFcogzZkinoyT7EXm6Ztk3z4Ejzb75pwe9jenZG2fYZwn%2fKmkZLYPBZHD4XsGpfFWWz6pv1pAnG2PM0ZHRQrxlGIMNBkxCjLD8p2Cy0JP3uzRzpmIlUnkIA%3d&s=youtube&id=&h=7986292408678248983'
                    },
                    {
                        name: 'Levitating',
                        singer: 'Dua Lipa',
                        path: './assets/list-music/Levitating.mp3.mp3',
                        image:'./assets/img(2)/Levitating.jpg',
                        link:'https://x2convert.com/vi/Thankyou?token=U2FsdGVkX18SUQwnGYUxhEUs6NuaOMArtQM7M2C%2fRu0JN98xSPkprulGeM3LpD2vexQ7JjtSI7I%2baw0ZEUAGqhYDyiIo%2bo5%2btjsy6BP%2bMa4siscxq2ZhmQg%2b5J4KQ%2bm9wB6kMhG3K6PEvhI7J%2brVtNefEeRZE1LZFtfbBhyIe0V9SW3mSN%2fUuyvXz8lvz4oT&s=youtube&id=&h=7986292408678248983'
                    },
                    
        ],
        love:[
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
                 <div class="btn-musicplay option">
                     <i class="ti-microphone-alt mic"></i>
                     <i class="fas fa-heart heart" value="like" data-index="${index}" data-songName="${song.name}" data-singer="${song.singer}" data-img="${song.image}" data-path="${song.path}" data-link="${song.link}"></i>
                     <i class="ti-more-alt more" data-index="${index}" data-songName="${song.name}" data-singer="${song.singer}" data-img="${song.image}" data-path="${song.path}" data-link="${song.link}"></i>
                     
                 </div>
             </div>
               `
            })
            playList.forEach(function(list,index){
                list.innerHTML = htmls.join('');
            })
        },
        renderLovesong: function(){

                const htmls = this.love.map((love,index) => {
                    return `
                    <div class="box-musicplay ${index === this.currentIndex ? 'active4': ''}" data-index = "${index}">
                    <!-- Song -->
                    <div class="info-musicplay">
                        <div class="texts-infomusic">
                            <div class="imgmn-music" style="background-image: url('${love.image}')">
                               <div class="hoverplay">
                                   <i class="fas fa-play"></i>
                               </div>
                            </div>
                            <div class="text-musics">
                                <h5 class="song">${love.songName}</h5>
                                <p class="author">${love.singerName}</p>
                            </div>
                        </div>
                        <div class="time-musicplay" id="${index}">
                            <p></p>
                        </div>
                    </div>
                    <div class="btn-musicplay">
                        <i class="ti-microphone-alt mic"></i>
                        <i class="fas fa-heart heart active" value="unlike" data-index="${index}" data-songName="${love.songName}" data-singer="${love.singerName}" data-img="${love.image}" data-path="${love.path}" data-link="${love.link}"></i>
                        <i class="ti-more-alt option" data-index="${index}" data-songName="${love.songName}" data-singer="${love.singerName}" data-img="${love.image}" data-path="${love.path}" data-link="${love.link}"></i>
                        
                    </div>
                </div>
                  `
               })
                playlistLove.innerHTML = htmls.join('');
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
            playList.forEach(function(list){
                list.onclick = function(e) {
                    e.stopPropagation();
                    const songNode = e.target.closest('.box-musicplay:not(.active4)')
                    const optionNode = e.target.closest('.option')   
                    const menuNode = e.target.closest('.ti-more-alt.more');
                    const heartBtn = e.target.closest('.fas.fa-heart.heart')

                    if( songNode || optionNode){
                            if(songNode && !optionNode) {
                                _this.currentIndex = Number(songNode.dataset.index)
                                _this.loadCurrentSong()
                                audio.play()
                                _this.render()
                                _this.loadDurationSong(_this.songs)
                            }
                            if(optionNode) {
                                if(menuNode){
                                    var image = menuNode.dataset.img;
                                    var songName = menuNode.dataset.songname;
                                    var singerName = menuNode.dataset.singer;
                                    var path = menuNode.dataset.path;
                                    var link = menuNode.dataset.link;
                                    var index = menuNode.dataset.index;

                                    document.querySelector('.title-song .song-name a').innerText = songName;
                                    document.querySelector('.title-song .singer-name a').innerText = singerName;
                                    document.querySelector('.option-song-info .thumb-song img').setAttribute('src', image)
                                    if(link == 'undefined') {
                                        document.querySelector('.option-chose-list .option-chose-item').setAttribute('href', '')
                                    }else{
                                        document.querySelector('.option-chose-list .option-chose-item').setAttribute('href', link)
                                    }

                                    document.querySelector('.option-song').style.display = 'block';
                                    e.stopPropagation();
                                    }
                            }
                            if(heartBtn){
                                var image = heartBtn.dataset.img;
                                var songName = heartBtn.dataset.songname;
                                var singerName = heartBtn.dataset.singer;
                                var path = heartBtn.dataset.path;
                                var link = heartBtn.dataset.link;
                                var index = heartBtn.dataset.index;

                                var listArray = {
                                    image,
                                    songName,
                                    singerName,
                                    path,
                                    link
                                };

                                // xử lý like & unlike song 
                                if(heartBtn.getAttribute('value') == 'like'){
                                    heartBtn.classList.add('active');
                                    heartBtn.setAttribute('value','unlike');

                                    app.love.push(listArray);
                                    alert('Bạn đã thêm bài hát vào danh sách yêu thích');
                                    app.renderLovesong();
                                }else{
                                    heartBtn.classList.remove('active');
                                    heartBtn.setAttribute('value','like');

                                    var songUnlike = app.love.filter(function(song){
                                        return song.songName != songName;
                                    })
                                    app.love = songUnlike;
                                    alert('Bạn đã xoá bài hát ra khỏi danh sách yêu thích');
                                    app.renderLovesong();
                                    
                                }

                            }
                    }
                }
                // close option song 
                document.onscroll = function() {
                    document.querySelector('.option-song').style.display = 'none';
                }
                document.addEventListener('click',function(){
                    document.querySelector('.option-song').style.display = 'none';
                })
                document.querySelector('.option-song').addEventListener('click',function(e){
                    e.stopPropagation();
                })
            })
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
                // au.src = songs[i].path;
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
            this.renderLovesong()
            this.loadDurationSong(this.songs)
        }
    }
    app.start()





    // const array = [2, 5, 9];

    // const index = array.indexOf(9);
    // console.log(index)
    // if (index > -1) {
    // array.splice(index, 1);
    // }

    // // array = [2, 9]
    // console.log(array); 