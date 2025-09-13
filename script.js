document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const showMore = document.querySelector('.section-about-me');

    toggleButton.addEventListener('click', function() {
        if(showMore.style.display === 'none' || showMore.style.display === ''){
            showMore.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            showMore.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
    });
});


function showCertifMagangImage(){
    document.getElementById('popupCertifMagang').style.display = "flex";
    document.getElementById('headerHide').style.zIndex = -1;
}

function closePopupMagang(){
    document.getElementById('popupCertifMagang').style.display = "none";
    document.getElementById('headerHide').style.zIndex = 1;
}

function showCertifAwardImage(){
    document.getElementById('popupCertifAward').style.display = "flex";
    document.getElementById('headerHide').style.zIndex = -1;
}

function closePopupAward(){
    document.getElementById('popupCertifAward').style.display = "none";
    document.getElementById('headerHide').style.zIndex = 1;
}

function showBinusImage(){
    document.getElementById('popupBinusImage').style.display = "flex";
    document.getElementById('headerHide').style.zIndex = -1;
}

function closePopupBinus(){
    document.getElementById('popupBinusImage').style.display = "none";
    document.getElementById('headerHide').style.zIndex = 1;
}

function showPahoaImage(){
    document.getElementById('popupPahoaImage').style.display = "flex";
    document.getElementById('headerHide').style.zIndex = -1;
}

function closePopupPahoa(){
    document.getElementById('popupPahoaImage').style.display = "none";
    document.getElementById('headerHide').style.zIndex = 1;
}

function showEasyImage(){
    document.getElementById('popupEasyImage').style.display = "flex";
    document.getElementById('headerHide').style.zIndex = -1;
}

function closePopupEasy(){
    document.getElementById('popupEasyImage').style.display = "none";
    document.getElementById('headerHide').style.zIndex = 1;
}

function showCertifJavaImage(){
    document.getElementById('popupCertifJavaImage').style.display = "flex";
    document.getElementById('headerHide').style.zIndex = -1;
}

function closePopupCertifJava(){
    document.getElementById('popupCertifJavaImage').style.display = "none";
    document.getElementById('headerHide').style.zIndex = 1;
}

function showCertifLandingPageImage(){
    document.getElementById('popupCertifLandingPageImage').style.display = "flex";
    document.getElementById('headerHide').style.zIndex = -1;
}

function closePopupCertifLandingPage(){
    document.getElementById('popupCertifLandingPageImage').style.display = "none";
    document.getElementById('headerHide').style.zIndex = 1;
}

function showCertifPythonImage(){
    document.getElementById('popupCertifPythonImage').style.display = "flex";
    document.getElementById('headerHide').style.zIndex = -1;
}

function closePopupCertifPython(){
    document.getElementById('popupCertifPythonImage').style.display = "none";
    document.getElementById('headerHide').style.zIndex = 1;
}


let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

function generateStar(n) {
    removeStar();
    for (let i = 0; i < n; i++) {
        if (n <= 2){
            if (n == 1) count = 'one';
            else if (n == 2) count = 'two';
            output.textContent = 'Thank you for your rating, I will try harder to build a better website';
        } 
        else if (n == 3){
            count = 'three';
            output.textContent = 'Thank you for your rating, I will make sure to continue developing my website';
        }
        else if (n <= 5) {
            if (n == 4) count = 'four';
            else if(n == 5) count = 'five'; 
            output.textContent = 'Thank you for your rating, I will always develop my skills';
        }
        stars[i].className = "star " + count;
    }
    // output.innerText = "Rating is: " + n + "/5";
}
function removeStar() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}