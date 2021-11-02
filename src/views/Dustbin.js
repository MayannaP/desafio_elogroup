import { useDrop } from 'react-dnd'
import { Box, } from './Container'

const styleDustBin = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}

export function Dustbin({ accept, onDrop, lead, actualStage, index }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <div ref={drop} role="Dustbin" style={{ ...styleDustBin, backgroundColor }}>
      { lead &&
        <Box name={lead.name} type={actualStage} isDropped={true} key={index} />
      }
    </div>
  )
}
