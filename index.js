/* 

Let's say you have an HTML file that
contains a list of blog posts, where each post is represented by a div element with a title and author class. Kindly extract the titles and authors of each post and store them in separate arrays
using destructuring.

*/


const blogPosts = document.querySelectorAll('.post'); 

let titles = [], authors = []; 

blogPosts.forEach(post => {
  const {title, author} = post.dataset; 
  titles.push(title); 
  authors.push(author);
});


console.log(titles); 
console.log(authors);

