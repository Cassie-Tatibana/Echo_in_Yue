
function toChapter1(){
    window.location.href="../../Chapter/Chapter_one/Chapter_one.html";
}

function toChapter2(){
    window.location.href="../../Chapter/Chapter_two/Chapter_two.html";
}

function toChapter3(){
    window.location.href="../../Chapter/Chapter_three/Chapter_three.html";
}

function toChapter4(){
    window.location.href="../../Chapter/Chapter_four/Chapter_four.html";
}





// 获取音频元素和图标元素
var soundIcon = document.getElementById('soundIcon');
var music = document.getElementById('backgroundMusic');

// 初始化时，确保图标不旋转
soundIcon.classList.remove('rotate-icon');

// 监听图标的点击事件
soundIcon.addEventListener('click', function() {
    if (music.paused) {
        // 如果音频已暂停，则播放音频并旋转图标
        music.play();
        soundIcon.classList.add('rotate-icon');
    } else {
        // 如果音频正在播放，则暂停音频并停止图标旋转
        music.pause();
        soundIcon.classList.remove('rotate-icon');
    }
});