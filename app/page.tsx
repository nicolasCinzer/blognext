import ProfilePic from './components/ProfilePic'

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='my-12 text-3xl text-center'>
        Hello and Welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          Im <span className='font-bold'>Nicolas</span>.
        </span>
      </p>
      <ProfilePic />
    </main>
  )
}
