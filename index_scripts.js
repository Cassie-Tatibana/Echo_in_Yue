function setMode(mode) {
    const body = document.body;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    if (mode === 'day') {
        body.style.backgroundImage = "url('image/白天/白天_背景.png')";
        
        const img = document.createElement('img');
        img.src = 'image/白天/标题（白天）.png'; 
        img.alt = 'Day Mode Image';
        contentDiv.appendChild(img);
        
    } else {
        body.style.backgroundImage = "url('image/夜晚/夜晚_桥底光.png')";
      
        const img = document.createElement('img');
        img.src = 'image/夜晚/标题（夜晚）.png'; 
        img.alt = 'Night Mode Image';
        contentDiv.appendChild(img);
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
