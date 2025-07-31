import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Toast from "./components/Toast";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState([]);
  const [userName, setUserName] = useState('assigyn');
  const [toast, setToast] = useState(null);

    useEffect(() => {
        axios(`https://api.github.com/users/${userName}`)
            .then((response) => {
               if (200 === response.status) {
                   setProfile(response.data);
               }
            })
            .catch((response) => {
                setToast({
                    title: `Error ${response.status}`,
                    text: response.message,
                    type: 'error'
                })
            });
    },[userName]);

    useEffect(() => {
        if (null !== toast) {
            const toastMessage = document.getElementById('toast-message');
            toastMessage.classList.remove('d-none');

            setTimeout(() => {
                toastMessage.classList.add('d-none');
            }, 10000);
        }
    },[toast]);


    return (
    <div className="page-container position-relative">
      <Header setUserName={setUserName}/>
      <Nav profile={profile}/>
      <Profile profile={profile}/>
      <Toast toast={toast}/>
    </div>
  );
}

export default App;
