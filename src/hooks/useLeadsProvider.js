import { useState } from "react";

export default function useLeadsProvider() {
  const [ leads, setLeads ] = useState([]);
  const [addLead, setAddLead] = useState(false); 
  const [savedLead, setSavedLead] = useState(false);

  const saveLeadstoLocalStorage = (newLead) => { 
    let leads = JSON.parse(localStorage.getItem('leads'));
    if (!leads) { 
      leads = [];
    }
  
    leads.push(newLead);
    localStorage.setItem('leads', JSON.stringify(leads));
  }

  return { 
    saveLeadstoLocalStorage, 
    leads, 
    setLeads, 
    addLead, 
    setAddLead, 
    savedLead, 
    setSavedLead
  }
}


// export default function useProvideAuth() {
//   const [token, setToken] = useState(null);
//   const [userInfo, setUserInfo] = useState({});

//   const logar = async (userName, callback) => {

//       const response = await fetch(`https://api.github.com/users/${userName}`, {mode: 'cors'})
//       const text = await response.text();
//       setUserInfo(JSON.parse(text));
//       console.log(JSON.parse(text));
//       if (response.status !== 200) { 
//         return; 
//       }

//     setToken("user");
//     callback();
//   };

//   const deslogar = (callback) => {
//     setToken(null);
//     callback();
//   };

//   return {
//     token,
//     logar,
//     deslogar, 
//     userInfo
//   };
// }
