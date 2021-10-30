import { useState } from "react";
import AddLeadView from "../views/AddLeadView";

export default function AddLeadController() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [savedLead, setSavedLead] = useState(false);

  if (!localStorage.getItem('leads')) { 
      const leads = [{ 
          name: 'Mayanna', 
          phone: "999999999", 
          email: "mayannaporto@hotmail.com", 
          opportunities: "RPA",
          status: 0
        }, 
        { 
          name: 'Mayanna', 
          phone: "999999999", 
          email: "mayannaporto@hotmail.com", 
          opportunities: "RPA",
          status: 1
        }]
      const newLeads = JSON.stringify(leads);
      localStorage.setItem('leads', newLeads)
  }

  function handleClick(e) {
    e.preventDefault();
    setSavedLead(false);
    setErrorMessage('');
    
    if (!name) {
      return setErrorMessage('O campo nome é obrigatório!')
    }
    
    if (!phone) {
      return setErrorMessage('O campo telefone é obrigatório!')
    }
    
    if (!email) {
      return setErrorMessage('O campo email é obrigatório!')
    }
    
    const opportunities = []; 
    const checkboxes = document.getElementsByName('checkbox');
    checkboxes.forEach(box => box.checked ? opportunities.push(box.value): '');
    
    if (!opportunities.length) { 
      return setErrorMessage('Selecione ao menos um dos itens de "oportunidades".')
    }
    
    let leads = JSON.parse(localStorage.getItem('leads'));

    const newLead = { 
      name, 
      phone, 
      email, 
      opportunities,
      status: 0
    }
    leads.push(newLead)
    localStorage.setItem('leads', JSON.stringify(leads))

    setSavedLead(true);
  }
  
  function handleSelectAll(e) {
    const checkboxes = document.getElementsByName('checkbox'); 
    checkboxes.forEach(box => box.checked = e.target.checked);
  }
  
  return (
    <AddLeadView 
      setName={setName}
      setPhone={setPhone}
      setEmail={setEmail}
      handleClick={handleClick}
      savedLead={savedLead}
      errorMessage={errorMessage}
      handleSelectAll={handleSelectAll}
    />
  )
}