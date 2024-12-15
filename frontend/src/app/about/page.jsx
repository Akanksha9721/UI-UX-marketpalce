import React from 'react'

const About = () => {
  return (
    <>
      <>
        {/* Icon Blocks */}
        <div className=''>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className=''>
                <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                 About Us
                </h2>
                <img src="https://moringaschool.com/wp-content/uploads/2024/11/product-design.jpg" alt="" />
              </div>
              {/* Grid */}
              <div className="grid gap-12">
                <div>
                  <p className="mt-3 text-gray-800 dark:text-neutral-400">
                    Marketplace UI/UX focuses on creating an intuitive, visually appealing, and user-friendly environment
                    that facilitates effective communication, seamless transactions, and overall satisfaction for buyers and sellers.
                    A well-designed UI/UX can significantly impact the success and growth of a marketplace by enhancing user satisfaction, increasing engagement, and fostering user trust.
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
