import React from 'react'
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/theme';
import { Link } from 'react-router-dom';

function Theme() {
    const [theme_id, setThemeId] = useState(0);
    const [direction, setDirection] = useState(true)
    /* by default direction for changing theme is forward (True -> forward, False ->  Backward) */
    // const list = ['0', '1', '2'];

    // setting context of the theme so that it can be used by game component -> using useContext

    const {setTheme} = useContext(ThemeContext)

    const changeTheme = () => {
        if(direction){
            setThemeId((theme_id+1)%3);
        }
        else{
            if(theme_id === 0){
                setThemeId(2);
            }else{
                setThemeId(theme_id-1)
            }
        }
    }

    console.log(theme_id)
    const images = [
        { id: 0, src: "/Images/Theme1.jpg", alt: "Theme1" },
        { id: 1, src: "/Images/Theme2.jpg", alt: "Theme2" },
        { id: 2, src: "/Images/Theme2.jpg", alt: "Theme2" }
    ];

    // const [BgImg, setBgImg] = useState(images[theme_id].src)

  return (
    // <ThemeContextProvider value={{theme, BgImg}}>
    <>
        <div className='bg-gray-800 w-screen h-screen flex justify-center items-center flex-col text-white'>
            <p className='text-3xl font-bold m-4 '>Select Theme</p>
            <div className='flex w-1/2 h-1/4 rounded-md border-gray-700 border-8 justify-between p-4'>
                <button onClick={() => {
                    setDirection(false);
                    // console.log(direction)
                    changeTheme()
                }}
                className = 'text-5xl font-bold p-3' type="button"> - </button>
                <div className='flex gap-4 px-4 w-full justify-center items-center'>
                    {images.map((image) => (
                        <img
                        key={image.id}
                        id={image.id}
                        src={image.src}
                        alt={image.alt}
                        className={`w-1/3 h-4/5 border-4 ${theme_id === image.id ? 'border-white' : 'border-none'}`}/>
                    ))}
                </div>
                <button onClick={() => {
                    setDirection(true);
                    // console.log(direction)
                    changeTheme()
                }}
                className = 'text-5xl font-bold p-3'  type="button"> + </button>
            </div>
            
        <div className='flex gap-3'>
            <Link to = {'/game'} className=' bg-green-500 rounded-md p-2 mt-4'>
                <button onClick={(e) => {
                    // e.preventDefault()
                    // setBgImg(images[theme].src)
                    console.log(images[theme_id].src);
                    setTheme(images[theme_id].src)
                }} type="submit">Confirm</button>
            </Link>
            <Link to={'/'}
            className='bg-red-600 rounded-md px-4 py-2 mt-4'>
                <button type="submit">
                    Back
                </button>
            </Link>
        </div>
        </div>
    </>
    //  </ThemeContextProvider>
  )
}



{/* <img id = {0} src="/src/Images/Theme2.jpg" alt="Theme2" className={`w-1/3 h-4/5 border-4 ${(id === theme)? `border-white` : `border-none`}`}/>
<img id = {1} src="/src/Images/Theme1.jpg" alt="Theme1" className={`w-1/3 h-4/5 border-4 ${(id === theme)? `border-white` : `border-none`}`}/>     
<img id = {2} src="/src/Images/Theme2.jpg" alt="Theme2" className={`w-1/3 h-4/5 border-4 ${(id === theme)? `border-white` : `border-none`}`}/>             */}
{/* <div className={`w-1/3 h-4/5 flex justify-center items-center bg-white`}><img id = '0' src="/src/Images/Theme2.jpg" alt="Theme2"/></div> */}
{/* <div className={`w-1/3 h-4/5 flex justify-center items-center bg-white`}><img id = '1' src="/src/Images/Theme1.jpg" alt="Theme1"/></div> */}
{/* <div className={`w-1/3 h-4/5 flex justify-center items-center bg-white`}><img id = '2' src="/src/Images/Theme2.jpg" alt="Theme2"/></div> */}
 {/* <img src="" alt="" /> */} 
 
export default Theme
// export {images[theme].src} 