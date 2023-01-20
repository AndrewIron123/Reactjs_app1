import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
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
        <div>{error.message}</div>
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
          data.map((arrElement) =>
            <div key={arrElement.id} className="sidebar--element">
              <div className="sidebar--button">{arrElement.name}</div>
              <div className="sidebar--dropdown__content">
                <Link to="/" className="sidebar--dropdown__link">Home</Link>    
                <Link to="calendar" className="sidebar--dropdown__link">Make an appointment</Link>
                <Link to="calendar" className="sidebar--dropdown__link">Make an appointment</Link>
                <Link to="calendar" className="sidebar--dropdown__link">Make an appointment</Link>
              </div>
            </div>
            )
        }
      </span>
    );
  }
}

export default Sidebar;