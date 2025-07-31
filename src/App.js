import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState([]);
  const [userName, setUserName] = useState('assigyn');

  useEffect(() => {
      axios(`https://api.github.com/users/${userName}`)
          .then((response) => {
             if (200 === response.status) {
                 setProfile(response.data);
             }
          });
  },[userName]);

  return (
    <div className="page-container">
      <Header setUserName={setUserName}/>
      <Nav profile={profile}/>
      <Profile profile={profile}/>
    </div>
  );
}

export default App;
