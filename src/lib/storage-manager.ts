export function setItem(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'élément au localStorage', error)
  }
}

export function getItem(key: string): any | null {
  try {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : null
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'élément du localStorage', error)
    return null
  }
}

export function removeItem(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'élément du localStorage', error)
  }
}

export function updateItem(key: string, updater: (currentValue: any | null) => any): void {
  try {
    const currentValue = getItem(key)
    const updatedValue = updater(currentValue)
    setItem(key, updatedValue)
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'élément dans le localStorage', error)
  }
}
