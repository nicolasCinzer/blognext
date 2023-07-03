import Image from 'next/image'

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='border-4 border-black rounded-full shadow-black drop-shadow-xl mx-auto mt-8'
        src='/stanley.jpg'
        width={200}
        height={200}
        alt='Nicolas Cinzer'
        priority={true}
      />
    </section>
  )
}
