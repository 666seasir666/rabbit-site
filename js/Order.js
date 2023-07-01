var arr = ['https://yanxuan-item.nosdn.127.net/7170d6147878a099914b7bb7ce21773f.png', '	https://yanxuan-item.nosdn.127.net/6d8d6772df51fa60c2e899a16ac34718.png', 'https://yanxuan-item.nosdn.127.net/ea1ec719c9a860eedb0cb7ef31ada4af.png', 'https://yanxuan-item.nosdn.127.net/c3b4e3640f77bb72ec4d043ef2e2a0cd.png']

var img = document.querySelector('.carousel-item .slider img')


var index = 0;
setInterval(function () {
    index = ++index === arr[lengthE] ?  0 : index;
        img.src = arr[index];
    console.log(img);
}, 1000)