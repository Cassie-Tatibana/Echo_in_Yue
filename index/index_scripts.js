
// 如果用户的系统为深色模式则进入夜晚模式的越音回响
// 如果用户的系统为浅色模式则进入白天模式的越音回响
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // 用户偏好为深色模式
    setMode('night');
} else {
    // 用户偏好为浅色模式
    setMode('day');
}


function setMode(mode) {
    const body = document.body;
    // const titleDiv = document.getElementById('title');
    // const SpecAnimaDiv = document.getElementById('SpecAnima');
    // titleDiv.innerHTML = '';
    // SpecAnimaDiv.innerHTML = '';
    if (mode === 'day') {
        body.style.backgroundImage = "url('image/day/day_background.png')";

        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        img1.src = 'image/day/day_title.png'; 
        img1.alt = 'Day Mode Image';
        img2.src = 'image/day/day_boat.png'; 
        img2.alt = 'Boat';
        // titleDiv.appendChild(img1);
        // SpecAnimaDiv.appendChild(img2);
        
    } else {
        body.style.backgroundImage = "url('image/night/night_background.png')";
      
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        img1.src = 'image/night/night_title.png'; 
        img1.alt = 'Night Mode Image';
        img2.src = 'image/night/night_boat.png'; 
        img2.alt = 'Boat';
        // titleDiv.appendChild(img1);
        // SpecAnimaDiv.appendChild(img2);
    }

    localStorage.setItem('preferredMode', mode);
    
}




document.getElementById('backgroundMusic').play();
  // JavaScript 用来控制音频播放和图标旋转
  var soundIcon = document.getElementById('soundIcon');
  var music = document.getElementById('backgroundMusic');

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



function toDirectory(){
    window.location.href="../directory/directory.html";
}

function toPreface(){
    window.location.href="../preface/preface.html";
}


document.getElementById('fullscreenBtn').addEventListener('click', function() {
    // 获取要全屏显示的元素，这里我们用的是整个文档
    var elem = document.documentElement;

    if (elem.requestFullscreen) { // W3C 标准
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/MS
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome/Safari
        elem.webkitRequestFullscreen();
    }
});