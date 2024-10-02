# Web Crawler for Hacker News

## Overview

This project is a web crawler that extracts the first 30 entries from [Hacker News](https://news.ycombinator.com/). The crawler retrieves the entry number, title, points, and number of comments. Additionally, it provides filtering capabilities based on title length and comment/point count.

**Note: this is an extra app for showing data in a user friendly UI**

## Features

- **Web Scraping:** Extracts data from Hacker News.
- **Filtering Options:**
  - Entries with more than five words in the title, ordered by the number of comments.
  - Entries with five or fewer words in the title, ordered by points.
- **Usage Data Tracking:** Stores request timestamps and the applied filter.

## Technologies Used

- React (Frontend)
- ASP.NET Core (Backend)
- Axios (HTTP requests)
- Tailwind (CSS Styling)
- SQL Server (Database)

## Installation

### Prerequisites

- Node.js (v14 or later)
- WebCrawlerAPI [link](https://github.com/kwdiaz/WebCrawlerAPI) (API Side Project)

### Steps to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kwdiaz/WebCrawlerClient.git
   cd webcrawlerclient
2. **Set Up and Run the Backend:**
   - Open the `WebCrawlerAPI` project in Visual Studio.
   - If you haven't set up the backend yet, please refer to the instructions in the `WebCrawlerAPI`[link](https://github.com/kwdiaz/WebCrawlerAPI) repository for guidance on installation and configuration.
   - Start the backend application by selecting the appropriate launch settings in Visual Studio and running the project.

3. **Initialize the Frontend Application:**
   - In a new terminal window, navigate to the `WebCrawlerClient` directory (if you aren't already there).
   - Execute the following command to start the React application:
   ```bash
   npm start

# Additional default documentation 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
