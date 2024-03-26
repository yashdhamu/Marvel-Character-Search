# Marvel Character Search

Marvel Character Search is a web application that allows users to search for Marvel comic characters using the Marvel API. Users can enter a search query to find characters matching the query and view details about each character.

## Features

- Search for Marvel comic characters by name.
- Pagination support for browsing through multiple pages of search results.
- Display detailed information about each character, including name, description, and image.
- Responsive design for optimal viewing on different devices.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating
- Axios for making HTTP requests to the Marvel API
- Supertest and Jest for testing
- HTML, CSS, and JavaScript for frontend

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Install dependencies:

```bash
npm install
```


3. Obtain API keys from the [Marvel Developer Portal](https://developer.marvel.com/) by signing up for an account.

4. Input the public and private keys obtained in app.js:

```javascript
publicKey = 'YOUR_PUBLIC_KEY'
privateKey = 'YOUR_PRIVATE_KEY'
``` 

6. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Enter a search query in the search bar and press Enter or click the Search button to find Marvel characters matching the query.
- Use the pagination controls at the bottom of the page to navigate through multiple pages of search results.

## Testing

To run tests, use the following command:

```bash
npm test
```


## Contributing

Contributions are welcome! If you have any ideas for improvements or find any issues, please open an issue or submit a pull request.
