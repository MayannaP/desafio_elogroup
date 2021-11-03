import logo from '../assets/elogroup.png';
import AddLead from '../controllers/AddLead';
import '../styles/LeadsTableStyle.css';
import Column from '../controllers/Column';

export default function LeadsView({ stages, savedLead, setSavedLead, handleClick, leads, addLead, setAddLead, handleDrop }) {

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
              <tr key={index}>
                { stages.map(stage => {
                  return ( 
                    <Column
                    accept={!stage ? '' : (stage - 1).toString()}
                    onDrop={(item)=> handleDrop(item, item.name === lead.name ? lead.id : undefined )}
                    key={'col' + stage + 'row' + index}
                    lead={lead.status === stage ? lead : undefined}
                    actualStage={stage.toString()}
                    index={index} 
                    />
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {
        addLead &&
        <AddLead setAddLead={setAddLead} />
      }
      { 
        savedLead && 
        <div className="modal__popup-success">
          <span>Lead salvo com sucesso!</span>
          <button onClick={()=>setSavedLead(false)}>Ok!</button>
        </div>
      }
    </div>
  )
}