import InfiniteScroll from 'react-infinite-scroll-component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import React from 'react';
import Posts from './components/Posts';
import Loader from './components/Loader';
import EndMessage from './components/EndMessage';
import useFetchData from './components/FetchData';


function App() {
  // !Destructing the return object
  const {items, hasMore, fetchData} = useFetchData("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=30");

  return (
    <React.Fragment>

      <InfiniteScroll
        dataLength={items.length} // !This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMessage />}
      >
        {
          items.map((item) => {
            return (
              <Posts key={item.id} item={item} />
            )
          })
        }
      </InfiniteScroll>

    </React.Fragment>
  );
}

export default App;
