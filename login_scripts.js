
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
        body.style.backgroundImage = "url('image/day_background.png')";

        
    } else {
        body.style.backgroundImage = "url('image/night_background.png')";
      
    
    }

    localStorage.setItem('preferredMode', mode);
    
}



function toDirectory(){
    window.location.href="../directory/directory.html";
}



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var password = document.getElementById('passwordInput').value;
    var messageBox = document.getElementById('messageBox');

    if (password === '20011003') {
        // 改变背景颜色
        document.body.style.backgroundColor = '#333';
        
        // 显示成功信息
        messageBox.innerHTML = '<p style="color:green;">登录成功！将在1秒后跳转...</p>';
        messageBox.classList.remove('hidden');
        
        // 设置定时器，在一秒后执行页面跳转
        setTimeout(function() {
            window.location.href="index/index.html"; 
        }, 1000); // 1000毫秒 = 1秒
    } else {
        // 显示错误信息
        messageBox.innerHTML = '<p style="color:red;">密码错误，请重新输入！</p>';
        messageBox.classList.remove('hidden');
    }
});


