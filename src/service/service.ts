import { Todos } from "@/interface/todos"

const service = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data: Todos | null = await response.json()
    return data
  }
  catch (error) {
    console.log('Error fetching')
    throw new Error('doing a fetch')
  }
}

export default service