import Navbar from '../components/Navbar';
// import './App.css';
// import Hero from '../components/Hero'; 
import About from '../components/About';
import Ourvalues from '../components/Ourvalues';
// import Community from '../components/Community';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (

    <>
     <div className='px-52 space-y-8 bg-[#E9EBE7] '>
     
     <div className="  space-y-16  flex flex-col justify-end items-start font-display  bg-[#385529] min-h-[80vh] border border-black rounded-[2rem] p-14 text-white ">
 
 <div className='w-1/2 space-y-6  ' >
     <h1 className='text-5xl font-bold'> Welcome to the Alumni network of CBIT
          </h1>
          <p>Whether you graduated yesterday or decades ago, you are always part of the CBIT  family</p>
 </div>

 <div className=' flex space-x-6  '>
     <button className='bg-[#971B1E] py-[0.5em] px-6 rounded-lg text-white'>
         Get started!
     </button>
 <button className='  bg-[#971B1E] py-[0.5em] px-6 rounded-lg'>
         Explore
     </button>

 </div>

</div>
     
     <About/>
     <Ourvalues/>
     
     <Newsletter/>
     </div>
     

    </>
  );
}

export default Home;