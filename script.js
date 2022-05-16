const findMoreButton = document.querySelector('.iFindMoreButton')

function memeClick (event) {
    this.style.display = 'none';
    const trollImgDiv = document.querySelector('.trollImg')

    trollImgDiv.innerHTML = `<img class="jackieWhy" src="https://i.imgflip.com/6g9cjn.jpg">`;
}

findMoreButton.addEventListener('click', memeClick);

const findElmo = document.querySelector('.byeByeHome')

function elmoHellFire (event) {
    document.getElementById("helloElmo").src="https://i.imgflip.com/6g9gcd.jpg";
}

findElmo.addEventListener('click', elmoHellFire);


