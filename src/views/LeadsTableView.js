import logo from '../assets/elogroup.png';
import AddLead from '../controllers/AddLead';
import './LeadsTableStyle.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import * as C from './Container';

export default function LeadsView(props) {

  return(
    <div>
      <img src={logo} alt="" />
      <h1>Painel de Leads</h1>
      <button onClick={props.handleClick}>Novo Lead (+)</button>
      <DndProvider backend={HTML5Backend}>
					<C.Container leads={props.leads} setLeads={props.setLeads}/>
			</DndProvider>
      {
        props.addLead && 
        <AddLead setAddLead={props.setAddLead}/>
      }
    </div>
  )
}