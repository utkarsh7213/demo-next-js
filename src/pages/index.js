// pages/index.js

import React from 'react';

const Home = ({ message }) => {
  return (
    <div>
      <h1>Server-side Rendered Data</h1>
      <p>{message}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from the API route
  const response = await fetch('https://demo-next-js-eight.vercel.app/api/hello');
  const data = await response.json();

  return {
    props: {
      message: data.message
    }
  };
}

export default Home;
