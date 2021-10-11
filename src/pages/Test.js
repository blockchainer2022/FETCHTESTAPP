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
          `https://ipfs.io/ipfs/QmbKjG9DR2KfHmdkjbuRDnXWkm84BUnrYBm3aWDc4pikAT/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
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
        <pre>
          <>{JSON.stringify(data, undefined, 2)}</>
        </pre>
      )}
    </div>
  );
};

export default Test;
