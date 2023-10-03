import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  //boolean tells us if we received data from our API
  const [isLoading, setIsLoading] = useState(true);
  //data contains the data we received
  const [data, setData] = useState();
  
  //fetch data when loading for the first time
  useEffect(() => {
    fetch("https://swapi.dev/api/people/", {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.results);
        //stop loading anymore
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      {/* Once loading has stopped we map the data out */}
      {!isLoading &&
        data.map((person, index) => {
          return (
            <h5 key={index}>
              <Link to={`/person/${index + 1}`}>{person.name}&apos;s Page</Link>
            </h5>
          );
        })}
    </>
  );
};
  
export default HomePage;