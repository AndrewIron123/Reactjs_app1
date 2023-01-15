import React, { useState, useEffect } from 'react';
function Sidebar() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);



  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL_CATEGORIES)
      .then(res => res.json())
      .then(
        (result) => {
          setIsDataLoaded(true);
          setData(result);
          console.log(result);
        },
        (error) => {
          setIsDataLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return (
      <span className="sidebar">
        <div>error.message</div>
      </span>
    );
  } else if (!isDataLoaded) {
    return (
      <span className="sidebar">
        <div>Loading...</div>
      </span>
    );
  } else {
    return (
      <span className="sidebar">
        {
          data.map((arrElement) => <div key={arrElement.id}>{arrElement.name}</div>)
        }
      </span>
    );
  }
}

export default Sidebar;