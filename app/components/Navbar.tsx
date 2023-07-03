import Link from 'next/link'

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
      </div>
    </nav>
  )
}
