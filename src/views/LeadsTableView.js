import logo from '../assets/elogroup.png';
import AddLead from '../controllers/AddLead';
import './LeadsTableStyle.css';

export default function LeadsView(props) {

  return(
    <div>
      <img src={logo} alt="" />
      <h1>Painel de Leads</h1>
      <button onClick={props.handleClick}>Novo Lead (+)</button>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th>Cliente em Potencial</th>
            <th>Dados Confirmados</th>
            <th>Reunião Agendada</th>
          </tr>
        </thead>
        <tbody>
          {
            props.leads.map((lead, index )=> { 
              return (
                <>
                {
                  //droppable
                  //Todo tr é passível de receber o draggable element. 
                  //Mas na hora de receber o drop o id do target deve ser avaliado
                  //O id do e.target deve ser igual ao id do element+1
                }
                <tr key={index}>
                  <td status={0}>
                    {
                      //Todo span será draggable!
                    }
                    <span>{lead.status === 0 &&  lead.name}</span>
                  </td>
                  <td status={1}>
                    <span>{lead.status === 1 &&  lead.name}</span>
                  </td>
                  <td status={2}>
                    <span>{lead.status === 2 &&  lead.name}</span>
                  </td>
                </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
      {
        props.addLead && 
        <AddLead setAddLead={props.setAddLead}/>
      }
    </ div>
  )
}