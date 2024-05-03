export default interface Bus {
  id: string
  name: string
  typeOil: string
  trajet: {
    start: string
    end: string
  }
  startDate: string
  time: string
  ticket: {
    note: number,
    total: number
  }
  status: boolean
}