import { useState } from 'react'

function useTooltip() {
  const [isMouseHover, setIsMouseHover] = useState(false)

  const enterMouse = () => {
    setIsMouseHover(true)
  }

  const leaveMouse = () => {
    setIsMouseHover(false)
  }

  return { isMouseHover, enterMouse, leaveMouse }
}

export default useTooltip
