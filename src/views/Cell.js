import { useDrag } from 'react-dnd'
import './LeadsTableStyle.css'



export function Cell({ name, type }) {
  const [, drag] = useDrag(() => ({
    type,
    item: { name }
  }), [name, type])

  return (
    <div ref={drag} role="Cell" class="table__cell" >
      {name}
    </div>
  )
}