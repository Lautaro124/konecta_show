'use client'
import { ErrorProps } from '@/interface/error'

export default function ErrorView({ reset, error }: ErrorProps) {
  const handlerClick = () => reset()

  return (
    <main className='min-h-screen w-screen flex justify-center items-center'>
      <section className='flex flex-col gap-3 w-64 shadow-md bg-red-500 rounded-md p-6'>
        <h2 className='font-semibold text-lg'>Something went wrong!</h2>
        <span className='italic'>This error was caused when {error.message}</span>
        <button
          className='bg-gray-900 p-2 rounded-md'
          onClick={handlerClick}
        >
          Try again
        </button>
      </section>
    </main>
  )
}