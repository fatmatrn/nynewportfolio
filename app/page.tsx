import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-1 py-24">
             <h2 className={`text-4xl font-semibold text-center`}>
           <div className="z-10  max-w-4xl flex flex-col w-full px-4 ">
            <h1 className="text-4xl font-semibold tracking-tight">Hello,I&apos;m Fatma {" "}
            <span className='animate-wiggle inline-block'>👋</span> </h1>
            <p className='mt-5 text-lg'>{`I am a Full Stack Developer. I specialize in Java, Spring Boot, JavaScript, React and Node.js. I keep my knowledge up to date with a passion for innovative technologies and continuous learning. I aim to work effectively on projects as a creative problem solver and team-oriented developer. For more information, check out my GitHub or LinkedIn profile.`}</p>
           </div>
           </h2>
           <div className="relative  w-[340px] h-[450px] ">
          <Image src="/images/profil.jpeg" alt="" layout="fill" className='rounded-full object-cover border-4 border-black' />
        </div>
    </main>
  )
}
