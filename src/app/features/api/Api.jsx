import React from 'react'
import { useSelector } from 'react-redux'
import design from "../../../assets/design.png"

const Api = () => {
    const advice = useSelector((state) => state.advice);
  return (
    <>
        <h2 className="text-neon text-xs font-extrabold tracking-[3.46px] mb-6">Advice #{advice.nr}</h2>
        <h1 className='text-cyan text-2xl font-extrabold tracking-[-0.26px] mb-6'>"{advice.advice}"</h1>
        <img src={design} alt='design' />
    </>
  )
}

export default Api