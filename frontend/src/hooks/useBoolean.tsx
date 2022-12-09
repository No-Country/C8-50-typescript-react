import { useRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useBoolean(initialValue: any) {
    const [value, setValue] = useState(initialValue)

    const updatevalue = useRef({
        toggle: ()=> setValue((oldValue: any)=> !oldValue),
        on: ()=> setValue(true),
        off: ()=> setValue(false)
    })
  return [value, updatevalue.current]

}

export default useBoolean