// Javascript`

const btn = document.querySelector(".btn");
const action = document.querySelector(".action");
const result = document.querySelector(".result");

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || msSpeechRecognition)();
recognition.lang = 'vi-VN';
recognition.continuous = false;

btn.addEventListener('click', function () {
    recognition.start();
    action.textContent = 'Hãy nói nội dung bạn muốn';
    result.textContent = '';
    result.style.display = 'none';
})

recognition.addEventListener('result', function (e) {
    action.textContent = 'Ghi nhận yêu cầu của bạn';
    action.className = 'mission success';
    const spokenText = e.result[0][0].spokenText.toLowerCase();
    result.style.display = 'block';
    result.textContent = 'Đang thực hiện yêu cầu' + spokenText;
    setTimeout(() => {
        const processed = handleResult(spokenText);
        if (processed) {
            result.textContent = 'Đã thực hiện yêu cầu';
        } else {
            result.textContent = 'Yêu cầu chưa được thực hiện';
        }
    }, 1000);
});

recognition.onspeechend = function () {
    recognition.stop();
};

function handleResult(spokenText) {
    let processed = true;
    switch (spokenText) {
    case "google":
        window.open('https://www.google.com.vn/');
        break;
    case "youtube":
        window.open('https://www.youtube.com/');
        break;
    case "facebook":
        window.open('https://www.facebook.com/');
        break;
    case "google drive":
        window.open('https://drive.google.com/');
        break;
    case "google maps":
        window.open('https://www.google.com/maps');
        break;
    default:
        if (spokenText.includes('chỉ đường') || spokenText.includes('đường tới') || spokenText.includes('tới')) {
            const url = `https://www.google.com/maps/search/${spokenText.replace('chỉ đường', '').replace('tới', '').trim()}`;
            window.open(url.trim());
        } else if (spokenText.includes('bài hát') || spokenText.includes('mở bài hát') || spokenText.includes('nghe bài hát')) {
            const url = `https://zingmp3.vn/tim-kiem/tat-ca?q=${spokenText.replace('bài hát', '').replace('mở', '').replace('nghe', '').trim()}`;
            window.open(url.trim());
        } else if (spokenText.includes('video') || spokenText.includes('mở video') || spokenText.includes('xem video')) {
            const url = `https://www.youtube.com/results?search_query=${spokenText.replace('video', '').replace('mở', '').replace('xem', '').trim()}`;
            window.open(url.trim());
        } else {
            processed = false;
        } 
        break;
    }
    return processed;
}