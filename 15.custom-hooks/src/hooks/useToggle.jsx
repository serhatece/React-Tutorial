import { useState } from "react"

function useToogle() {

  const [open, setOpen] = useState(false);

  const change = () => {
    setOpen(!open);
  }

  return {
    open, change
  }
}

export default useToogle