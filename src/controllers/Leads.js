import LeadsView from '../views/LeadsTableView';
import { useEffect} from 'react';
import useLeads from '../hooks/useLeads';

export default function Leads() {  
  const { leads, setLeads, addLead, setAddLead } = useLeads(); 

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