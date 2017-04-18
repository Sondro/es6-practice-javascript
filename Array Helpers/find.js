/*
  Note: This section will not make use of const/let or other
  ES6 syntax and/or features such as Arrow functions
*/

// Creates an array of users
var users = [
  { name: 'John' },
  { name: 'Jim' },
  { name: 'Jill' }
];

// Find the chosen username in the array
users.find(function(user) {
  return user.name === 'Alex';
});

// Creates an array of posts
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

// Create a comment object
var comment = { postId: 1, content: 'Great Post' };

// Find the comment that matches the right post
function postForComment(posts, comment) {
	return posts.find(function(post) {
    return post.id === comment.postId;
  });
}
