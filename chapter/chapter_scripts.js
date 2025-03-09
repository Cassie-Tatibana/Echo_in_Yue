
function toDirectory() {
    window.location.href = "../../directory/directory.html";
}
function toContent1() {
    window.location.href = "../../content/content01/content01.html";
}
function toContent2() {
    window.location.href = "../../content/content02/content02.html";
}
function toContent3() {
    window.location.href = "../../content/content03/content03.html";
}
function toContent4() {
    window.location.href = "../../content/content04/content04.html";
}
function toContent5() {
    window.location.href = "../../content/content05/content05.html";
}
function toContent6() {
    window.location.href = "../../content/content06/content06.html";
}
function toContent7() {
    window.location.href = "../../content/content07/content07.html";
}
function toContent8() {
    window.location.href = "../../content/content08/content08.html";
}
function toContent9() {
    window.location.href = "../../content/content09/content09.html";
}
function toContent10() {
    window.location.href = "../../content/content10/content10.html";
}
function toContent11() {
    window.location.href = "../../content/content11/content11.html";
}
function toContent12() {
    window.location.href = "../../content/content12/content12.html";
}



document.addEventListener('DOMContentLoaded', function () {
    // 假设我们有一个映射表，将每个类名映射到其对应的音频文件路径
    const audioPaths = {
        'bell_button': '../voice/03钟声.mp3',
        'people_button': '../voice/01雨声.mp3',
        'boat_button': '../voice/02水声.mp3',
        'study_button': '../voice/04读书声.mp3',
        'Hotel_button': '../voice/05方言声.mp3',
        'boat_button': '../voice/06桨声.mp3',
        'wine_button': '../voice/07倒酒声.mp3',
        'chinaware_button': '../voice/09瓷器声.mp3',
        'opera_button': '../voice/08越剧声.mp3',
        'games_button': '../voice/12加油声.mp3',
        'robot_button': '../voice/10AI声.mp3',
        'subway_button': '../voice/11地铁声.mp3'
    };

  // 获取页面上所有的按钮元素
  for (const className in audioPaths) {
    if (audioPaths.hasOwnProperty(className)) {
        var buttons = document.getElementsByClassName(className);

        for (let i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            let audio = new Audio(audioPaths[className]);

            button.addEventListener('mouseover', function() {
                audio.play();
            });

            button.addEventListener('mouseout', function() {
                audio.pause();
                audio.currentTime = 0; // 重置音频到开始位置
            });
        }
    }
}
});