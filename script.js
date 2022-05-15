// query find out more button 

const findMoreButton = document.querySelector('.iFindMoreButton')
// when clicked, button disappears meme appears 

function memeClick (event) {
    //console.log("i've been clicked");
    this.style.display = 'none';
    const trollImgDiv = document.querySelector('.trollImg')

    trollImgDiv.innerHTML = `<img src="https://i.imgflip.com/6g9cjn.jpg">`;
}
// listen for click

findMoreButton.addEventListener('click', memeClick);

