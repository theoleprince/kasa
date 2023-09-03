/* eslint-disable import/no-anonymous-default-export */
class DataService {
  async getData() {
    try {
      const response = await fetch('/logements.json')
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.error('Error fetching data:', error)
      return null
    }
  }

  async getDataById(id) {
    try {
      const response = await fetch('/logements.json')
      const data = await response.json()
      if (data) {
        return data.filter((item) => item.id === id)
      }
      return null
    } catch (error) {
      console.error('Error fetching data:', error)
      return null
    }
  }
}

export default new DataService()
