import "./App.css";
import { getHashParams } from "./utils/utils";
import axios from "axios";

function App() {
  const saveHashParams = () => {
    localStorage.setItem("access_token", getHashParams().access_token);
  };

  const getMyInfo = () => {
    axios
      .get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div className="App">
      <button>
        <a href="http://localhost:8080/login">Login!</a>
      </button>
      <button onClick={saveHashParams}>Get Hash params</button>
      <button onClick={getMyInfo}>Display Me</button>
      <p></p>
    </div>
  );
}

export default App;
