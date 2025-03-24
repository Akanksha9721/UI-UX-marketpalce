import React from 'react'

const About = () => {
  return (
    <>
      <>
        {/* Icon Blocks */}
        <div className=' h-screen  mx-auto bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url('https://png.pngtree.com/background/20220723/original/pngtree-background-biru-keren-dan-kosong-abstract-untuk-template-desain-powerpoint-ppt-picture-image_1738466.jpg')` }}>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="">
              <div className='  '>
                <h2 className=" mt-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white text-center">
                  About Us
                </h2>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-12 gap-12">
                <img className='col-span-4 w-full rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8pps3k4729-29ZL3YcVXZupY0JmbbfXChg&s" alt="" />

                <div className='col-span-8 space-y-6'>
                  <p className=" mt-8 text-gray-800 dark:text-neutral-400 ">
                    Marketplace UI/UX focuses on creating an intuitive, visually appealing, and user-friendly environment
                    that facilitates effective communication, seamless transactions, and overall satisfaction for buyers and sellers.
                    A well-designed UI/UX can significantly impact the success and growth of a marketplace by enhancing user satisfaction, increasing engagement, and fostering user trust.
                    Marketplace UI/UX focuses on creating an intuitive, visually appealing, and user-friendly environment
                    that facilitates effective communication, seamless transactions, and overall satisfaction for buyers and sellers.
                  </p>
                  <p className='mt-6 space-y-6'>
                    A well-designed UI/UX can significantly impact the success and growth of a marketplace by enhancing user satisfaction, increasing engagement, and fostering user trust.
                    Marketplace UI/UX focuses on creating an intuitive, visually appealing, and user-friendly environment
                    that facilitates effective communication, seamless transactions, and overall satisfaction for buyers and sellers.
                    A well-designed UI/UX can significantly impact the success and growth of a marketplace by enhancing user satisfaction, increasing engagement, and fostering user trust.
                    Marketplace UI/UX focuses on creating an intuitive, visually appealing, and user-friendly environment
                    that facilitates effective communication, seamless transactions, and overall satisfaction for buyers and sellers.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>
    </>

  )
}

export default About;
