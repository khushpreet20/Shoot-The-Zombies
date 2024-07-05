import React from 'react'
import { Link } from 'react-router-dom';
function Pause({close, Replay}) {
    const r = () => {
        console.log('hi');
    }
  return (
    <>
        <div className='inset-0 w-screen h-screen backdrop-blur-sm fixed bg-black bg-opacity-30 flex justify-center items-center z-10'>

            <div className='flex flex-col text-white items-center'>
                {/* <h1 className='font-extrabold bg-cyan-900 text-5xl rounded-md text-center p-4 max-w-64'>
                    Paused
                </h1> */}
                <div className='bg-black flex flex-col items-center gap-4 rounded-md px-8 py-8'
                style={{fontFamily: "Rubik Wet Paint"}}
                >
                    <p className='text-5xl font-bold text-center'>Paused</p>
                    {/* Box */}
                    <button onClick={close}
                    className='bg-gray-800 rounded-md p-4'
                    type="button"> Resume </button>
                    
                    <div className='flex gap-4'>

                        <button onClick={Replay}
                        className='bg-gray-800 rounded-md p-4'
                        type="button">Replay</button>

                        <Link to={'/'} className='bg-gray-800 rounded-md p-4'> Quit</Link>
                        {/* <button 
                        type="button">Quit</button> */}

                    </div>

                </div>
            </div>

        </div>
    </>
  )
}

export default Pause