import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col lg:flex-row  gap-4 flex-1 py-24">
             <h2 className={`text-4xl font-semibold text-center`}>
           <div className="z-10  max-w-4xl flex flex-col w-full px-4 ">
            <h1 className="text-4xl font-semibold tracking-tight">Hello,I&apos;m Fatma Turan{" "}
            <span className='animate-wiggle inline-block'>👋</span> </h1>
            <p className='mt-5 text-lg'>{`I am a Full Stack Developer. I specialize in Java, Spring Boot, JavaScript, React and Node.js. I keep my knowledge up to date with a passion for innovative technologies and continuous learning. I aim to work effectively on projects as a creative problem solver and team-oriented developer. For more information, check out my GitHub or LinkedIn profile.`}</p>
           </div>
           <div className='h-8'/>
           {/* <a href="assets/FatmaTuran--CV.pdf" download="FatmaTuran_CV.pdf" className='border-4 border-gray-300  p-4 hover:shadow-lg rounded-full'>Download CV  ⬇️</a> */}
           <div className='h-8'/>
           </h2>
           <div className="relative  w-[340px] h-[450px] ">
          <Image src="/images/profil.jpeg" alt="" layout="fill" className='animate-moveUpDown rounded-full object-cover border-4 border-gray-300 shadow-lg p-4' />
        </div>
    </main>
  )
}
