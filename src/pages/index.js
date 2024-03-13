// pages/demo.js

import React from 'react';

const Demo = ({ data }) => {
  return (
    <div>
      <h1>Demo Component</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from a demo API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default Demo;
