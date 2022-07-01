import * as React from 'react'
import { FontDisplay, loadAsync } from "expo-font";

const fontName = 'Metropolis'

const FontLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  React.useEffect(() => {
    loadAsync({
      [fontName]: { uri: `/fonts/Metropolis-Regular.otf`, display: FontDisplay.SWAP },
    })
  }, [])

  return <>{children}</>
}

export default FontLoader