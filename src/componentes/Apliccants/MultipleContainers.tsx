import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Container } from './Container'
import { IApliccant } from '../../interfaces/IItemApliccants'
import { setContainers } from '../../store/slices/apliccants.slices'
import { useDispatch } from 'react-redux'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'

export const MultipleContainers = () => {
  const dispatch = useDispatch()
  const containers = useSelector((state: RootState) => state.apliccants)

  const handleDeleteApliccant = (containerId: string, item: IApliccant) => {
    const updateContainer = containers[containerId].reduce((acc, itemContainer) => {
      if (itemContainer.id === item.id) {
        return acc
      }
      return [...acc, itemContainer]
    }, [] as IApliccant[])
    const newContainers = { ...containers, [containerId]: updateContainer }
    dispatch(setContainers(newContainers))
    deleteDocument(item.id)
  }

  const deleteDocument = async (id: String) => {
    const docRef = doc(db, `Apliccants/${id}`)
    await updateDoc(docRef, { active: false })
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const updateDocument = async (id: String, fieldsUpdate: Partial<IApliccant>) => {
    const docRef = doc(db, `Apliccants/${id}`)
    await updateDoc(docRef, fieldsUpdate)
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  const handleDragEnd = event => {
    const { source, destination } = event
    if (!destination) return
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return
    }

    // Almecenarlos a otro contenedor
    const sourceList: IApliccant[] = containers[source.droppableId]
    const destinationList = containers[destination.droppableId]

    if (sourceList === destinationList) {
      const reorderedList = reorder(sourceList, source.index, destination.index)
      const newItems = { ...containers, [source.droppableId]: reorderedList }
      dispatch(setContainers(newItems))

      newItems[destination.droppableId].map((item: IApliccant) => {
        updateDocument(item.id, { state: destination.droppableId })
      })
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

      newItems[destination.droppableId].map((item: IApliccant) => {
        updateDocument(item.id, { state: destination.droppableId })
      })
    }
  }
  return (
    <div style={{ marginTop: '15px' }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Container
            dropId={'guardados'}
            title={'Guardados'}
            items={containers.guardados}
            handleDeleteApliccant={handleDeleteApliccant}
            className="ml-5"
          />
          <Container
            dropId={'enProceso'}
            title={'En Proceso'}
            items={containers.enProceso}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={'entrevista'}
            title={'Entrevista'}
            items={containers.entrevista}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={'contratado'}
            title={'Contratado'}
            items={containers.contratado}
            handleDeleteApliccant={handleDeleteApliccant}
          />
          <Container
            dropId={'noSeleccionado'}
            title={'No Seleccionado'}
            items={containers.noSeleccionado}
            handleDeleteApliccant={handleDeleteApliccant}
          />
        </div>
      </DragDropContext>
    </div>
  )
}
