function getPostsFromAPI() {
  // Replace this with the URL of the JSON API that returns an array of image URLs
  const url = 'https://3000-mccafferys1-tacogramfin-dewiq66hsum.ws-us120.gitpod.io/posts.json';
  if (url == 'YOUR_URL_GOES_HERE') {
    alert('Error: Replace url value in tacostagram.js')
  }

  alert('getting posts')
  
  // Make a GET request to the API
  fetch(url)
    .then(response => response.json()) // Parse the response as JSON
    .then(posts => {
      const postsDiv = document.querySelector('#posts');
      postsDiv.innerHTML = ''; // Clear previous content if needed

      // Loop through the array of posts and build html for each
      for (let post of posts) {
        // Log post data to browser console
        console.log(post);

        // html for each post goes here
        let html = `
          <div class="col-md-6 col-lg-3">
            <img src="${post["image"]}" class="img-fluid">
            <p>${post["body"]}</p>
          </div>
        `;

        // Append to <div id="posts">
        postsDiv.innerHTML += html
      };
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}

const getPostsButton = document.querySelector('#get-posts-button');
getPostsButton.addEventListener('click', getPostsFromAPI);
