
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
    const titleDiv = document.getElementById('title');
    const SpecAnimaDiv = document.getElementById('SpecAnima');
    titleDiv.innerHTML = '';
    SpecAnimaDiv.innerHTML = '';
    if (mode === 'day') {
        body.style.backgroundImage = "url('image/day/day_background.png')";

        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        img1.src = 'image/day/day_title.png'; 
        img1.alt = 'Day Mode Image';
        img2.src = 'image/day/day_boat.png'; 
        img2.alt = 'Boat';
        titleDiv.appendChild(img1);
        SpecAnimaDiv.appendChild(img2);
        
    } else {
        body.style.backgroundImage = "url('image/night/night_background.png')";
      
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        img1.src = 'image/night/night_title.png'; 
        img1.alt = 'Night Mode Image';
        img2.src = 'image/night/night_boat.png'; 
        img2.alt = 'Boat';
        titleDiv.appendChild(img1);
        SpecAnimaDiv.appendChild(img2);
    }

    localStorage.setItem('preferredMode', mode);
    
}



function toIndex(){
    window.location.href="Index.html";
}

function toPreface(){
    window.location.href="../前言/preface.html";
}