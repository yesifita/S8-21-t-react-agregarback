import { useEffect, useState } from 'react'
import { Droppable as DroppableDnd } from 'react-beautiful-dnd'

export const Droppable = ({ children, dropId }) => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))

    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <DroppableDnd direction="horizontal" droppableId={dropId}>
      {children}
    </DroppableDnd>
  )
}