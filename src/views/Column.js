import { useDrop } from 'react-dnd'
import { Box } from './Container'

const styleColumn = {
  width: '200px',
  height: '20px',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem'
}

export function Column({ accept, onDrop, lead, actualStage, index }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
  let backgroundColor = ''
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <td ref={drop} role="Column" style={{ ...styleColumn, backgroundColor }}>
      { lead &&
        <Box name={lead.name} type={actualStage} key={index} />
      }
    </td>
  )
}
