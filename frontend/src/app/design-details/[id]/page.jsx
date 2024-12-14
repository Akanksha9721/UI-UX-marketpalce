'use client';
import axios, { Axios } from 'axios';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const DesignDetails = () => {

  const router = useRouter();
  const [designData, setDesignData] = useState(null);
  const { id } = useParams();

  const fetchDesignData = async () => {
    const res = await axios.get('http://localhost:5000/design/getbyid/' + id)
    console.log(res.data);
    setDesignData(res.data);
  }

  useEffect(() => {
    fetchDesignData();
  }, []);

  const submitForm = (values) => {
    console.log(values);

    axios.put('http://localhost:5000/design/browse/' + id, values)
      .then((result) => {
        toast.success('User Updated successfully');
        router.back();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to update user');

      })
  }


  const getDesignData = async () => {
    const res = await Axios.get('https://localhost:5000/design/getbyid/' + id);
    console.log(res.data);
    setDesignData(res.data);

  }

  if (designData === null) {
    return <h1 className='text-3xl font-bold text-center mt-10'>Loading...</h1>
  }

  return (
    <>
      <>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:items-center gap-12">
            <img
              className="rounded-xl w-full"
              src={designData.image}
              alt="Features Image"
            />
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">

                    {designData.name}
                  </h2>
                  <p className="text-gray-500 dark:text-neutral-500">

                  </p>
                </div>
                {/* End Title */}
                <p>{designData.name}</p>
                <p className='font-bold'>₹ {designData.price}</p>
                <p className='mt-5'>{designData.uploadBy}</p>
                <a className='bg-green-500 py-1 px-3 text-black rounded-full' download href={designData.file} target='_blank'>Download Figma File</a>
                <p>{designData.description}</p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>

    </>
  )
}

export default DesignDetails