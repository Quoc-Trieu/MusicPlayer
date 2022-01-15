const firebaseConfig = {
    apiKey: "AIzaSyDUMwRbUn7K5qRWWUOxc8D9dK_zAS6C6GU",
    authDomain: "datasong-e2355.firebaseapp.com",
    databaseURL: "https://datasong-e2355-default-rtdb.firebaseio.com",
    projectId: "datasong-e2355",
    storageBucket: "datasong-e2355.appspot.com",
    messagingSenderId: "515922194967",
    appId: "1:515922194967:web:d3539cc25d2eaf1c86e252",
    measurementId: "G-NPCEL0SY30"
  };

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore();  

//delete comment
function deletecmt(cmtID){
    db.collection("comments").doc(cmtID).delete().then(() => {
        getListUsers();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

//render
function renderUsers(comments){
    var list_comments = document.querySelector('.list-cmt');
    var htmls = comments.map((comment,index) => {
        return`
            <li>
                <div class="render-cmt">
                   <div class="cmt-info">
                        <div class="cmt-user">
                            <i class="fas fa-user-secret cmt-user__icon"></i>
                        </div>
                        <div class="cmt-content">
                            <h4 class="cmt-content__title">NIKE</h4>
                            <p class="cmt-content__description">${comment.content}</p>
                            <div class="fell">
                                <i class="fas fa-thumbs-up icon-like btn-like" onclick="like(${index})"></i>
                                <i class="fas fa-thumbs-down icon-disLike btn-dislike" onclick="dislike(${index})"></i>
                                <p class="cmt-rep"> Phản hồi</p>
                            </div>
                        </div>
                   </div>
                    <div class="cmt-delete">
                    <i class="fas fa-trash-alt icon-delete" onclick = "deletecmt('${comment.id}')"></i>
                    </div>
                </div>
            </li>
        `;
    })
    list_comments.innerHTML = htmls.join('');
}

//read data from store 
function getListUsers() {
    db.collection("comments").get().then((querySnapshot) => {
        const comments = []
        
        querySnapshot.forEach((doc) => {
            comments.push({
                id: doc.id,
                content: doc.data().content
            })
        });
        renderUsers(comments)
    });
}

//gửi yêu cầu post(create)
function createUser(data) {
    db.collection("comments").add(data)
    .then((docRef) => {
        getListUsers();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}



//hàm tạo mới 
function handleCreateForm(){
    var btn_create = document.querySelector('.btn-cmt');
    
    btn_create.addEventListener('click',()=>{
        var content = document.querySelector('input[name="content"]').value;
        //creat user
        if(content.length > 0){
            var formData = {
                content
            }
            createUser(formData);
            getListUsers();
        }
        //reset inputs
        document.querySelector('input[name="content"]').value = '';
    })
}

getListUsers();
handleCreateForm();

// like & dislike click
var like = (id)=>{
    document.querySelectorAll('.btn-like')[id].classList.toggle('red');
    document.querySelectorAll('.btn-dislike')[id].classList.remove('red');
}

var dislike = (id)=>{
    document.querySelectorAll('.btn-dislike')[id].classList.toggle('red');
    document.querySelectorAll('.btn-like')[id].classList.remove('red');
}

// slider
// var couse = 1;
// setInterval(() => {
//     var slide = document.getElementById('radio' + couse);
//     slide.checked = true;
//     couse++;
//     if(couse > 5){
//         couse= 1 ;
//     }
// }, 5000);

// slider zing choise
        var imageno = 0;
        displaying(imageno);

        function nextimg(n){
            displaying(imageno += n)
        }
         

        function displaying(n){
            
            var i;
            var listChoice = document.getElementsByClassName('zingChoice-list');
            
            if(n >= listChoice.length){
                imageno = 0;
            }

            if(n < 0){
                imageno = listChoice.length;
            }

            for(i=0; i<listChoice.length; i++){
                listChoice[i].style.display = 'none';
            }

            listChoice[imageno].style.display = 'block';

        }

// boxlist slider

function sliderBoxlist (){
    var boxlist_slider = document.querySelector('.slider-top100');
    var items = document.querySelectorAll('.list-box--slider').length;
    var prev = document.querySelector('.btn-switch .prev');
    var next = document.querySelector('.btn-switch .next');
    var couse = 1;
    
    var prevSlider = function(){
        if(couse > 1){
            couse = couse - 2;
            boxlist_slider.style.marginLeft = '-' + (couse * 100) + "%";
            couse++;
        }else if(couse = 1){
            couse = items - 1;
            boxlist_slider.style.marginLeft = '-' + (couse * 100) + "%";
            couse++;
        }
    };

    var nextSlider = function(){
        if(couse < items){
            boxlist_slider.style.marginLeft = '-' + (couse * 100) + "%";
            couse++;
        }else if(couse = items){
            boxlist_slider.style.marginLeft = "0%";
            couse = 1;
        }
    };

    prev.addEventListener('click',function(){
        prevSlider();
    })

    next.addEventListener('click',function(){
        nextSlider();
    })

    // setInterval(function(){
    //     nextSlider();
    // },2000);
};
sliderBoxlist();

// tabs Ui 
var tabs = document.querySelectorAll('.tab-item');
var panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(function(item,index){
        item.addEventListener('click',function(){

            document.querySelector('.tab-item.active').classList.remove('active');
            this.classList.add('active');

            document.querySelector('.tab-pane.active').classList.remove('active');
            panes[index].classList.add('active');
        })
    })

// slider discover new start
function slider(){
    var sticks = document.querySelectorAll('.stick');
    var btn_prev = document.querySelector('.btn-prev');
    var btn_next = document.querySelector('.btn-next')
    var slider_list = document.querySelector('.slider-list')

    var counts = 0;
    var i = 1;
    var transform = [
        'translateX(0)',
        'translateX(-20%)',
        'translateX(-40%)',
        'translateX(-60%)'
    ]
    
    sticks.forEach(function(stick,index){
        stick.addEventListener('click',function(){
            document.querySelector('.stick.stick--active').classList.remove('stick--active');
            this.classList.add('stick--active');
            slider_list.style.transform = transform[index];
            counts = index;
            // i = index;
        });
    })

    function nextslider() {
        counts++;
        // i=counts;
        if(counts > 3){
            counts = 0;
        }
        document.querySelector('.stick.stick--active').classList.remove('stick--active');
        sticks[counts].classList.add('stick--active');
        slider_list.style.transform = transform[counts];
    }
    
    btn_next.addEventListener('click',function(e){
        nextslider();
        e.stopPropagation();
    })
    
    btn_prev.addEventListener('click',function(){
        counts--;
        // i=counts;   
        if(counts < 0){
            counts = 3;
        }
        document.querySelector('.stick.stick--active').classList.remove('stick--active');
        sticks[counts].classList.add('stick--active');
        slider_list.style.transform = transform[counts];
    });
    
    setInterval(function(){
        // cách 1
        // slider_list.style.transform = transform[i];
        // document.querySelector('.stick.stick--active').classList.remove('stick--active');
        // sticks[i].classList.add('stick--active');
        // counts = i;
        // i++;
        // if(i > 3){
        //     i = 0
        // }

        // cách 2
        nextslider();
    },5000)
}
slider();
// slider discover new end

// open & close nav start
function navbar(){
    // open
    var btn_nav = document.querySelector('.scroll-nav');
    btn_nav.addEventListener('click',() => {
        document.querySelector('.app-top-left').classList.toggle('app-top-left--open')
        var navbar_text = document.querySelectorAll('.navbar-top-text p')
            navbar_text.forEach(function(p){
                    p.classList.toggle('navbar-titile--open')
            })
        var navtops = document.querySelectorAll('.navbar-top-text')
            navtops.forEach(function(navtop){
                navtop.classList.toggle('navbar-top-text--open')
            })
        document.querySelector('.logo').classList.toggle('logo--open')
        document.querySelector('.scroll-nav i').classList.toggle('icon-flip')
        document.querySelector('.logo--small').classList.toggle('logo--small-hiden')
    })

    // close
    
}
navbar();
// open & close nav end

// open & close setting,upload
function setting(){
    var uploadBtn = document.querySelector('.btn-uploadmusic');
    var modal = document.querySelector('#modal');
    var closeBtn = document.querySelector('.closeBtn');
    var modal_container = document.querySelector('.modal-container');

    var setting_btn = document.querySelector('.btn--settings');
    // open
    setting_btn.addEventListener('click',(e)=>{
        e.stopPropagation();
        document.querySelector('.box-setting').classList.toggle('open');
    })
    uploadBtn.addEventListener('click',()=>{
        modal.style.display = 'flex'
    })
    // close
    document.addEventListener('click',function(){
        document.querySelector('.box-setting').classList.remove('open');
    })
    document.querySelector('.box-setting').addEventListener('click',function(e){
        e.stopPropagation();
    })

    closeBtn.addEventListener('click',()=>{
        modal.style.display = 'none';
    })
    modal.addEventListener('click',()=>{
        modal.style.display = 'none';
    })
    modal_container.addEventListener('click', e =>{
        e.stopPropagation();
    })
    
}
setting();

// handle when click slider
function handleSlider(){
    var prev = document.querySelector('.radio-slider-btn .prev-btn');
    var next = document.querySelector('.radio-slider-btn .next-btn');
    var radiolist = document.querySelector('.radio-slider-list');
    var item = document.querySelectorAll('.radio-slider-item').length;
    
    var i=0;
    var translateX = [
        'translateX(0)',
        'translateX(-10%)',
    ];

    next.addEventListener('click',function(e){
        i++
        if(i+1 == item){
            i=0
        }
        radiolist.style.transform = translateX[i];
    })

    prev.addEventListener('click',function(){
        i--
        if(i<0){
            i=item-2
        }
        radiolist.style.transform = translateX[i];
    })
}
handleSlider();

// handle slider for tab follow 
function followSlider(){
    const sliderSinger = document.querySelector('.slider-singer');
    const nextbtn = document.querySelector('.singer-lider-btn.next');
    const prevbtn = document.querySelector('.singer-lider-btn.prev');
    const singerlistLength = document.querySelectorAll('.slider-singer-list').length;
    
    let i = 0;
    const transform = [
        'translateX(0)',
        'translateX(-20%)',
    ]

    nextbtn.addEventListener('click',(e)=>{
        i++
        if(i >= singerlistLength){
            i = 0;
        }
        sliderSinger.style.transform = transform[i];
        e.stopPropagation()
    })
    prevbtn.addEventListener('click',()=>{
        i--
        if(i < 0){
            i = singerlistLength - 1;
        }
        sliderSinger.style.transform = transform[i];
    })

    setInterval(function(){
        nextbtn.click();
    },5000)
}

followSlider();

// handle event click tab ui follow tab
function followTabUi(){
    const followTabItem = document.querySelectorAll('.follow-tab-item');
    const followTabPane = document.querySelectorAll('.follow-tab-pane');

    followTabItem.forEach(function(item,index){
        item.addEventListener('click',function(){
            // open
            document.querySelector('.follow-tab-item.active').classList.remove('active');
            document.querySelector('.follow-tab-pane.active').classList.remove('active');
            // close
            this.classList.add('active');
            followTabPane[index].classList.add('active');
        })
    })
}
followTabUi();
// toast
function handleToast(){
    function toast({type,title,mess,duration}){
        const main = document.getElementById('toast');
        const toast = document.createElement('div');
        const delay = (duration/1000).toFixed(2);
        if(main){
            toast.classList.add('toast',`toast--${type}`);
            toast.style.animation = `slide-right ease 0.3s,fade-out linear 1s ${delay}s forwards`;
            toast.innerHTML = 
                `<div class="toast__icon"><i class="fas fa-bell"></i></div>
                <div class="toast-body">
                    <div class="toast-body__title">${title}</div>
                    <div class="toast-body__mess">${mess}</div>
                    </div>
                <div class="toast__close"><i class="fas fa-times-circle"></i></div>`;

            main.appendChild(toast)
            // auto remove toast
            const remove = setTimeout(function(){
                main.removeChild(toast)
            },duration + 1000)
            // remove toast when click 
            toast.addEventListener('click',function(e){
                if(e.target.closest('.toast__close')){
                    main.removeChild(toast)
                }
                clearTimeout(remove);
            })
        }
        
    }
    const items = document.querySelectorAll('.notification');
        items.forEach(function(item){
            item.addEventListener('click',function(){
                toast(
                    {   type:'info',
                        title:'Thông báo',
                        mess:'Chức năng hiện chưa được hoàn thiện',
                        duration: 5000
                    });
            })
        })
}
handleToast();



// const app = function(callback) {
//     setTimeout(function(){
//         console.log('1')
//         callback();
//     },5000)
// }

// const callback = function(){
//     console.log('2')
// }

// app(callback)
