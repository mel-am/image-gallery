# Week Three Project - Building an accessible image gallery

This week I have been tasked with building an accessible image gallery.

 As a user I would like to :

- I want to browse a set of thumbnail images that load quickly
- I want to select a thumbnail and display a larger version of the image, with a description
- I expect accessible considerations like alternative text for images, and the ability to click next and previous buttons using the keyboard


### Requirements

One page, with a set of thumbnail images, and a larger image
Styled appropriately with CSS, and make use of media queries.
Use client-side JavaScript to display the larger image when a thumbnail is selected
Use client-side JavaScript to navigate between images using the keyboard (tab, enter)

### What went well

The thumbnails change the background as required and a large image appeared when the container-image was clicked on.

Initially, I  had a problem with the  Unsplash API up and running on the page, but due to the hourly limit and frequent page refreshes, I was unable to check that it was working correctly, so instead opted to use static images.  

I was able to resolve this issue, as a result when the Get a random photo button is selected a new photo appears.

The Lighthouse score for Performance,accessibility and SEO are high.

### Sticky points

The API query search worked (code in js), but I did not use it on my page as  I wanted the user to input the query to retrieve a photo.
