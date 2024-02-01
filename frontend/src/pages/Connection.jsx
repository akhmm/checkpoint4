import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext";
import Navbar from "../components/Navbar";

function Connection() {
  // todo : importer le setter "setUserInfos" via Useconext
  const { setUserInfos } = useUser();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      const res = await axios.post("http://localhost:3310/api/login", {
        inputUsername: username,
        inputPassword: password,
      });
      if (res.status === 200) {
        setUserInfos(res.data);
        navigate("/admin");
      }
    } catch (e) {
      console.info(e);
    }
  };

  return (
    <div className="connection-container">
      <Navbar />
      <form onSubmit={handleLogin}>
        <h1>Connection</h1>
        <label htmlFor="name">Username</label>
        <input
          className="input-name"
          type="text"
          name="username"
          ref={usernameRef}
          required
        />
        <label htmlFor="password">Mot de pass</label>
        <input
          type="text"
          className="input-password"
          name="password"
          id="password"
          ref={passwordRef}
          required
        />
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Connection;
