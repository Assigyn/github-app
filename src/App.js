import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import {useEffect, useState} from "react";

function App() {
  const [profile, setProfile] = useState([]);
  const [userName, setUserName] = useState('assigyn');

  useEffect(() => {
      fetch(`https://api.github.com/users/${userName}`)
          .then((response) => {
             if (200 === response.status) {
                 return response.json();
             }
          }).then((json) => {
              setProfile(json);
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
