
export default function LeadsRowView(props) { 

  return(
    <tr>
      <td id={0} >{props.lead.status === 0 &&  props.lead.name
      }</td>
      <td id={1} >{props.lead.status === 1 &&  props.lead.name
      }</td>
      <td id={2} >{props.lead.status === 2 &&  props.lead.name
      }</td>
    </tr>
  )
}