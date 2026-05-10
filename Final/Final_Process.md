Link to presentation:
https://docs.google.com/presentation/d/1iXogXHIShj-Ja9pvFcwKJNKes-eZ0uo_RCfVC_lC9b8/edit?usp=sharing

I started the process with the idea for a theatre review website similar to Letterboxd.

I then came up with the idea to add the "explore theatres near you" feature just so I can use the geolocator feature and showcase more coding skills we learned in class.

I began coding using Bootstrap. I used Bootstrap for the nav bar mainly because when it comes to customizing media query the nav bar is the most time consuming, and I already learned how to do it successfully during the midterm. This gives me more time me to add more media queries for not only on mobile but also tablet and large screens for the pages that really need them. I didn't take larger screens into consideration during the midterm, which made my midterm website look a lot worse than intended when I presented on the TV in class, so I really wanted to have more media queries this time around. (I forgot to show media queries during the presentation). Here are some media query code-snippets that I want to highlight.

```css
/* ----- HOME PAGE ----- */
@media (min-width: 768px) {
  .seashell {
    max-width: 219px;}
  .question {
    font-size: 2.5rem;}
.description {
    font-size: 1.6rem}
}

@media (min-width: 992px) { 
    .seashell {
    max-width: 283px;}
    .question {
    font-size: 3rem;}
.description {
    font-size: 2.1rem}
} 

@media (min-width: 1200px) { 
    .seashell {
    max-width: 342px;} 
    .question {
    font-size: 3rem;}
.description {
    font-size: 2.1rem}
}

/* ----- JOURNAL/REVIEW PAGE----- */
@media (min-width: 768px) {
    .container,
    #reviewList {
        max-width: 700px;}
    .heading {
        font-size: 2rem;}
}

@media (min-width: 992px) {
    .container,
    #reviewList {
        max-width: 850px;}
    .heading {
        font-size: 2.3rem;}

}

@media (min-width: 1200px) {
    .container,
    #reviewList {
        max-width: 1000px;}
    .heading {
        font-size: 2.6rem;}
}

@media (max-width: 767px) {
    .container,
     #reviewList {
        max-width: 95%;}
    .heading {
        font-size: 1.5rem;
        text-align: center;}
    #titleInput,
    #venueInput,
    #dateInput {
        width: 32.75%;} 
        /* I got to this number just through a trial and error process */
}
```

Bootstrap was extremely time consuming to figure out. I didn't know that you can link Bootstrap CSS and your own CSS file to the same HTML page. I spent a lot of time trying to download Bootstrap onto my computer and edit the source code (which you're not supposed to do, and I couldn't figure out how to do it either). Eventually, I gave up and just made my own style.css file like I normally would, and that works. It also took my a while to get used to the language of Bootstrap (for example: my = margin top/bottom, px = padding left/right). It is fairly intuiative once you get used to it though. I just use the website getbootstrap.com to teach me anything Bootstrap-related.

Once I know how to manipulated Bootstrap and successfully created a working nav bar, it's time for the fun part: coming up with the visual language of the website. My midterm website was really dark, moody and dramatic so I wanted to challenege myself to create something bright and more fun. I had a lot of fun with the pun (seeSHOWS, seashells), and I made everything beach themed. I picked the font Papryus because its texture feels like sand. I picked out the main seashell character on the website from the internet, then I used Photoshop to remove its background. I also used Photoshop to lower the opacity of the sandy background so that the texts would stand out more. I used a color picker on the internet to pick out the exact color (most dominant shade of blue) of the seashell character, and I used it as the color for the nav bar and any button element on the website.

After picking out all the visual elements, I started working on each individual page. 

----- STARTER (LOG IN PAGE) -----
With the help of Bootstrap, creating the log in & sign up modals was pretty easy, it was just a matter of copy and pasting and making sure every ID is changed. It took me the longest to figure out how to add a little bit of javascript so that you can't log in or sign up without actually typing in your email and password. After looking at some YouTube videos, I learned that it's pretty simple. 

```javascript
function login() {
  const email = document.querySelector("#log_in input[type='email']").value.trim();
  const password = document.querySelector("#log_in input[type='password']").value.trim();
//  I learned that adding .value.trim forces users to type something, not just bypass the system by pressing the space bar. The .trim property actually removes any blank spaces.

  if (!email || !password) {
    alert("All fields are required!");
    return;
  }
//   I learned that ! means empty

  window.location.href = "../home/index.html";
}
// This allows the user to immediately go to home page once they successfully log in or sign up. 
```

Another thing that was time consuming for me was dressing up the "Already have an account? Log in" button so it still functions like a button that switches between modal while looking like normal text. I just used trial and error and here's the final result

```css
.switch {
    background: rgba(0,0,0,0);
    font-size: small;
    width:max-content;
    text-decoration:underline;
    border: rgba(0,0,0,0);
}
```

-----HOME PAGE-----
The simplest page. No buttons, no complicated elements, just pure CSS and HTML for customizing images and texts. 

----EXPLORE/LOCATION PAGE
Since we learned how to use Leaflet and geolocation to our website in class and I'm confident that I understood how everything works, I mostly copied and pasted the codes, while changing some of the texts to make sure that it's customized to my website. 

