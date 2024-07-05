import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
function Timeup({score, Replay}) {
    // console.log(highestScore);
    const [highestScore, setHighestScore] = useState(0)

    useEffect(() => {
        // console.log(localStorage.getItem('score'))
        const storageScore = JSON.parse(localStorage.getItem('score'))
        if(!storageScore) return 
        // console.log(storageScore)
        setHighestScore(storageScore)
      }, [])
    
      useEffect(() => {
        // console.log(highestScore)
        const storageScore = JSON.parse(localStorage.getItem('score'))
        if(score > storageScore){
            console.log('hi')
        // console.log(Number(highestScore))

            localStorage.setItem('score', JSON.stringify(score))
        }
      },[score])

    //   useCallback(() => {
    //     if(score > highestScore){
    //         localStorage.setItem('score', JSON.stringify(score))
    //     }
    //   }, [score])
  return (
    <div className='fixed inset-0 h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
        <div className='flex flex-col gap-3 text-white'>
            {/* <button className='place-self-end w-8 h-8 rounded-2xl bg-black font-bold'>X</button> */}
            {/* <div className='p-4 font-bold text-center bg-cyan-800'>Times Up!</div> */}
            <div className='flex flex-col bg-black rounded-xl px-20 py-10 gap-5 items-center mx-4'
            style={{fontFamily: "Rubik Wet Paint"}}>
                <h1 className=' text-4xl font-bold'>Your Score: {score}</h1>
                <h2 className='text-2xl font-bold'>Highest Score: {highestScore}</h2>
                <div className='flex p-2 justify-between w-full gap-4'>
                    <Link to={'/'} className='px-4 py-1 rounded-sm bg-gray-800'>
                        Main Menu
                    </Link>

                    <button onClick={Replay}
                    className='px-4 py-1 rounded-sm bg-gray-800'>
                        Play Again
                    </button>
                </div>
                <Link to={'/theme'}>
                {/* Note: that if you are using button type submit your are not suppose to preventDefault since it will prevent us from going to the url specified in Link's to */}
                    <button className='px-4 py-1 rounded-sm bg-gray-800'
                    type="button">
                        Theme
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export {Timeup}