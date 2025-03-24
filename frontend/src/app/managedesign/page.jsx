'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const Managedesign = () => {
  const [designList, setDesignList] = useState([]);

  const fetchDesign = () => {
    axios.get('http://localhost:5000/design/getall')
      .then((result) => {
        console.table(result.data);
        setDesignList(result.data);

      })
      .catch((err) => {
        console.log(err);
      })

  }
  useEffect(() => {
    fetchDesign();

  }, [])
  const deleteDesign = (id) => {
    axios.delete('http://localhost:5000/design/delete/' + id)
      .then((result) => {
        toast.success('User Deleted Successfully');
        fetchDesign();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to delete user');
      })

  }


  return (
    <>
      <div className=' h-screen  bg-gray-100'>
        <div className='container mx-auto py-10 overflow-x-auto'>
          <h1 className='text-center text-2xl font-bold'>Manage Design</h1>
          <table className='w-full  min-w-max'>
            <thead>
              <tr className='bg-gray-600 text-white font-bold text-center'>
                <th className='p-3'>IMAGE</th>
                <th className='p-3'>ID</th>
                <th className='p-3'>Name</th>
                <th className='p-3'>PRICE</th>
                <th className='p-3'>UPLOADBY</th>
                <th className='p-3'>DESCRIPTION</th>
                <th className='p-3'>CREATED At</th>
                <th className='p-3'>DELETE</th>
                <th className='p-3'>UPDATE</th>
                <th className='p-3'>DOWNLOAD</th>
               

              </tr>
            </thead>
            <tbody>
              {
                designList.map((design) => {
                  return (
                    <tr className='border bg-white-200'>

                      <td className='p-3'>
                        <img src={design.image} className='h-12' alt="" />
                      </td>
                      <td className='p-3'>{design._id}</td>
                      <td className='p-3'>{design.name}</td>
                      <td className='p-3'>₹{design.price}</td>
                      <td className='p-3'>{design.uploadBy}</td>
                      <td className='p-3'>{design.description}</td>
                      <td className='p-3'>{new Date(design.createdAt).toDateString()}</td>
                      <td className='p-3'>
                        <button onClick={() => { deleteDesign(design._id) }} className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
                      </td>
                      <td className='p-3'>
                        <Link href={'/updatedesign/' + design._id} className='bg-blue-500 py-1 px-3 text-white rounded-full'>Update</Link>
                      </td>
                      <td className='p-3'>
                        <a download href={design.file} target='_blank' className='bg-red-500 py-1 px-3 text-white rounded-full'>Download</a>
                      </td>


                    </tr>
                  )

                })
              }
            </tbody>

          </table>

        </div>

      </div>


    </>
  )
}

export default Managedesign 