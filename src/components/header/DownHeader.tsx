import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'

const DownHeader: React.FC = () => {
  const strs = `Deals Amazon Basics Best Sellers Livestreams Video New Releases Home Books Gift Cards  Health Household`.split(' ')

  return (
    <div className='flex text-white text-small bg-amazon_blue-light gap-4 p-1 pl-6'>
      <p className="link flex items-center gap-3">
        <MenuIcon className='h-6 mt-1' />
        All
      </p>

      { strs.map((s, idx) => <p key={s} className={'link ' + ( idx > 3 && 'hidden lg:inline' )}>{s}</p> ) } 
    </div>
  )
}

export default DownHeader
