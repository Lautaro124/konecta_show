import service from '@/service/service'

export default async function Home() {
  const todos = await service()

  return (
    <main className="min-h-screen p-6 md:p-20 flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-6 md:gap-2">
      {
        todos.map(todo => (
          <section key={todo.id} className='w-full h-36 p-4 rounded-md flex flex-col justify-between gap-3 shadow-md shadow-slate-800'>
            <div>
              <h2 className='underline underline-offset-4 italic'>Title</h2>
              <h3 className='font-semibold text-lg truncate '>{todo.title}</h3>
            </div>
            <div className='grid grid-rows-2'>
              <span className='italic'>User ID: {todo.userId}</span>
              <span className='italic'>Status: {todo.completed ? 'Completed' : 'Incompleted'}</span>
            </div>
          </section>
        ))
      }
    </main>
  );
}
