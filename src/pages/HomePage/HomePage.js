import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import { useEffect, useState } from "react";
import axios from 'axios';

function HomePage(){

  
    return (
      <>
        <h1 className="heading"> Home Page</h1>
        <InfiniteScroll
          url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single&amount=50"
          
        ></InfiniteScroll>
      </>
    );
}

export default HomePage;