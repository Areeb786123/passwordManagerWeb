

let carousel = document.querySelector('.carousel');
let width = document.querySelector('.carousel-container').offsetWidth;
let currentIndex = 0;
const closeButtons = document.querySelectorAll('.close-btn');
const popupTriggers = document.querySelectorAll('.footer-text');

document.getElementById('downloadBtn').addEventListener('click', function() {
    console.log('User clicked download.');
    // Here you can add analytics or any other tracking mechanism
    let popupId = this.getAttribute('data-popup');
    let popup = document.getElementById(popupId);
    
    if (popup) {
      popup.classList.toggle('active');
    }
    downloadApk()
});


// app.js

function downloadApk() {
    // Define the path to the APK file relative to the HTML file
    var apkFilePath = 'apk/passwordManager.apk';

    // Create a temporary anchor element
    var link = document.createElement('a');
    link.href = apkFilePath;
    link.download = 'passwordManager.apk'; // Set the filename to be used when downloaded
    
    // Append the anchor to the body
    document.body.appendChild(link);
    
    // Trigger the click event
    link.click();
    
    // Remove the anchor from the body
    document.body.removeChild(link);
}
document.addEventListener('DOMContentLoaded', function() {
    

    popupTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.style.display = 'block';
        });
    });



    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const popup = this.closest('.popup');
            popup.style.display = 'none';
        });
    });
});

function nextSlide() {
  if (currentIndex < 2) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  carousel.style.transform = `translateX(-${width * currentIndex}px)`;
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = 2;
  }
  carousel.style.transform = `translateX(-${width * currentIndex}px)`;
}



