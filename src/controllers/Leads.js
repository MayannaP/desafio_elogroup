import LeadsView from '../views/LeadsView';
import { useEffect, useCallback, useState} from 'react';
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

  const [lastChangedRow, setLastChangedRow] = useState('');


  const handleDrop = useCallback((index, item) => {
    if (item.status === 2) return; 

    const { name } = item;
    console.log(item)

    const updatedLeads = leads.map(lead => {
      return lead.name === name ? { ...lead, status: lead.status + 1 } : lead;
    });

    localStorage.setItem('leads', JSON.stringify(updatedLeads))
    setLeads(updatedLeads);
    setLastChangedRow(index);
  })
  
  const stages = [
    {
      stage: 0
    },
    {
      stage: 1
    },
    {
      stage: 2
    }
  ]

  return(
    <LeadsView 
      handleClick={handleClick}  
      leads={leads}
      setAddLead={setAddLead}
      addLead={addLead}
      lastChangedRow={lastChangedRow}
      handleDrop={handleDrop}
      stages={stages}
    />
  )
}