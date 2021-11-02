import { useDrag } from 'react-dnd';

export function Cell({ name, type }) {
  const [, drag] = useDrag(() => ({
    type,
    item: { name }
  }), [name, type])

  return (
    <div ref={drag} className="table__cell" >
      {name}
    </div>
  )
}