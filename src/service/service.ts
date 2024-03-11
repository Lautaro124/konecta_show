import { Todos } from "@/interface/todos"

const service = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data: Todos = await response.json()
  return data
}

export default service