const ran = Math.floor(Math.random()*50)


const URL = `https://api.pexels.com/v1/search?page=${ran}&query=kittens`;
const pic1 = document.querySelector(".pi1");
const pic2 = document.querySelector('.pi2')
const pic3 = document.querySelector('.pi3')
const pic4 = document.querySelector('.pi4')
const pic5 = document.querySelector('.pi5')
const pic6 = document.querySelector('.pi6')
const pic7 = document.querySelector('.pi7')
const pic8 = document.querySelector('.pi8')
const pic9 = document.querySelector('.pi9')

ar();
async function ar(){
    let response = await fetch(URL, {
    method: "GET", // optional, since GET is default
    headers: {
        Authorization: "SzPk405WY7XUGH3pcxlRGxDLnHsXvRnnWNDgcdjOB2Xa3Ma0g7462t1x"
    }
})
let output = await response.json();
pic1.style.backgroundImage =  `url('${output.photos[0].src.tiny}')`;
pic2.style.backgroundImage =  `url('${output.photos[1].src.tiny}')`;
pic3.style.backgroundImage =  `url('${output.photos[2].src.tiny}')`;
pic4.style.backgroundImage =  `url('${output.photos[3].src.tiny}')`;
pic5.style.backgroundImage =  `url('${output.photos[4].src.tiny}')`;
pic6.style.backgroundImage =  `url('${output.photos[5].src.tiny}')`;
pic7.style.backgroundImage =  `url('${output.photos[6].src.tiny}')`;
pic8.style.backgroundImage =  `url('${output.photos[7].src.tiny}')`;
pic9.style.backgroundImage =  `url('${output.photos[8].src.tiny}')`;


};

