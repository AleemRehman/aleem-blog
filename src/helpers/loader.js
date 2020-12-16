SPconst FontFaceObserver = require ('fontfaceobserver');
const { reject } = require('lodash');

const defaultFonts = [

]

function loadFonts(fonts = defaultFonts) {
    return new Promise((resolve) => {
        const fontFaceObservers = fonts.map(font => {
            const data = fontsData[font];
            return new FontFaceObserver(font, data);
        })
        Promise.all(fontFaceObservers).then(() => {
            resolve();
        });
    })
} 


// move into loader function
// function loadImages(){
//     images = [...document.querySelectorAll('.gatsby-image-wrapper > img')];
//     const stepRatio = 1 / images.length;
//     let imagesLoadedCount = 0;
//     return new Promise ((resolve, reject) => {
//         if(images.length === 0){

//         }
//     })

// }

// function loadImage(image){

// }