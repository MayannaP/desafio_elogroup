import { useState } from "react";
import AddLeadView from "../views/AddLeadView";

export default function AddLeadController({setAddLead}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [savedLead, setSavedLead] = useState(false);

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
    if (!leads) { 
      leads = [];
    }

    const newLead = {
      id: leads.length+1,
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
      setAddLead={setAddLead}
      setEmail={setEmail}
      handleClick={handleClick}
      savedLead={savedLead}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      handleSelectAll={handleSelectAll}
    />
  )
}