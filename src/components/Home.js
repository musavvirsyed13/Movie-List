import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import Nav from "./Nav";
const Home = () => {
  const [info, setInfo] = useState([{}]);

  const fetchData = () => {
    fetch("https://hoblist.com/api/movieList", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((data) => {
        console.log(data);
        if (data.message === "success") {
          setInfo(data.result);
        } else {
          //show error message saying that the API failed
          alert("Failed!! Please Try Again Later..");
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <h1>Movies List</h1>
      {info.map((e) => {
        return (
          <Movies
            title={e.title}
            genre={e.genre}
            voting={e.voting}
            poster={e.poster}
            director={e.director}
            stars={e.stars}
            pageViews={e.pageViews}
            runTime={e.runTime}
            releasedDate={e.releasedDate}
            language={e.language}
          />
        );
      })}
    </div>
  );
};

export default Home;
