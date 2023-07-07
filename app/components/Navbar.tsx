import Link from 'next/link'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='bg-slate-200 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold grid place-content-center mb-2 md:mb-0'>
          <Link
            href={'/'}
            className='text-black/80 no-underline hover:text-black'
          >
            Nicolas Cinzer
          </Link>
        </h1>
        <div className='flex justify-center gap-8 sm:justify-evenly align-middle text-2xl lg:text-3xl'>
          <Link href={'https://www.youtube.com/watch?v=843nec-IvW0&t=9811s&ab_channel=DaveGray'}>
            <FaYoutube />
          </Link>
          <Link href={'https://www.youtube.com/watch?v=843nec-IvW0&t=9811s&ab_channel=DaveGray'}>
            <FaTwitter />
          </Link>
          <Link href={'https://www.youtube.com/watch?v=843nec-IvW0&t=9811s&ab_channel=DaveGray'}>
            <FaGithub />
          </Link>
          <Link href={'https://www.youtube.com/watch?v=843nec-IvW0&t=9811s&ab_channel=DaveGray'}>
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  )
}
