import logo from '../assets/elogroup.png';
import AddLead from '../controllers/AddLead';
import 'C:/Users/May/Desktop/desafio_elogroup/desafio_elogroup/src/styles/LeadsTableStyle.css';
import { Column } from './Column';

export default function LeadsView({ handleClick, leads, addLead, setAddLead, handleDrop, lastChangedRow }) {

  return (
    <div>
      <img src={logo} alt="" />
      <h1>Painel de Leads</h1>
      <button onClick={handleClick}>Novo Lead (+)</button>
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
      {
        addLead &&
        <AddLead setAddLead={setAddLead} />
      }
    </div>
  )
}