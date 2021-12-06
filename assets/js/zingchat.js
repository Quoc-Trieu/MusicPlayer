
const zingchatlistTop10 = $('.zingchat-tab-list__top10');
const zingchatlistTop100 = $('.zingchat-tab-list__top100');
const topBtn = $$('.top100_btn button');
const top100Btn = $('.top100_btn button:first-child');
const top10Btn = $('.top100_btn button:last-child');

const App = {
    zingchartList: [
        {
            numberTop: 1,
            numberTopColor:"number-top1",
            image: "./assets/img(2)/zingchart/1.jpg",
            songName: "Là ai từ bỏ là ai vô tình",
            singer1: "Hương ly",
            comma: ",",
            singer2: "Jombie",
            albumInfo: "Là Ai Từ Bỏ, Là Ai Vô Tình (Single)",
            songDuration: "03:37"
        },
        {
            numberTop: 2,
            numberTopColor:"number-top2",
            image: "./assets/img(2)/zingchart/2.jpg",
            songName: "Thay Lòng",
            singer1: "DIMZ",
            comma: ",",
            singer2: "TVk",
            albumInfo: "Thay Lòng (Single)",
            songDuration: "04:36"
        },
        {
            numberTop: 3,
            numberTopColor:"number-top3",
            image: "./assets/img(2)/zingchart/3.jpg",
            songName: "Yêu Là Cưới",
            singer1: "Phát Hồ",
            comma: ",",
            singer2: "X2X",
            albumInfo: "Yêu Là Cưới (Single)",
            songDuration: "02:59"
        },
        {
            numberTop: 4,
            image: "./assets/img(2)/zingchart/4.jpg",
            songName: "Sông Có Khúc Người Có Lúc",
            singer1: "Mr. Siro",
            comma: "",
            singer2: "",
            albumInfo: "Sông Có Khúc Người Có Lúc (Single)",
            songDuration: "04:43"
        },
        {
            numberTop: 5,
            image: "./assets/img(2)/zingchart/5.jpg",
            songName: "Cưa Là Đổ",
            singer1: "Phát Hồ",
            comma: ",",
            singer2: "X2X",
            albumInfo: "Cưa Là Đổ (Single)",
            songDuration: "03:31"
        },
        {
            numberTop: 6,
            image: "./assets/img(2)/zingchart/6.jpg",
            songName: "Đông Phai Mờ Dáng Ai",
            singer1: "DatKaa",
            comma: ",",
            singer2: "QT Beatz",
            albumInfo: "Đông Phai Mờ Dáng Ai (Single)",
            songDuration: "04:40"
        },
        {
            numberTop: 7,
            image: "./assets/img(2)/zingchart/7.jpg",
            songName: "Kiếp Này Em Gả Cho Anh",
            singer1: "Thái Học",
            comma: "",
            singer2: "",
            albumInfo: "Kiếp Này Em Gả Cho Anh (Single)",
            songDuration: "05:20"
        },
        {
            numberTop: 8,
            image: "./assets/img(2)/zingchart/8.jpg",
            songName: "Cưới Luôn Được Không?",
            singer1: "YuniBoo",
            comma: ",",
            singer2: "Goctoi Mixer",
            albumInfo: "Cưới Luôn Được Không? (Single)",
            songDuration: "04:02"
        },
        {
            numberTop: 9,
            image: "./assets/img(2)/zingchart/9.jpg",
            songName: "Ai Chung Tình Được Mãi",
            singer1: "Đinh Tùng Huy",
            comma: ",",
            singer2: "ACV",
            albumInfo: "Ai Chung Tình Được Mãi (Single)",
            songDuration: "05:35"
        },
        {
            numberTop: 10,
            image: "./assets/img(2)/zingchart/10.jpg",
            songName: "Đọc Đúng Sách, Yêu Đúng Cách",
            singer1: "G5R Squad",
            comma: ",",
            singer2: "Anh Rồng",
            albumInfo: "Đọc Đúng Sách, Yêu Đúng Cách (Single)",
            songDuration: "04:31"
        }
    ],
    top100: [
        {
            numberTop: 11,
            image: "./assets/img(2)/zingchart/1.jpg",
            songName: "Là ai từ bỏ là ai vô tình",
            singer1: "Hương ly",
            comma: ",",
            singer2: "Jombie",
            albumInfo: "Là Ai Từ Bỏ, Là Ai Vô Tình (Single)",
            songDuration: "03:37"
        },
        {
            numberTop: 12,
            image: "./assets/img(2)/zingchart/2.jpg",
            songName: "Thay Lòng",
            singer1: "DIMZ",
            comma: ",",
            singer2: "TVk",
            albumInfo: "Thay Lòng (Single)",
            songDuration: "04:36"
        },
        {
            numberTop: 13,
            image: "./assets/img(2)/zingchart/3.jpg",
            songName: "Yêu Là Cưới",
            singer1: "Phát Hồ",
            comma: ",",
            singer2: "X2X",
            albumInfo: "Yêu Là Cưới (Single)",
            songDuration: "02:59"
        },
        {
            numberTop: 14,
            image: "./assets/img(2)/zingchart/4.jpg",
            songName: "Sông Có Khúc Người Có Lúc",
            singer1: "Mr. Siro",
            comma: "",
            singer2: "",
            albumInfo: "Sông Có Khúc Người Có Lúc (Single)",
            songDuration: "04:43"
        },
        {
            numberTop: 15,
            image: "./assets/img(2)/zingchart/5.jpg",
            songName: "Cưa Là Đổ",
            singer1: "Phát Hồ",
            comma: ",",
            singer2: "X2X",
            albumInfo: "Cưa Là Đổ (Single)",
            songDuration: "03:31"
        },
        {
            numberTop: 16,
            image: "./assets/img(2)/zingchart/6.jpg",
            songName: "Đông Phai Mờ Dáng Ai",
            singer1: "DatKaa",
            comma: ",",
            singer2: "QT Beatz",
            albumInfo: "Đông Phai Mờ Dáng Ai (Single)",
            songDuration: "04:40"
        },
        {
            numberTop: 17,
            image: "./assets/img(2)/zingchart/7.jpg",
            songName: "Kiếp Này Em Gả Cho Anh",
            singer1: "Thái Học",
            comma: "",
            singer2: "",
            albumInfo: "Kiếp Này Em Gả Cho Anh (Single)",
            songDuration: "05:20"
        },
        {
            numberTop: 18,
            image: "./assets/img(2)/zingchart/8.jpg",
            songName: "Cưới Luôn Được Không?",
            singer1: "YuniBoo",
            comma: ",",
            singer2: "Goctoi Mixer",
            albumInfo: "Cưới Luôn Được Không? (Single)",
            songDuration: "04:02"
        },
        {
            numberTop: 19,
            image: "./assets/img(2)/zingchart/9.jpg",
            songName: "Ai Chung Tình Được Mãi",
            singer1: "Đinh Tùng Huy",
            comma: ",",
            singer2: "ACV",
            albumInfo: "Ai Chung Tình Được Mãi (Single)",
            songDuration: "05:35"
        },
        {
            numberTop: 20,
            image: "./assets/img(2)/zingchart/10.jpg",
            songName: "Đọc Đúng Sách, Yêu Đúng Cách",
            singer1: "G5R Squad",
            comma: ",",
            singer2: "Anh Rồng",
            albumInfo: "Đọc Đúng Sách, Yêu Đúng Cách (Single)",
            songDuration: "04:31"
        },
        {
            numberTop: 21,
            image: "./assets/img(2)/zingchart/1.jpg",
            songName: "Là ai từ bỏ là ai vô tình",
            singer1: "Hương ly",
            comma: ",",
            singer2: "Jombie",
            albumInfo: "Là Ai Từ Bỏ, Là Ai Vô Tình (Single)",
            songDuration: "03:37"
        },
        {
            numberTop: 22,
            image: "./assets/img(2)/zingchart/2.jpg",
            songName: "Thay Lòng",
            singer1: "DIMZ",
            comma: ",",
            singer2: "TVk",
            albumInfo: "Thay Lòng (Single)",
            songDuration: "04:36"
        },
        {
            numberTop: 23,
            image: "./assets/img(2)/zingchart/3.jpg",
            songName: "Yêu Là Cưới",
            singer1: "Phát Hồ",
            comma: ",",
            singer2: "X2X",
            albumInfo: "Yêu Là Cưới (Single)",
            songDuration: "02:59"
        },
        {
            numberTop: 24,
            image: "./assets/img(2)/zingchart/4.jpg",
            songName: "Sông Có Khúc Người Có Lúc",
            singer1: "Mr. Siro",
            comma: "",
            singer2: "",
            albumInfo: "Sông Có Khúc Người Có Lúc (Single)",
            songDuration: "04:43"
        },
        {
            numberTop: 25,
            image: "./assets/img(2)/zingchart/5.jpg",
            songName: "Cưa Là Đổ",
            singer1: "Phát Hồ",
            comma: ",",
            singer2: "X2X",
            albumInfo: "Cưa Là Đổ (Single)",
            songDuration: "03:31"
        },
        {
            numberTop: 26,
            image: "./assets/img(2)/zingchart/6.jpg",
            songName: "Đông Phai Mờ Dáng Ai",
            singer1: "DatKaa",
            comma: ",",
            singer2: "QT Beatz",
            albumInfo: "Đông Phai Mờ Dáng Ai (Single)",
            songDuration: "04:40"
        },
        {
            numberTop: 27,
            image: "./assets/img(2)/zingchart/7.jpg",
            songName: "Kiếp Này Em Gả Cho Anh",
            singer1: "Thái Học",
            comma: "",
            singer2: "",
            albumInfo: "Kiếp Này Em Gả Cho Anh (Single)",
            songDuration: "05:20"
        },
        {
            numberTop: 28,
            image: "./assets/img(2)/zingchart/8.jpg",
            songName: "Cưới Luôn Được Không?",
            singer1: "YuniBoo",
            comma: ",",
            singer2: "Goctoi Mixer",
            albumInfo: "Cưới Luôn Được Không? (Single)",
            songDuration: "04:02"
        },
        {
            numberTop: 29,
            image: "./assets/img(2)/zingchart/9.jpg",
            songName: "Ai Chung Tình Được Mãi",
            singer1: "Đinh Tùng Huy",
            comma: ",",
            singer2: "ACV",
            albumInfo: "Ai Chung Tình Được Mãi (Single)",
            songDuration: "05:35"
        },
        {
            numberTop: 30,
            image: "./assets/img(2)/zingchart/10.jpg",
            songName: "Đọc Đúng Sách, Yêu Đúng Cách",
            singer1: "G5R Squad",
            comma: ",",
            singer2: "Anh Rồng",
            albumInfo: "Đọc Đúng Sách, Yêu Đúng Cách (Single)",
            songDuration: "04:31"
        }
    ],
    render: function() {
// render top 10
        const htmls = this.zingchartList.map((song,index)=>{
            return `
                <div class="zingchat-tab-list__item">
                    <div class="media-left">
                        <span class="number-top ${song.numberTopColor}">${song.numberTop}</span>
                        <span class="horical-align">_</span>
                        <div class="song-thumb">
                            <div class="wrap-blur">
                                <i class="fas fa-play"></i>
                            </div>
                            <img src=${song.image}>
                        </div>
                        <div class="song-info">
                            <div class="song-info__name">${song.songName}</div>
                            <div class="song-info__singer">
                                <a href="" class="singer1">${song.singer1}</a>
                                <span class="comma">${song.comma}</span>
                                <a href="" class="singer1">${song.singer2}</a>
                            </div>
                        </div>
                    </div>
                    <div class="media-content">
                        <a href=""class="album-info">
                        ${song.albumInfo}
                        </a>
                    </div>
                    <div class="media-right">
                        <div class="media-btn">
                            <i class="fas fa-microphone-alt"></i>
                            <i class="far fa-heart"></i>
                            <i class="fas fa-ellipsis-h media-right__icon"></i>
                        </div>
                        <span class="song-duration">${song.songDuration}</span>
                    </div>
                </div>
            `
        })
        zingchatlistTop10.innerHTML = htmls.join('')
// render top 100
        const zingchatTop100 = this.top100.map((song,index)=>{
            return `
            <div class="zingchat-tab-list__item">
            <div class="media-left">
                <span class="number-top ${song.numberTopColor}">${song.numberTop}</span>
                <span class="horical-align">_</span>
                <div class="song-thumb">
                    <div class="wrap-blur">
                        <i class="fas fa-play"></i>
                    </div>
                    <img src=${song.image}>
                </div>
                <div class="song-info">
                    <div class="song-info__name">${song.songName}</div>
                    <div class="song-info__singer">
                        <a href="" class="singer1">${song.singer1}</a>
                        <span class="comma">${song.comma}</span>
                        <a href="" class="singer1">${song.singer2}</a>
                    </div>
                </div>
            </div>
            <div class="media-content">
                <a href=""class="album-info">
                ${song.albumInfo}
                </a>
            </div>
            <div class="media-right">
                <div class="media-btn">
                    <i class="fas fa-microphone-alt"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-ellipsis-h media-right__icon"></i>
                </div>
                <span class="song-duration">${song.songDuration}</span>
            </div>
        </div>
            `
        })
        zingchatlistTop100.innerHTML = zingchatTop100.join('')
    },
    handleEvent: function() {
        topBtn.forEach((btn, index) => {
            btn.addEventListener('click',function(){
                zingchatlistTop100.classList.toggle('displayBlock');
                top100Btn.classList.toggle('none');
                top10Btn.classList.toggle('block');
            })
        })
    },
    start: function() {
        // render song
        this.render();
        // xử lý các xự kiện
        this.handleEvent();
    }
}
App.start();