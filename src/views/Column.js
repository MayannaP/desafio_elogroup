import { useDrop } from 'react-dnd'
import { Cell } from './Cell'

export function Column({ accept, onDrop, lead, actualStage, index, lastChangedRow }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop && lastChangedRow == index;
  let backgroundColor = '';
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'green'
  }

  return (
    <td ref={drop} className="table__column" style={{ backgroundColor }}>
      {lead &&
        <Cell name={lead.name} type={actualStage} key={index} index={index} />
      }
    </td>
  )
}
