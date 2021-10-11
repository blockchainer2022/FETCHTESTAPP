import React, { useEffect, useState } from "react";
import axios from "axios";
const Test = ({ match }) => {
  const [data, SetData] = useState({});
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(false);

  const { id } = match.params;

  useEffect(() => {
    const getData = async () => {
      try {
        SetLoading(true);
        const { data } = await axios.get(
          `https://ipfs.io/ipfs/QmbKjG9DR2KfHmdkjbuRDnXWkm84BUnrYBm3aWDc4pikAT/${id}`
        );

        SetData(data);
        SetLoading(false);
      } catch (error) {
        SetError(true);
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      {error ? (
        "Sorry Something is Wrong "
      ) : loading ? (
        "Wait Data is on the way"
      ) : (
        <>
          <h1>{data.name}</h1>
          <img src={data.image} alt="dataImage" style={{ width: 300 }} />
        </>
      )}
    </div>
  );
};

export default Test;
