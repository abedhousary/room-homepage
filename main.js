let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let imageshower = document.querySelector(".left-part");
let title = document.querySelector(".title");
let desc = document.querySelector(".description");

let slidercounter = 1;

const slider1 = {
    "img": "./images/desktop-image-hero-1.jpg",
    "title": "Discover innovative ways to decorate",
    "description": "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love."
}
const slider2 = {
    "img": "./images/desktop-image-hero-2.jpg",
    "title": "We are available all across the globe",
    "description": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today."
}
const slider3 = {
    "img": "./images/desktop-image-hero-3.jpg",
    "title": "Manufactured with the best materials",
    "description": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office."
}

next.onclick = () => {
    slidercounter +=1;
    if (slidercounter != 4) {
        switch (slidercounter) {
            case 1:
                imageshower.style.backgroundImage = `url(${slider1.img})` 
                title.innerHTML = slider1.title
                desc.innerHTML = slider1.description
                break;
            case 2:
                imageshower.style.backgroundImage = `url(${slider2.img})`
                title.innerHTML = slider2.title
                desc.innerHTML = slider2.description
                break;
            case 3:
                imageshower.style.backgroundImage = `url(${slider3.img})`
                title.innerHTML = slider3.title
                desc.innerHTML = slider3.description
                break;

            default:
                break;
        }
    }

}


prev.onclick = () => {
    slidercounter -= 1;
    if (slidercounter != 4) {
        switch (slidercounter) {
            case 1:
                imageshower.style.backgroundImage = `url(${slider1.img})`
                title.innerHTML = slider1.title
                desc.innerHTML = slider1.description
                break;
            case 2:
                imageshower.style.backgroundImage = `url(${slider2.img})`
                title.innerHTML = slider2.title
                desc.innerHTML = slider2.description
                break;
            case 3:
                imageshower.style.backgroundImage = `url(${slider3.img})`
                title.innerHTML = slider3.title
                desc.innerHTML = slider3.description
                break;

            default:
                break;
        }
    }

}

