# Space Images site

## Scenario

You've just been handed a project from a new client who is really into photos of space. The client collected a bunch they've found online, set them up in the `images.json` file. It appears, they've been manually updating their website each day to change the images. However, this was super time consuming & they'd prefer the site update itself (So they just have to update the `images.json` file).

They started doing the changes themselves (So have left a few comments in the code, along with a few debugging notices), but were called off into an adventure. So it's up to you to finish the job! 

## Getting setup

Fork this repo onto your own account (Click the "Fork" button on the top right of this page), then clone the forked repo to your local machine.

Next use [Yarn](https://yarnpkg.com/en/docs/install) to install the libraries (However, if you'd prefer to link to the libraries a different way that's a-ok!). The libraries the client started using are:

 - [Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/introduction/)
 - [jQuery](https://api.jquery.com/)
 - [Underscore.js](https://underscorejs.org/) - A library adding some useful functionality to JavaScript, like the `_.shuffle()` method.

From there, you should just be able to drag and drop the `index.html` into your browser & start working.

If you need help getting setup: https://www.youtube.com/watch?v=x-QJPDtuTNQ&list=PLsqSLeo9DZwT7b8dyLroiUN-OJDw8MBDM&index=1

### When you're done

Commit your changes & push them up to your forked repo. Then open a Pull Request against https://github.com/MikeRogers0/code-challenge--space-images, we'll review you work remotely!

## Your tasks

### Task 1: "See other images"

You client wants the visitors to be shuffle though all the images (Not just the 3 they pre-selected). They've not fussed about repeats, but just something to make the site feel more dynamic. 

They decided it would be nice to add a "See other images" button, which upon being clicked would make an AJAX call their `images.json` file, shuffle the response, then update the images in the `.image-collection` div tag.

Video of how to complete this: https://www.youtube.com/watch?v=l4MVwmVE9qk&list=PLsqSLeo9DZwT7b8dyLroiUN-OJDw8MBDM&index=2

### Task 2: "Random first"

The client wants the images to change with each page load, so every time they view the site it feels like a new set of images. 

Video of how to complete this: https://www.youtube.com/watch?v=AZkXOPTGU2s&index=3&list=PLsqSLeo9DZwT7b8dyLroiUN-OJDw8MBDM

### Task 3: "Images look squished on my mobile"

The client loved what you've done so far! But when they looked at it on their phone, the images were way to small (They made a real scene, then ate all the biscuits!)!

Find a way to use the grid system in Bootstrap to make the images larger on smaller screens, while on desktops still show 3 per a row.

Video of how to complete this: https://www.youtube.com/watch?v=wpr6SNkZg10&index=4&list=PLsqSLeo9DZwT7b8dyLroiUN-OJDw8MBDM

### Task 4: "Click to download"

The client really wants people be able to download some of the images on the site by making them downloadable. Find a way to add a download button under each image, when upon clicking will download the image (Not just open it in a new tab). The [download](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes) attribute might be helpful here.

### Task 5: "Change number of images per a page"

This isn't required, but the client mentioned sometimes they'd one day like to vary the amount of images shown per a page! See if you can show up to 12 per a page.

## Credits

Images from: https://imgur.com/gallery/lgibJ
