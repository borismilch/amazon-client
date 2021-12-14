import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router-dom'

const Success = () => {

  const history = useHistory()

  const pushHistory = () => history.push('/orders')

  return (
    <div className='bg-gray-100 h-screen'>
      
      <main className='max-w-screen-lg mx-auto'>

        <div className='flex flex-col p-10 bg-white'>
          <div className='flex gap-3 mb-2 items-center'>
            <CheckCircleIcon className='text-green-500 h-10 ' />
            <h1 className='text-3xl'>Thank you, Your oredr has been sended</h1>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint deserunt necessitatibus fugit sequi reiciendis! Dolorum quisquam magni, mollitia sequi eos reprehenderit voluptate similique? Tempora, recusandae ad. Ipsa, perspiciatis modi?
          </p>

          <button onClick={pushHistory} className='mt-8 button'>Go to orders</button>

        </div>

      </main>
    </div>
  )
}

export default Success
