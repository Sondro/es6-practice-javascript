/*
  Note: This section will not make use of const/let or other
  ES6 syntax and/or features such as Arrow functions
*/

// Creates an array of products
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

/*
  Filters products array to show only vegetables
  who are in stock and its price is less than 10
*/
products.filter(function(product) {
  return product.type === 'vegetable'
    && product.quantity > 0
  	&& product.price < 10
});

// Creates a post object and an array of comments
var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'Post 1' },
  { postId: 3, content: 'Post 2' },
  { postId: 4, content: 'Post 4' }
];

// Filters comments that belongs to a chosen post
function commentsForPosts(post, comments) {
 return comments.filter(function(comment) {
   return comment.postId === post.id;
 });
}
