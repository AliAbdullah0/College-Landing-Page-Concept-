import React, { useEffect } from 'react';

function RightLayout() {
  return (
    <>
      <div className='lg:w-10/12 w-full h-fit flex flex-col gap-2 lg:mt-0 mt-3'>
          <div className='w-full flex flex-col lg:gap-2 gap-1 backdrop-blur-lg'>
            <div className='w-full flex lg:gap-2 gap-1 justify-center'>
              <img src="src\assets\Bahria1.jpg" alt="" className='w-[73%]'/>
              <img src="src\assets\BCI ground.jpg" alt="" className='w-[23%]'/>
            </div>
            <div className='w-full flex lg:gap-2 gap-1 justify-center'>
              <img src="src\assets\banner 4.jpeg" alt="" className='w-[23%] object-cover'/>
            <img src="src\assets\banner 3.jpeg" alt="" className='w-[73%]'/>
            </div>
          </div>
          <div className='flex w-full flex-col justify-center lg:items-start items-center text-xl md:text-3xl lg:text-4xl mt-2 font-extralight '>
             <h2 className='border-b-2 border-blue-500 w-fit lg:ml-5'>"Pure Hardwork, No Shortcuts"</h2>
          </div>
          <div className='flex flex-col w-full p-5 gap-2'>
            <div className='flex lg:flex-row flex-col justify-center w-full'>
              <div className='lg:w-[45%] w-full flex items-center justify-center'>
              <img src="src\assets\image-04-illustration.png" alt="" className='lg:w-10/12 relative z-10'/>
              </div>
              <div className='lg:w-1/2 w-full mt-3 space-y-5'>
                <h2 className='lg:text-3xl text-xl font-extralight border-b-2 border-blue-500 w-fit'>Our Goal</h2>
                <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam veniam magni reprehenderit pariatur! Magnam voluptate exercitationem quod corrupti, fugiat accusantium eligendi labore officia laborum eaque fuga? Laboriosam aliquam accusantium voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel blanditiis voluptates molestiae, tempore atque aspernatur animi quidem inventore? Facere ipsum, doloribus quod labore odio dolor eius? Odio, obcaecati ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas atque voluptatibus autem impedit alias? Veritatis blanditiis, eum sequi veniam perspiciatis quod optio doloremque! Totam natus laboriosam quod, ipsa sapiente delectus.</p>
              </div>
            </div>
            
            <div className='flex w-full lg:flex-row flex-col justify-between lg:ml-4'>
             
              <div className='lg:w-1/2 w-full mt-3 space-y-5'>
                <h2 className='lg:text-3xl text-xl font-extralight border-b-2 border-blue-500 w-fit'>Providing Skills</h2>
                <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam veniam magni reprehenderit pariatur! Magnam voluptate exercitationem quod corrupti, fugiat accusantium eligendi labore officia laborum eaque fuga? Laboriosam aliquam accusantium voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel blanditiis voluptates molestiae, tempore atque aspernatur animi quidem inventore? Facere ipsum, doloribus quod labore odio dolor eius? Odio, obcaecati ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas atque voluptatibus autem impedit alias? Veritatis blanditiis, eum sequi veniam perspiciatis quod optio doloremque! Totam natus laboriosam quod, ipsa sapiente delectus.</p>
              </div>
              <div className='lg:w-[45%] w-full flex items-center justify-center'>
              <img src="src\assets\image-02-illustration.png" alt="" className='lg:w-10/12'/>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default RightLayout;
