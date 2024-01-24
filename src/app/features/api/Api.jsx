import React from 'react'
import design from "../../../assets/design.png"
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdvice } from './adviceSlice'
import { useEffect } from 'react'

const Api = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.advice.data)
    useEffect(() => {
        dispatch(fetchAdvice())
    }, [])
    console.log(data)
  return (
    <>
        {data.isLoading ? <h1>Loading....</h1> :
        <>
        <h2 className="text-neon text-xs font-extrabold tracking-[3.46px] mb-6">Advice #{data.slip.id}</h2>
        <h1 className='text-cyan text-2xl font-extrabold tracking-[-0.26px] mb-6'>"{data.slip.advice}"</h1>
        <img src={design} alt='design' />
        </>
        }
    </>
  )
}

export default Api