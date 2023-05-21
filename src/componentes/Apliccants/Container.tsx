import { FC } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { IItemApliccants } from '../../interfaces/IItemApliccants'
import { CardContainer } from './CardContainer'

interface IContainerProps{
  items: IItemApliccants[],
  title: string,
  dropId: string,
  handleDeleteApliccant: (containerId: string, item: IItemApliccants)=>void
}


export const Container:FC<IContainerProps> = ({ items, title, dropId,  handleDeleteApliccant }) => {
  return (
    <div
      style={{
        width: '15%',
        padding: '1rem 0.8rem',
        borderRadius: '4px',
        border: '2px solid #ccd1ff',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ffcd33',
          padding: '5px',
          marginBottom: '10px',
          borderRadius: '5px',
        }}
      >
        {/* <img src={icon}></img> */}
        <h3>{title}</h3>
      </div>
      <Droppable droppableId={dropId}>
        {droppableProvided => (
          <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {items.map((item, index) => {
              if (item?.id) {
                return (
                  <CardContainer
                    item={item}
                    key={item.id}
                    index={index}
                    handleDeleteApliccant={handleDeleteApliccant}
                    containerId={dropId}
                  />
                )
              }
              return <div key={index}>error</div>
            })}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

