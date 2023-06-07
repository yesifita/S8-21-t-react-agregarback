import { FC } from 'react'
import { IApliccant } from '../../interfaces/IItemApliccants'
import { CardContainer } from './CardContainer'
import { Droppable } from 'react-beautiful-dnd'

interface IContainerProps {
  items: IApliccant[]
  title: string
  dropId: string
  handleDeleteApliccant: (containerId: string, item: IApliccant) => void
  className?: string | undefined
}

export const Container: FC<IContainerProps> = ({
  items,
  title,
  dropId,
  handleDeleteApliccant,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        minWidth: '300px',
        marginLeft: '20px',
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
        <h3>
          {title} ({items.length})
        </h3>
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
