import "./InfiniteScroll.css";
import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

function InfiniteScroll(props) {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  function handleFetch() {
    setLoading(true);
    axios({
      method: "GET",
      url: props.url,
    }).then((res) => {
      setJokes((prevJokes) => {
        return [...prevJokes, ...res.data.jokes];
      });
      setLoading(false);
      console.log(" im here", res.data );
    });
  }

     const observer = useRef();
    const lastElementRef = useCallback( node => {
      // if(loading) return;
      if(observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
          if(entries[0].isIntersecting){
              handleFetch()
              console.log('Visible')
          }

      })
      if(node) observer.current.observe(node)
            }, [hasMore])

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="infiniteScrollWrapper">
      <>
        {jokes.map((item, i) => {
          if (jokes.length === i + 1) {
            return (
              <div key={item.joke} ref={lastElementRef}>
                <p> {i}</p>
                {item.joke}
              </div>
            );
          }
          return <div key={item.joke}><p> {i}</p> {item.joke}</div>;
        })}
      </>
    </div>
  );
}

export default InfiniteScroll;
