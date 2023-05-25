import { DragDropContext, Droppable as DroppableDnd } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Container } from './Container'
import { IItemApliccant } from '../../interfaces/IItemApliccants'
import { setContainers } from '../../store/slices/apliccants.slices'
import { useDispatch } from 'react-redux'

export const MultipleContainers = () => {
  const dispatch = useDispatch()
  const containers = useSelector((state: RootState) => state.apliccants)

  const handleDeleteApliccant = (containerId: string, item:IItemApliccant) => {
        const updateContainer = containers[containerId].reduce((acc, itemContainer) => {
      if (itemContainer.id === item.id) {
        return acc
      }
      return [...acc, itemContainer]
    }, []  as IItemApliccant[])
    const newContainers = { ...containers, [containerId]: updateContainer }
    dispatch(setContainers(newContainers))
  }

  const getStatus = containerId => {
    switch (containerId) {
      case 'guardados':
        return 'guardados'
      case 'enProceso':
        return 'enProceso'
      case 'readys':
        return 'ready progress'
      case 'inTable':
        return 'in table'
      case 'payables':
        return 'payable'
      default:
        return 'rejected'
    }
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

   const handleDragEnd = event => {
    const { source, destination, draggableId } = event
    if (!destination) return
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return
    }

    // Almecenarlos a otro contenedor
    const sourceList:IItemApliccant[] = containers[source.droppableId]
    const destinationList = containers[destination.droppableId]

    if (sourceList === destinationList) {
      const reorderedList = reorder(sourceList, source.index, destination.index)
      const newItems = { ...containers, [source.droppableId]: reorderedList }
      dispatch(setContainers(newItems))
    } else {
      const sourceClone = Array.from(sourceList)
      const [draggedItem] = sourceClone.splice(source.index, 1)
      const destinationClone = Array.from(destinationList)
      destinationClone.splice(destination.index, 0, draggedItem)
      const newItems = {
        ...containers,
        [source.droppableId]: sourceClone,
        [destination.droppableId]: destinationClone,
      }
      dispatch(setContainers(newItems))
      const status = getStatus(destination.droppableId)

      // axios
      //   .put('http://localhost:3001/api/ticket', { _id: draggableId, status })
      //   .catch(error => console.log(error))
    }
  }
  return (
    <div style={{ marginTop: '15px' }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Container
            dropId={"guardados"}
            title={"Guardados"}
            items={containers.guardados}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={"enProceso"}
            title={"En Proceso"}
            items={containers.enProceso}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={"entrevista"}
            title={"Entrevista"}
            items={containers.entrevista}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={"contratado"}
            title={"Contratado"}
            items={containers.contratado}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={"noSeleccionado"}
            title={"No Seleccionado"}
            items={containers.noSeleccionado}
            handleDeleteApliccant={handleDeleteApliccant}
          /> 
        </div>
      </DragDropContext>
    </div>
  )


  
}
