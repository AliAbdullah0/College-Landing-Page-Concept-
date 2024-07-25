import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import RightLayout from '../rightLayout/RightLayout';

function Home() {
  return (
    <>
    <div className='flex w-full flex-col lg:flex-row'>
    <Sidebar/>
    <RightLayout/>
    </div>
    </>
  );
}

export default Home;