```javascript
let status
      document.addEventListener('DOMContentLoaded', () => {
        status = document.getElementById('location')
        if (!('geolocation' in navigator)) {
          status.textContent = 'Geolocation is not supported in your browser.'
// This makes sure that any error is handled properly. It will changes the text from "Finding your location" to "Geolocation is not supported in your browser"
        } else {
          navigator.geolocation.getCurrentPosition(showOnMap, handleError)
// This allows you to get the user's current position
        }
      })

      const showOnMap = (position) => {
        const {latitude, longitude, accuracy} = position.coords
        status.innerHTML = `
          Location found!
        `
        const map = L.map('map').setView([latitude, longitude], 20)

        const containerBtn = document.getElementById("containerBtn");
        containerBtn.style.display = "flex";
// I added these two lines of code so the "View theatre in your city" would show up at the same time as the map. In the HTML file the button is hidden, so it will only show when your location is found successfull
      
```

Getting the geolocator to work was actually pretty easy. I tried to go above and beyond a little bit by trying to find a "store locator" widget that can show you all the theatres near you, but I couldn't figure it out. So the majority of the work I did for this page doesn't really work and was actually deleted.

-----THEATRES PAGE-----
Once you click on "View theatre in your city", you will be taken to a page with all 40 currently running Broadway shows. At its current stage, the website doesn't actually know the theatres in YOUR city if you're outside of New York. 

This page took me so so so so so long. I had to manually input the information for all the shows 2 or 3 times. I originally created a seperate JSON file, but I couldn't figure out how to properly link JSON to the HTML file. So I just created a Javascript file. Because the format is a little bit different, I had to re-type some of the information. Originally, I didn't want to bother with images, so I had written down "Title of Show", "Venue" and "Type". But then as I'm working on it I realized it looked a lot better with images, AND it looked more professional without any text. So I had to delete all the information regarding "Venue" and "Type" that I manually added, then I had to look up, download, and rename the image for each individual show. Then I had to find and input the link so clickling on each show would take you to the official ticketing page with all the information you need.

At first, I copied and pasted the code from the class where we created a randomized Rick & Morty character card, but that only gives me one randomized show each time I reload the page. I wanted a scrollable, Netflix-like layout with multiple pages. So I had to redo it, and I ended up with this after following a few YouTube videos

```javascript
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
// I learned what an array is and how to create a shuffled array. [i] creates three different arrays that are shuffled differently from each other, and [j] randomized all the shows within the array

function createRow(title, index) {
  const rowId = `row-${index}`;

  const shows = shuffleArray(theatre).slice(0, 12);
}
// I learned that .slice(0, 12) allows 12 shows to show up in one array, so you don't have to scroll forever for all 40 shows. It makes the website looks a little cleaner
```


----- JOURNAL/REVIEW PAGE -----
With this page, I wanted to use local storage to have a list of reviews and shows for each user be visible. I looked up a YouTube tutorial, and I learned how to create and convert a JSON string so that each review which holds multiple pieces of information can be held in local storage.

```javascript
// CREATE REVIEWS LOCAL STORAGE & CONVERT JSON STRING
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

// RENDER REVIEWS ON TO THE PAGE
function renderReviews() {
  const list = document.getElementById("reviewList");
  list.innerHTML = "";

// WHAT DOES EACH REVIEW INCLUDE?
  reviews.forEach((review, index) => {
    const revDiv = document.createElement("revDiv");
      revDiv.className = "review-card";

    revDiv.innerHTML = `
      <h3>${review.title}</h3>
      <p><strong>Venue:</strong> ${review.venue}</p>
      <p><strong>Date Watched:</strong> ${review.date}</p>
      <p class="review-text">${review.text}</p>

      <div class="actions">
        <button onclick="deleteReview(${index})">Delete</button>
      </div>
    `;
// PUT EACH REVIEW INTO LIST
    list.appendChild(revDiv);
  });

  localStorage.setItem("reviews", JSON.stringify(reviews));
}

// ADD REVIEW BUTTON - I applied the same principal that I learned when coding the log in/sign up page as I didn't want users to be able to submit anything with an empty field.
function addReview() {
  const title = document.getElementById("titleInput").value.trim();
  const venue = document.getElementById("venueInput").value.trim();
  const date = document.getElementById("dateInput").value;
  const text = document.getElementById("reviewInput").value.trim();

  if (!title || !venue || !date || !text) {
    alert("Please fill in all fields");
    return;
  }
}
```

-----PERSONAL INFO/LOG OUT PAGE-----
I kept this page pretty simple code wise, because in a dream world I will continue to develop this website into an actual social media page, where you can have your username and bio displayed, and the codes will be a lot more complicated. Right now without that user database, I didn't want to waste time creating fake profile, just wanted to have functioning text boxes so I can see what it looks like, and make sure all the buttons work. The "Update" button doesn't actually do anything, but the page will reload (I imagine in the finished version of this your username and bio will look different when you reload) There's also a modal that pops up when you click "Change Password", and all the codes are fairly similar to the log in/sign up page. The "Log Out" button just takes you to the log in/sign up page, which essentially logs you out because it is the only page without a nav bar, and you can't access any other pages without signing up or logging in. 

Overall, I had a lot of fun creating this website. I really wanted to challenge myself with creating something completely new and different from my midterm, while showcasing all the new skills that I learned in the second half of the semester. What was especially difficult for me was understanding the basics of javascript, so my main focus was to work with javascript as much as possible. I learned a lot about how it works in conjunction with HTML and CSS.