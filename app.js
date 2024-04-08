
const imageContainer = document.getElementById("image-container");
const displayImage = document.getElementById("display");
const form = document.getElementById("form");
const accessKey = "jWcd4CYnq4cOJFRcX2LUCnIFBoDc_fQ2Z8yEtRAlyNA";
const randomButton = document.getElementById("random-button");
const randomPhoto = document.getElementById("random-photo");
//Also created a gitignore for my access key 

let image = [];
let currentImgIndex = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault()
    search(event.target.input.value)
})
imageContainer.addEventListener("click", function() {
  const displayImage = this.querySelector('img').src;
  backgroundImage.display = `url('${displayImage}')`;
});


// get the images
const images = [
  {
    url: "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpveXxlbnwwfDB8MHx8fDA%3D",
    alt: "balloons floating into the air",
  },
  {
    url: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8am95fGVufDB8MHwwfHx8MA%3D%3D",
    alt: "A boy running through a water sprinkler",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661605580681-ca6d8e39c49b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am95fGVufDB8MHwwfHx8MA%3D%3D",
    alt: "Three children in a sack race"
  },
  {
    url: "https://images.unsplash.com/photo-1606418484642-279df2ec2773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGpveXxlbnwwfDB8MHx8fDA%3D",
    alt: "The word joy spelt out in lights"
  },
  {
    url: "https://images.unsplash.com/photo-1487164697898-db7bfc2b7bf5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpveXxlbnwwfDB8MHx8fDA%3D",
    alt: "a women laughing in a field of flowers"
  },
  {
    url: "https://images.unsplash.com/photo-1443916568596-df5a58c445e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpveXxlbnwwfDB8MHx8fDA%3D",
    alt: "a person jumping into the air"
  },
];




async function search(query) {
  // API response
  let response = await fetch(`https://api.unsplash.com/search/photos/query=${query}&client_id=${accesskey}`)
  let data = await response.json()
  const images = data.results
  createThumbnails(images);
  createBigImage(images[currentImgIndex])
 
}
function handleSearch() {
  const query = document.getElementById('queryInput').value;
  search(query);
}
// creates thumbnails
function createThumbnails() {
  imageContainer.innerHTML = ""; 
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    imageContainer.appendChild(img);
    
  
    img.addEventListener("click", function () {
      createBigImage(image);
    });
    imageContainer.appendChild(img);
  });
}

// display the large image
function createBigImage(image) {
  displayImage.innerHTML = "";
  const bigImg = document.createElement("img");
  bigImg.src = image.url;
  bigImg.alt = image.alt;
  displayImage.appendChild(bigImg);
}

createThumbnails();
createBigImage(images[0]);

// const defaultQuery = "joy"; // This  query did work 
//     search(searchInput);


randomButton.addEventListener("click", getRandomPhoto);
//fetch a random photo from api unsplash
async function getRandomPhoto() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}`
    );
    const data = await response.json();
    const imageUrl = data.urls.regular;
    randomPhoto.src = imageUrl;
  } catch (error) {
    console.error("Error fetching random photo:", error);
  }
}


imageContainer.addEventListener("keydown", function(event) {
  if (event.key === "rightArrow" || event.key === "leftArrow") {
    // To use the right and left arrow keys
    if (event.key === "rightArrow") {
      // If the right arrow is pressed
    } else if (event.key === "leftArrow") {
      // If the  left arrow key is pressed

    const selectedImage = document.selectedImage;
    const nextImage = event.key === "RightArrow" ? selectedImage.nextImageSibling : focusedImage.previousImageSibling;
    if (nextImage && nextImage.tagName === 'IMG') {
      nextImage.focus();
    }
    }
  }

});
