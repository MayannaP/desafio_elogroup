import logo from '../assets/elogroup.png';
import AddLead from '../controllers/AddLead'

export default function AddLeadView(props) {
  return(
    <div className="container">
      <img src={logo} alt="" />
      <h1>Novo Lead</h1>
      
      <form>
        <label htmlFor="name">Nome*</label>
        <input type="text" id="name"  onChange={e=>props.setName(e.target.value)}/>
        <label htmlFor="phone">Telefone*</label>
        <input type="text" id="phone" onChange={e=>props.setPhone(e.target.value)} />
        <label htmlFor="email">Email*</label>
        <input type="text" id="email" onChange={e=>props.setEmail(e.target.value)} />
      
      <h3>Oportunidades</h3>

        <table>
          <thead>
            <tr>
              <td>
                <input type="checkbox" name="box1" id="box1" onClick={e => props.handleSelectAll(e)}/>
              </td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="checkbox" id="box2" value="RPA"/>
              </td>
              <td>RPA</td>
            </tr>
            <tr>   
              <td>
                <input type="checkbox" name="checkbox" id="box3" value="Produto Digital" />
              </td>
              <td>Produto Digital</td>
            </tr>
            <tr>   
              <td>
                <input type="checkbox" name="checkbox" id="box4"  value="Analytics"/>
              </td>
              <td>Analytics</td>
            </tr>
            <tr>   
              <td>
                <input type="checkbox" name="checkbox" id="box5" value="BPM" />
              </td>
              <td>BPM</td>
            </tr>
          </tbody>
        </table>
        
        <button onClick={e => props.handleClick(e)}>Salvar</button>
      </form>
      { 
        props.savedLead && 
        <span>Lead salvo com sucesso!</span>
      }
      {
        props.errorMessage &&
        <span>{props.errorMessage}</span>
      }
    </div>
  )
}