import React, { useEffect, useState } from "react";
import axios from "axios";
const Test = ({ match }) => {
  const [data, SetData] = useState({});

  const { id } = match.params;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://ipfs.io/ipfs/QmbKjG9DR2KfHmdkjbuRDnXWkm84BUnrYBm3aWDc4pikAT/${id}`
      );
      console.log(data);
      SetData(data);
    };
    getData();
  }, [id]);

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt="dataImage" style={{ width: 300 }} />
    </div>
  );
};

export default Test;
