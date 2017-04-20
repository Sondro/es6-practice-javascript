const savedFile = {
  extension: '.jpg';
  name: 'repost',
  size: 14014
};

// Without Destructuring
function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

// With Destructuring
function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

// We can also add more arguments
function fileSummary({ name, extension, size }, { message }) {
  return `${message}. The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFile, { message: 'Hello!' });
