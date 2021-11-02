import { Cell } from './Cell'

export default function ColumnView({drag, type, lead, drop, index, backgroundColor }) {

  return (
    <td ref={drop} className="table__column" style={{ backgroundColor }}>
      {lead &&
        <Cell drag={drag} name={lead.name} type={type} key={index} index={index} />
      }
    </td>
  )
}
