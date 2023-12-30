import React from 'react';

type Props = {
  name: string;
  backgroundImage: string;
};

const Project = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height:"200px",
        width:"200px",
        color: '#fff', // metin rengini belirleyin
        padding: '20px', // ihtiyaca göre iç içe alan ekleyin
      }}
     className='border-4 border-gray-300 shadow-lg p-4 rounded-lg m-1 relative'
    >
     
      {/* İhtiyaca göre başka içerikler ekleyebilirsiniz */}
      <div className="absolute inset-0  bg-gradient-to-b from-transparent to-gray-300
      transform translate-y-0 transition-transform hover:translate-y-full duration-300 ease-in-out
      w-full h-full flex justify-center items-center">
      <h2 className='text-center'>{props.name}</h2>
      </div>
    </div>
  );
};

export default Project;
