import { useDrop } from 'react-dnd';
import  ColumnView from '../views/ColumnView';
import { useDrag } from 'react-dnd';

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
  
  let backgroundColor = '';
  if (isActive) {
    backgroundColor = 'darkgreen'
  // } else if (canDrop) {
  //   backgroundColor = 'green'
  }
  
  const [, drag] = useDrag(() => ({
    type: actualStage,
    item: { name: lead?.name }
  }), [lead?.name, actualStage])


  return (
      <ColumnView drop={drop} drag={drag} lead={lead} type={actualStage} key={index} index={index} backgroundColor={backgroundColor} />
    )

}
