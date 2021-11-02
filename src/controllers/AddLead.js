import { useState } from "react";
import AddLeadView from "../views/AddLeadView";
import useLeads from "../hooks/useLeads";

export default function AddLeadController({setAddLead}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [savedLead, setSavedLead] = useState(false);
  const { saveLeadstoLocalStorage } = useLeads(); 
  
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

    const newLead = {
      id: 20,
      name, 
      phone, 
      email, 
      opportunities,
      status: 0
    }

    saveLeadstoLocalStorage(newLead);
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