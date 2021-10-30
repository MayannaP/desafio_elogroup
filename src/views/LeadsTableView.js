import LeadsRowView from './LeadsRowView';
import logo from '../assets/elogroup.png';
import AddLead from '../controllers/AddLead';

export default function LeadsView(props) {

  return(
    <div style={{textAlign: 'center'}}>
      <img src={logo} alt="" />
      <h1>Painel de Leads</h1>
      <button onClick={props.handleClick}>Novo Lead (+)</button>
      <table>
        <thead>
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
                <LeadsRowView lead={lead} key={index} />
              )
            })
          }
        </tbody>
      </table>
      {
        props.addLead && 
        <AddLead />
      }
    </ div>
  )
}