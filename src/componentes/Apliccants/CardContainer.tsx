import { Draggable } from 'react-beautiful-dnd'
import trash from '../../assets/icons/fi_trash-2.svg'
import { FC } from 'react'
import { IItemApliccants } from '../../interfaces/IItemApliccants'

interface ICardContainerProps{
  item: IItemApliccants,
  index: number,
  containerId: string,
  
handleDeleteApliccant: (containerId: string, item: IItemApliccants)=>void
}

export const CardContainer: FC<ICardContainerProps> = ({ item, index, containerId, handleDeleteApliccant }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {draggableProvided => (
        <div
          style={{
            width: '100%',
            border: '0',
          }}
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>${item.fullName}</div>
          </div>
          <div style={{ position: 'relative', height: '30px' }}>
            <img
              src={trash}
              style={{ width: '25px', position: 'absolute', right: '10px', cursor: 'pointer' }}
              onClick={() => {
                handleDeleteApliccant(containerId, item)
              }}
            ></img>
          </div>
        </div>
      )}
    </Draggable>
  )
}

