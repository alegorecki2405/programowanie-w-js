const imgArray = [
    {
        number:1,
        src:'./img/image1.png'
    },
    {
        number:2,
        src:'./img/image2.png'
    },
    {
        number:3,
        src:'./img/image3.png'
    },
]

const prevButton = document.querySelector('.slider__button--prev')
const nextButton = document.querySelector('.slider__button--next')
let currentSelectedImg = 0;
const imgArrayLength = imgArray.length -1;

const updateImg = (imgIndex) => {
    const sliderImg = document.querySelector('.slider img');
    sliderImg.src = imgArray[imgIndex].src;
}


const changeImgHandle= (type) => {
    if(type ==="next") {
        currentSelectedImg = currentSelectedImg + 1;
        if(currentSelectedImg > imgArrayLength){
            currentSelectedImg = 0;
            updateImg(0);
        }else{
            updateImg(currentSelectedImg);
        }
    }

    if(type ==="prev"){
        currentSelectedImg = currentSelectedImg - 1;
        if(currentSelectedImg < 0){
            currentSelectedImg = imgArrayLength;
            updateImg(imgArrayLength);
        }else{
            updateImg(currentSelectedImg);}
    }
}

prevButton.addEventListener('click', () => changeImgHandle('prev'));
nextButton.addEventListener('click', () => changeImgHandle('next'))

const initSlider = () => {
    updateImg(currentSelectedImg);
}

initSlider()


const indexButtons = document.querySelectorAll(".slider__menu_btn");

const changeImgByIndex= (event) => {
    const imgIndex = event.target.getAttribute('data-imgIndex') *1;
    updateImg(imgIndex - 1);
}

indexButtons.forEach((button) => {
    button.addEventListener('click', changeImgByIndex)
});