import service from '@/service/service'

export default async function Home() {
  const todos = await service()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        todos.map(todo => (
          <section key={todo.id}>
            <h3>{todo.title}</h3>
            <span>User ID: {todo.userId}</span>
          </section>
        ))
      }
    </main>
  );
}
