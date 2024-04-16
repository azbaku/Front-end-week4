

window.onload = function () {
    let name = prompt("Adınız nedir?");
    let welcome = document.querySelector('#myName');
    welcome.innerHTML = name;

    let myClockDOM = document.querySelector('#myClock');

    // Saat, dakika ve saniye bilgilerini al
    let date = new Date();
    let saatString = date.toLocaleTimeString('tr-TR', { hour12: false }); // Türkiye saati, 24 saatlik formatta
    let tarihString = date.toLocaleDateString('tr-TR', { weekday: 'long' });
    myClockDOM.innerHTML =  `<h2>${saatString}  ${tarihString}</h2>`;
    myClockDOM.style.color = 'red';

    let text1Element = document.querySelector('.text1');
    let text2Element = document.querySelector('.text2');

    text1Element.style.color = 'red';
    text2Element.style.color = 'red';


    
};
