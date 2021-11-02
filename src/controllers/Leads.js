import LeadsView from '../views/LeadsTableView';
import { useEffect, useState } from 'react';

export default function Leads() {  
  const [addLead, setAddLead]=useState(false); 
  const [leads, setLeads] = useState([]);

  useEffect( ()=> { 
    const savedLeads = JSON.parse(localStorage.getItem('leads'));
  
    if (savedLeads) { 
      setLeads(savedLeads);
    }
    console.log('Renderizou')
  }, [addLead]);
  
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