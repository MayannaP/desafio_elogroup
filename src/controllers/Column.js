import { useDrop } from 'react-dnd'
import  ColumnView from '../views/ColumnView'

export default function Column({ accept, onDrop, lead, actualStage, index, lastChangedRow }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop && lastChangedRow == index;
  console.log({lastChangedRow, index})
  let backgroundColor = '';
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'green'
  }

  console.log({backgroundColor})

  return (
      <ColumnView drop={drop} lead={lead} type={actualStage} key={index} index={index} backgroundColor={backgroundColor} />
    )

}
