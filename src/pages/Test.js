// import React, { useEffect, useState } from "react";
// import axios from "axios";
const Test = ({ match }) => {
  // const [data, SetData] = useState({});
  // const [loading, SetLoading] = useState(true);
  // const [error, SetError] = useState(false);

  const { id } = match.params;
  const data = {
    name: `NFC Certificate #0000${id}`,
    description: "NFC certificate to prove the authenticity",
    image:
      "https://ipfs.io/ipfs/QmUMXovq7NRFsjwqfpd7Bg1XyHqBgH1oaiiNfRgHemjvo8",
    external_url: "https://xyz.com",
  };
  return (
    <div>
      {/* {error ? (
        "Sorry Something is Wrong "
      ) : loading ? (
        "Wait Data is on the way"
      ) : (
        <pre>
          <>{JSON.stringify(data, undefined, 2)}</>
        </pre>
      )} */}
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
};

export default Test;
