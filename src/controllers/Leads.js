import LeadsView from '../views/LeadsView';
import { useEffect, useCallback} from 'react';
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

  const handleDrop = useCallback((item, leadId) => {
    if (item.status === 2) return; 

    const updatedLeads = leads.map(lead => {
      return lead.id === leadId ? { ...lead, status: lead.status + 1 } : lead;
    });

    localStorage.setItem('leads', JSON.stringify(updatedLeads))
    setLeads(updatedLeads);
  })

  const stages = [0, 1, 2]

  return(
    <LeadsView 
      handleClick={handleClick}  
      leads={leads}
      setAddLead={setAddLead}
      addLead={addLead}
      handleDrop={handleDrop}
      stages={stages}
    />
  )
}