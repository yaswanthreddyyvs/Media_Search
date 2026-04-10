import React from 'react'
import { useDispatch } from 'react-redux'
import { addedToast } from '../redux/features/collectionSlice'
import { addCollection } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()

    const handleCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
    }
    return (
        <div className='w-80 h-80 relative bg-white rounded-xl overflow-hidden'>
            <a target='_blank' className='h-full' href={item.url}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} alt="" /> : ''}
            </a>
            <div id='bottom' className='flex justify-between item-center w-full px-4 py-6 absolute bottom-0 gap-3 text-white'>
                <h2 className='h-12 overflow-hidden text-lg font-semibold capitalize'>{item.title}</h2>
                <button
                    onClick={() => {
                        handleCollection(item)
                    }}
                    className='bg-indigo-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-95'>
                    save
                </button>
            </div>
        </div>
    )
}

export default ResultCard