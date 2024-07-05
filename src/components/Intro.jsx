import React from 'react'
import { Link } from 'react-router-dom'
function Intro() {
  return (
    <>
    {/* <h1>Hi</h1> */}
    <div className="w-full h-full flex justify-center items-center bg-gray-700 text-white">
      <div className='flex flex-col gap-8 justify-center items-center w-1/2'>
        <h1 className=' font-extrabold text-5xl'
        style={{fontFamily: "Rubik Wet Paint"}}
        >Shoot The Zombies</h1>
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto consequuntur voluptas assumenda, saepe sapiente veniam blanditiis porro ducimus harum quasi numquam modi expedita, sed nobis officiis, adipisci quis optio facilis.
        Quam voluptatem necessitatibus laboriosam, in, dolorem impedit veritatis consequuntur perspiciatis eveniet nobis non! Repellat dolores excepturi aliquam delectus maiores illum! Eligendi obcaecati repellendus soluta quas nisi qui alias ut molestias.
        Repudiandae eum recusandae beatae officiis sit, ab, aliquid facere, temporibus tenetur at aliquam dicta exercitationem pariatur architecto. Ipsa, enim iste nostrum quisquam, explicabo modi dignissimos possimus, et error optio inventore.
        Placeat eligendi nam necessitatibus explicabo ratione ex eaque dignissimos similique dolorem cum unde delectus voluptates consequatur sapiente facilis est ad maxime impedit, ipsa cumque nesciunt tempore! Rerum sapiente et enim!
        Ea voluptas voluptatibus distinctio dolores deserunt suscipit repudiandae, laborum sint asperiores? Maxime consectetur repellendus placeat unde voluptate, ut blanditiis et eaque accusamus omnis nostrum quas. Nam, vel? Aperiam, quasi dolore.
        Nemo fugit officia ut ipsam molestiae blanditiis, non qui perspiciatis, aperiam vel sunt voluptatibus ad quod dolore, debitis veritatis quidem error ipsum? Eos consectetur quibusdam, in alias natus molestias amet.
        Et, nesciunt minus omnis deserunt cum asperiores officia assumenda dolorum quisquam officiis consequatur eos, ad distinctio ut sit eligendi accusamus modi. Eos temporibus delectus libero sed laudantium eius tempore natus.
        Deserunt culpa voluptatum accusamus dolore, quos ratione harum repellat voluptatem aliquid quod nesciunt ullam sed, recusandae esse eos error obcaecati officia autem quo beatae nulla, consequuntur mollitia magnam. Sunt, cumque?
        Voluptas recusandae natus labore laudantium, animi consequatur, ipsam similique harum, neque asperiores tempora odio perferendis quam fugit libero. Sint eum modi, ducimus optio delectus velit temporibus ad praesentium nobis ipsam?
        Quam, fugiat. Quidem at delectus esse vel consequatur eaque id facilis culpa nostrum impedit numquam exercitationem amet ipsa fuga officiis consectetur ipsum eum aliquid qui fugiat, natus unde doloribus illum.</p> */}
        <Link to={'/theme'}>
        <button className='bg-green-500 rounded-md p-2 animate-pulse font-bold text-white' type="submit">
          Start
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Intro