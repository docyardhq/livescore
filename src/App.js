import { useState } from "react";

const App = () => {
  const [liveData, setLiveData] = useState(null);
  const [listData, setListData] = useState(null);

  const fetchLiveData = () => {
    fetch(
      "https://api.cricapi.com/v1/match_info?apikey=2a8b9485-f848-447c-9db1-1f39345d3cc5&offset=0&id=820cfd88-3b56-4a6e-9dd8-1203051140da"
    )
      .then((response) => response.json())
      .then((data) => setLiveData(data))
      .catch((error) => console.log(error));
  };

  const fetchListData = () => {
    fetch(
      "https://api.cricapi.com/v1/series_info?apikey=2a8b9485-f848-447c-9db1-1f39345d3cc5&offset=0&id=47b54677-34de-4378-9019-154e82b9cc1a"
    )
      .then((response) => response.json())
      .then((data) => setListData(data))
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ padding: "1rem" }}>
        <button style={{ padding: "1rem" }} onClick={fetchLiveData}>
          LIVE
        </button>
        {liveData && (
          <pre style={{ padding: "1rem", whiteSpace: "pre-wrap" }}>
            {JSON.stringify(liveData, null, 2)}
          </pre>
        )}
      </div>
      <div style={{ padding: "1rem" }}>
        <button style={{ padding: "1rem" }} onClick={fetchListData}>
          LIST
        </button>
        {listData && (
          <pre style={{ padding: "1rem", whiteSpace: "pre-wrap" }}>
            {JSON.stringify(listData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default App;

