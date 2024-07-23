console.log('%c HI', 'color: firebrick')

const addDogPics = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container')
        data.message.forEach((element) => {
            dogImages = document.createElement('img')
            dogImages.src = element;
            dogImageContainer.appendChild(dogImages)
        })
    })
}
    
const addDogBreeds = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    console.log(response)
}

const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
        addDogPics()
        addDogBreeds()
     });
}  

init()



