import React from 'react'

const AboutUs = () => {
  return (
    <section className='section bg-white'>
    <div className='container flex md:flex-row flex-col gap-8'>        
        <div className='w-full md:w-2/5'>
         <div className='text-center md:text-left'>
            <h1 className='heading'>About Us</h1> 
            <div className='flex w-28 mt-3 mb-10 mx-auto md:mx-0 justify-center md:justify-start'>
            <hr className='h-2 bg-black w-1/2' /> <hr className='h-2  bg-primaryColor w-1/2'/>
            </div> 
            <h2 className='md:text-4xl text-3xl'>We find your dearm house</h2>
            </div>

            <p className='text-para text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem minima ex libero provident aperiam nobis, nihil, placeat asperiores nulla officiis, praesentium repellat cupiditate sapiente. Ducimus sequi omnis veniam suscipit ipsa.</p>
            <button className='btn'>Read more</button>
            <div className="flex md:gap-2 lg:gap-8 mt-12">
                
                <div>
                   <h1 className='text-3xl lg:text-4xl font-bold'>350+</h1> 
                   <p className='mt-2 text-md lg:text-lg font-semibold'>Property Ready</p>
                </div>
                <div className=''>
                <h1 className='text-3xl lg:text-4xl font-bold'>280</h1> 
                   <p className='mt-2 text-md lg:text-lg font-semibold'>Happy Customers</p>
                </div>
                <div>
                <h1 className='text-3xl lg:text-4xl font-bold'>15K+</h1> 
                   <p className='mt-2 text-md lg:text-lg font-semibold'>Property Ready</p>
                </div>
                </div>
                
            
        </div>
        <div className='w-full md:w-3/5  grid grid-cols-2 gap-2  md:gap-4 justify-end'>
            
                <img src="https://images.surferseo.art/fdb08e2e-5d39-402c-ad0c-8a3293301d9e.png" className='w-full h-full object-cover rounded-tl-[60px] hover:scale-125 transition-all duration-200' alt="" />
                <img src="https://assets.themortgagereports.com/wp-content/uploads/2019/03/Modern-Home-Style-The-Mortgage-Reports-On-Tour.jpg" className='w-full h-full object-cover hover:scale-125 transition-all duration-200' alt="" />
            
            
                <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg" className='w-full h-full object-cover hover:scale-125 transition-all duration-200' alt="" />
                <img src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/09/Should-You-Paint-Your-House-Black_1.jpg" className='w-full h-full rounded-br-[60px] hover:scale-125 transition-all duration-200' alt="" />
            
        </div>
    </div>
 </section>
  )
}

export default AboutUs