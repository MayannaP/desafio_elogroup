
export default function RegisterView(props) {
  return(
    <div>
      <form>
        <label htmlFor="user">Usuário *</label>
        <input type="text" id="user" onChange={e=>props.setUser(e.target.value)}/>
        <label htmlFor="password">Password *</label>
        <input type="password" id="password" onChange={e=>props.setPassword(e.target.value)}/>
        <label htmlFor="password_confirmation">Confirmação Password *</label>
        <input type="password" id="password_confirmation" onChange={e=>props.setPasswordConfirmation(e.target.value)}/>
        {
          props.errorMessage &&
          <span>{props.errorMessage}</span>
        }
        <button onClick={props.handleClick}>Registrar</button>
      </form>
    </div>
  )
}