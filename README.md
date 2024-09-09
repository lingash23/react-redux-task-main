# React Redux Task

This project demonstrates the use of React's `Redux` to manage a shopping cart. The cart allows users to increase or decrease item quantities, which automatically updates the total quantity and total amount.

## Features

- Fetches JSON data to populate the cart.
- Displays items in the cart with their title, description, price, and quantity.
- Allows users to increase or decrease item quantities.
- Updates total quantity and total amount dynamically.

### Fetching Data

The application fetches JSON data from the following URL:

[https://drive.google.com/file/d/1fOadeM1liwbUK38z92F0XYugk2jwqK2r/view?usp=share_link](https://drive.google.com/file/d/1fOadeM1liwbUK38z92F0XYugk2jwqK2r/view?usp=share_link)

From the above link, get JSON data and create a cart page with per item price, per item quantity, total quantity, and total amount.

## Demo

Check out the live project [here](https://arunkarthik0710-react-redux-task.netlify.app/).

---

## Folder Structure

```
react-redux-task/
├── node_modules/
├── public/
│   └── react.svg
├── src/
│   ├── components/
|   |   ├── Cart.jsx
│   |   └── ProductCard.jsx
│   ├── data/
|   |   └── product.json
│   ├── reducers/
|   |   ├── cartReducer.js
│   |   └── cartSlice.js
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
|   └── store.js
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/arunkarthik0712/react-redux-task.git
```

2. Navigate to the project directory:

```bash
cd react-redux-task
```

3. Install the dependencies:

```bash
npm install
```

---

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and go to `http://localhost:5173` to see the application.

---

## Acknowledgements

- [React](https://reactjs.org) for the JavaScript library.
- [Vite](https://vitejs.dev) for the build tool.
- [Netlify](https://app.netlify.com)For providing the platform to deploy the application.

---
