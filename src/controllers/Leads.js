import LeadsTableView from '../views/LeadsTableView';
import { useEffect, useState } from 'react';

export default function Leads() {  
  const [addLead, setAddLead]=useState(false); 
  
  const leads = JSON.parse(localStorage.getItem('leads'));
  useEffect(()=> { 
    console.log(leads)
  }, [])

  function handleClick() {
    setAddLead(true);
  }
  
  return(
    <LeadsTableView 
      handleClick={handleClick}  
      leads={leads}
      addLead={addLead}
    />
  )
}