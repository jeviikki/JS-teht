// Step 1: Object Destructuring
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Classic"
};

function displayBookInfo(book) {
  const { title, author, year } = book;
  
  console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);
}

// Step 2: Array Destructuring
const bookList = [
  book,
  {
	title: "Storytime",
	author: "May Dup",
	year: 2026,
	genre: "Fiction",
  },
];

function listBookTitles(bookList) {
  const titles = [];
  for (const book of bookList) {
	const {title} = book;

	titles.push(title);
  }
  return titles;
}

// Step 3: Nested Object Destructuring
const bookWithPublisher = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasy",
  publisher: {
	name: "Scholastic",
	location: "New York"
  }
};

function displayPublisherLocation(book) {
  const { publisher: {location} } = book;
  
  console.log(`Publisher Location: ${location}`);
}

// Step 4: Default Values in Destructuring
const incompleteBook = {
  title: "Incomplete Book"
  // author and year properties are missing
};

function fillMissingInfo(book) {
  const { title = "Unnamed Book", author = "Unknown Author", year = "Unknown Year" } = book;

  console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);
}

// Step 5: Challenge (Optional)
function swapProperties(book) {
	let {title, author} = book;
	[title, author] = [author, title];
	const newBook = {
		title: title,
		author: author
	};
	console.log("Book with Swapped title and author:", newBook);
	return newBook;
}

// Test the functions
displayBookInfo(book);
console.log(listBookTitles(bookList));
displayPublisherLocation(bookWithPublisher);
fillMissingInfo(incompleteBook);
swapProperties(bookList[1]);
console.log("original book:", bookList[1]);