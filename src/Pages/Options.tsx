import React, { useState } from 'react';
import axios from 'axios';

const Options: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // State for storing scraped data
  const [error, setError] = useState<string | null>(null); // State for error messages

  const token = localStorage.getItem('token'); // Get the token from local storage

  // Function to scrape data from Hacker News
  const handleScrape = async () => {
    try {
      const response = await axios.get('https://localhost:7294/api/hackernewscrawler/scrape', {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the request headers
        },
      });
      setData(response.data); // Store the fetched data
      setError(null); // Reset error
    } catch (error) {
      setError('Error fetching data.'); // Set error message on failure
      console.error('Error:', error); // Log the error
    }
  };

  // Function to filter titles with more than five words
  const handleFilterMoreThanFiveWords = async () => {
    try {
      const response = await axios.get('https://localhost:7294/api/hackernewscrawler/filter/morethanfivewords', {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the request headers
        },
      });
      setData(response.data); // Store the filtered data
      setError(null); // Reset error
    } catch (error) {
      setError('Error fetching data.'); // Set error message on failure
      console.error('Error:', error); // Log the error
    }
  };

  // Function to filter titles with less than five words
  const handleFilterLessThanFiveWords = async () => {
    try {
      const response = await axios.get('https://localhost:7294/api/hackernewscrawler/filter/lessthanfivewords', {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the request headers
        },
      });
      setData(response.data); // Store the filtered data
      setError(null); // Reset error
    } catch (error) {
      setError('Error fetching data.'); // Set error message on failure
      console.error('Error:', error); // Log the error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-7xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Choose an Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={handleScrape} // Trigger scraping when clicked
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Scrape Hacker News
          </button>
          <button
            onClick={handleFilterMoreThanFiveWords} // Trigger filtering for titles with more than 5 words
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Filter Titles with More Than 5 Words
          </button>
          <button
            onClick={handleFilterLessThanFiveWords} // Trigger filtering for titles with less than 5 words
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
          >
            Filter Titles with Less Than 5 Words
          </button>
        </div>

        {/* Display error message if it exists */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Show data if available */}
        {data.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
                <p className="text-gray-600">
                  <strong>Rank:</strong> {item.rank}
                </p>
                <p className="text-gray-600">
                  <strong>Points:</strong> {item.points}
                </p>
                <p className="text-gray-600">
                  <strong>Comments:</strong> {item.comments}
                </p>
                <p className="text-gray-600">
                  <strong>Word Count:</strong> {item.wordCount}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
