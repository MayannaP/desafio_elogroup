import LeadsView from '../views/LeadsTableView';
import { useState } from 'react';

export default function Leads() {  
  const [addLead, setAddLead]=useState(false); 
  
  const leads = JSON.parse(localStorage.getItem('leads'));

  function handleClick() {
    setAddLead(true);
  }
  
  return(
    <LeadsView 
      handleClick={handleClick}  
      leads={leads}
      setAddLead={setAddLead}
      addLead={addLead}
    />
  )
}