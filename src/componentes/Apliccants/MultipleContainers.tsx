import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Container } from './Container'
import { IItemApliccants } from '../../interfaces/IItemApliccants'

export const MultipleContainers = () => {
  const containers = useSelector((state: RootState) => state.apliccants.containers)

  const handleDeleteApliccant = (containerId: string, item:IItemApliccants) => {
    console.log('handleDeleteApliccant',{containerId, item}) // TODO: completar funcion 
  }

  const handleDragEnd =  (event:any) =>{
    console.log('handleDragEnd', event) //TODO: Falta por hacer
  }
  return (
    <div style={{ marginTop: '15px' }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Container
            dropId={containers[0].name}
            title={containers[0].name}
            items={containers[0].items}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={containers[1].name}
            title={containers[1].name}
            items={containers[1].items}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={containers[2].name}
            title={containers[2].name}
            items={containers[2].items}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={containers[3].name}
            title={containers[3].name}
            items={containers[3].items}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={containers[4].name}
            title={containers[4].name}
            items={containers[4].items}
            handleDeleteApliccant={handleDeleteApliccant}
          />
        </div>
      </DragDropContext>
    </div>
  )
}
