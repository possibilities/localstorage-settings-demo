import { useState } from 'react'

const loadFromLocalStorage = () => {
  if (!process.browser) return {}
  try {
    return JSON.parse(localStorage.getItem('localstorage-demo'))
  } catch (error) {
    return {}
  }
}

const saveToLocalStorage = (payload) => {
  if (!process.browser) return
  localStorage.setItem('localstorage-demo', JSON.stringify(payload))
}

function useLocalStorage (initialData) {
  const [settings, saveSettings] = useState(loadFromLocalStorage() || initialData)
  const patchSettings = newSettings => {
    const patch = { ...settings, ...newSettings }
    saveSettings(patch)
    saveToLocalStorage(patch)
  }
  return [settings, patchSettings]
}

export default useLocalStorage
