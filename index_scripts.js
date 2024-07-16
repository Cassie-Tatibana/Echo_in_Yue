function setMode(mode) {
    const body = document.body;
    const titleDiv = document.getElementById('title');
    const SpecAnimaDiv = document.getElementById('SpecAnima');
    titleDiv.innerHTML = '';
    SpecAnimaDiv.innerHTML = '';
    if (mode === 'day') {
        body.style.backgroundImage = "url('image/白天/白天_背景.png')";
        
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        img1.src = 'image/白天/标题（白天）.png'; 
        img1.alt = 'Day Mode Image';
        img2.src = 'image/白天/船（白天）.png'; 
        img2.alt = 'Boat';
        titleDiv.appendChild(img1);
        SpecAnimaDiv.appendChild(img2);
        
    } else {
        body.style.backgroundImage = "url('image/夜晚/夜晚_桥底光.png')";
      
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        img1.src = 'image/夜晚/标题（夜晚）.png'; 
        img1.alt = 'Night Mode Image';
        img2.src = 'image/夜晚/船（夜晚）.png'; 
        img2.alt = 'Boat';
        titleDiv.appendChild(img1);
        SpecAnimaDiv.appendChild(img2);
    }

    localStorage.setItem('preferredMode', mode);
    
}

function checkTime() {
    const now = new Date();
    const hour = now.getHours();
    const preferredMode = localStorage.getItem('preferredMode');

    if (preferredMode) {
        setMode(preferredMode);
    } else if (hour >= 6 && hour < 18) {
        setMode('day');
    } else {
        setMode('night');
    }
}

// 页面加载时检查时间并设置初始模式
checkTime();

// 每分钟检查一次时间（如果没有手动设置过模式）
setInterval(() => {
    if (!localStorage.getItem('preferredMode')) {
        checkTime();
    }
}, 60000);


//定义一个变量进行判断，默认false 非全屏状态
var exitFullscreen = false
// 全屏事件
function handleFullScreen() {
    var element = document.documentElement;
    if(this.fullscreen) {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
        }
    }
}
// 退出全屏
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

//监听window是否全屏，并进行相应的操作,支持esc键退出
window.onresize = function() {
    var isFull=!!(document.webkitIsFullScreen || document.mozFullScreen || 
        document.msFullscreenElement || document.fullscreenElement
    );//!document.webkitIsFullScreen都为true。因此用!!
    if (isFull==false) {
        $("#exitFullScreen").css("display","none");
        $("#fullScreen").css("display","");
    }else{
        $("#exitFullScreen").css("display","");
        $("#fullScreen").css("display","none");
    }
}
