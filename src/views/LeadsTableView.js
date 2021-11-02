import logo from '../assets/elogroup.png';
import AddLead from '../controllers/AddLead';
import './LeadsTableStyle.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useCallback, useState } from 'react';
import { Column } from './Column';

export default function LeadsView({ handleClick, leads, setLeads, addLead, setAddLead }) {

  const [lastChangedRow, setLastChangedRow] = useState('');

  const handleDrop = useCallback((index, item) => {
    console.log(index, item)
    const { name } = item;

    const updatedLeads = leads.map(lead => {
      return lead.name === name ? { name, status: lead.status + 1 } : lead;
    });

    localStorage.setItem('leads', JSON.stringify(updatedLeads))
    setLeads(updatedLeads);
    setLastChangedRow(index);
  })


  return (
    <div>
      <img src={logo} alt="" />
      <h1>Painel de Leads</h1>
      <button onClick={handleClick}>Novo Lead (+)</button>
      <DndProvider backend={HTML5Backend}>
        <table className="table" >
          <thead>
            <tr>
              <th>Cliente em potencial</th>
              <th>Dados confirmados</th>
              <th>Reunião Agendada</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => {
              return (
                <tr>
                  <Column
                    accept={""}
                    onDrop={(item) => handleDrop(index, item)}
                    key={'Col1-Row' + index}
                    lead={lead.status === 0 ? lead : undefined}
                    actualStage={"0"}
                    index={index}
                    lastChangedRow={lastChangedRow}
                  />
                  <Column
                    accept={"0"}
                    onDrop={(item) => handleDrop(index, item)}
                    key={'Col2-Row' + index}
                    lead={lead.status === 1 ? lead : undefined}
                    actualStage={"1"}
                    index={index}
                    lastChangedRow={lastChangedRow}
                  />
                  <Column
                    accept={"1"}
                    onDrop={(item) => handleDrop(index, item)}
                    key={'Col3-Row' + index}
                    lead={lead.status === 2 ? lead : undefined}
                    actualStage={"2"}
                    index={index}
                    lastChangedRow={lastChangedRow}
                  />
                </tr>
              )
            })}
          </tbody>
        </table>
      </DndProvider>
      {
        addLead &&
        <AddLead setAddLead={setAddLead} />
      }
    </div>
  )
}