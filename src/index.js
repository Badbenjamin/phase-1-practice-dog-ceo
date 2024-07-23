// console.log('%c HI', 'color: firebrick')

// having trouble accessing info from dropdown
function getDropDownInput() {
    // console.log("hello")
    const dropDownMenu = document.getElementById('breed-dropdown')
    const dropDownValue = dropDownMenu.getElementsByTagName('option');
    // console.log(dropDownValue[0])
    dropDownMenu.addEventListener('select', event => {
        event.preventDefault();
    })
}

function displayDogDetails (element) {
    // console.log(element)
}

const addDogPics = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container')
        data.message.forEach((element) => {
            dogImages = document.createElement('img')
            dogImages.src = element;
            dogImageContainer.appendChild(dogImages)

            dogImages.addEventListener('click', () => {
                displayDogDetails(element);
            })
        })
    })
}
    
const addDogBreeds = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then((dogs) => {
        console.log(dogs)
    })
 }

    

const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
        addDogPics()
        addDogBreeds()
        getDropDownInput()
     });
}  

init()



