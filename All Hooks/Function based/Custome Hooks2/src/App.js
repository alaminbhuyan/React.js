import React from "react";
import useFetch from "./FetchData";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <React.Fragment>
      {
        data && data.map((item) => {
          return (
            <p key={item.id}>{item.title}</p>
          )
        })
      }
    </React.Fragment>
  );
};

export default App;
