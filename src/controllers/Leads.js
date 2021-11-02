import LeadsView from '../views/LeadsTableView';
import { useState } from 'react';

export default function Leads() {  
  const [addLead, setAddLead]=useState(false); 
  const [leads, setLeads] = useState([{name: "joao", status: 0}, {name: "ds", status: 2}]);
  const newLeads = JSON.parse(localStorage.getItem('leads')); 

  function handleClick() {
    setAddLead(true);
  }
  
  return(
    <LeadsView 
      handleClick={handleClick}  
      leads={leads}
      setLeads={setLeads}
      setAddLead={setAddLead}
      addLead={addLead}
    />
  )
}