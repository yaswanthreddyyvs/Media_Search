import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const HomePage = () => {

  const { query } = useSelector((store) => store.search)
  return (
    <div>
      <div className='flex justify-between items-center bg-(--c1) px-10 py-6'>
        <h2 className='font-medium text-2xl'>
          Media Search
        </h2>
        <div className='flex gap-5 items-center'>
          <Link className='text-base active:scale-95 font-medium bg-(--c4) text-(--c1) rounded px-4 py-2' to='/'>Search</Link>
          <Link className='text-base active:scale-95 font-medium bg-(--c4) text-(--c1) rounded px-4 py-2' to='/collection'>Collection</Link>
        </div>
      </div>
      <SearchBar />
      {query != '' ? <div>
        <Tabs />
        <ResultGrid />
      </div> : ''}
    </div>
  )
}

export default HomePage