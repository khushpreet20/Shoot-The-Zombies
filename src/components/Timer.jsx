import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
function Timer({timer}) {
  return (
    <>
        <div className='inset-0 w-screen h-screen backdrop-blur-sm fixed bg-black bg-opacity-30 flex justify-center items-center z-10'>

            <div className='flex flex-col text-white items-center'>
                <div className='font-extrabold text-lg'>
                    {timer}
                </div>
            </div>

        </div>
    </>
  )
}

export default Timer