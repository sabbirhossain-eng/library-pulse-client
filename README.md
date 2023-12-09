# Library Pules
Library Management System

- [@website live link](https://library-pulse.web.app/)

- Some of the features of the project are mentioned below

- Added 4 pages to navbar.
Home page, Add Book, All books and Borrowed Books
Also added related logo and login button to the project.

- For Home page : 
Added Category Related Banners. And banners are used in marquees. which displays the categories. And category related icons are used If you click where to category books.blogs show Popular Content show the home page.

- For Login / Registration page: 
SignInWithEmailAndPassword method and createUserWithEmailAndPassword method of firebase package are used for login page. If the user is not registered then the toggle option is given below. And user must register with his photo url and email password.

- For Add Book page: 
Book add form taken. Where the book can be added with URL, name, author, category, quantity, rating.
If book add success, sweet alert will be given, if error, sweet alert will be given.

- Use Private Route: 
All pages except home page are placed in private route. To go there, the user must register or login.

- Specialties of Login and Registration page: 
If the user does Login or Registration then he will be taken to the home page. If a user logs in while entering the private route, he will be taken to the private route. Toast alert will be given when Login and Registration is submitted or any error is found.

# More features are included:
Clicking on category in home will show category related books. And clicking on the details of that book will open the details route. The details of the book can be seen there.
User must register or login to view book details. User can borrow books on details page. When the user borrows a book the quantity will be reduced by one and will be credited to the Borrowed Books page. And returning from there will return the quantity again.