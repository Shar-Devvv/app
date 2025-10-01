"use client"
import React from 'react'
import Right from '@/public/components/Right'
import Blogs
  from '@/public/components/Blogs'

const page = () => {
  return (
    <div>
      <h1 className='text-4xl pt-5 pb-5 font-bold  '>Hey, Shar dev here! Discover my stories and creative ideas.</h1>
      <div className='flex gap-3'>
        <img className='h-[200px] w-[900px]' width={200} src="http://shutterstock.com/shutterstock/videos/3642977381/thumb/1.jpg?ip=x480" alt="" />
        <p className='pt-2'><h1 className='font-bold text-2xl italic'>Here you will find my personal blogs</h1>s
          <span className='text-[12px]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.</span>
          <button className='bg-slate-400 flex rounded-sm '>Read More</button>
        </p>
      </div>
      <div className='font-bold pt-3'>Popular Categories</div>
      <div className='category grid grid-cols-2 gap-4 pt-5 pb-5 md:flex md:space-y-1 sm:width-[63%]'>
        <button className='bg-purple-400 rounded-md h-[50px] w-[100px] items-center hover:cursor-pointer shadow flex gap-2'><img className='space-y-2 w-7 h-7 rounded-full ml-1' src="http://shutterstock.com/shutterstock/videos/3642977381/thumb/1.jpg?ip=x480" alt="bg" onClick={() => { window.location.href = '/category/Fashion' }} />Fashion</button>
        <button className='bg-orange-400 rounded-md h-[50px] w-[100px] items-center hover:cursor-pointer shadow flex gap-2'><img className='space-y-3 w-7 h-7 rounded-full ml-1' src="http://shutterstock.com/shutterstock/videos/3642977381/thumb/1.jpg?ip=x480" alt="bg" onClick={() => { window.location.href = '/category/Culture' }} />Culture</button>
        <button className='bg-purple-600 rounded-md h-[50px] w-[100px] items-center hover:cursor-pointer shadow flex gap-2'><img className='space-y-3 w-7 h-7 rounded-full ml-1' src="http://shutterstock.com/shutterstock/videos/3642977381/thumb/1.jpg?ip=x480" alt="bg" onClick={() => { window.location.href = '/category/Coding' }} />Coding</button>
        <button className='bg-green-400 rounded-md h-[50px] w-[100px] items-center hover:cursor-pointer shadow flex gap-2'><img className='space-y-3 w-7 h-7 rounded-full ml-1' src="http://shutterstock.com/shutterstock/videos/3642977381/thumb/1.jpg?ip=x480" alt="bg" onClick={() => { window.location.href = '/category/Food' }} />Food</button>
        <button className='bg-blue-400 rounded-md h-[50px] w-[100px] items-center hover:cursor-pointer shadow flex gap-2'><img className='space-y-3 w-7 h-7 rounded-full ml-1' src="http://shutterstock.com/shutterstock/videos/3642977381/thumb/1.jpg?ip=x480" alt="bg" onClick={() => { window.location.href = '/category/Anime' }} />Style</button>
        <button className='bg-pink-300 rounded-md h-[50px] w-[100px] items-center hover:cursor-pointer shadow flex gap-2'><img className='space-y-3 w-7 h-7 rounded-full ml-1' src="http://shutterstock.com/shutterstock/videos/3642977381/thumb/1.jpg?ip=x480" alt="bg" onClick={() => { window.location.href = '/category/Travel' }} />Travel</button>

      </div>

      <div className='recentposts flex'>
        <div className='left w-[70%] space-y-10'>
          <div className='font-bold text-2xl italic pb-3'>Recent Posts</div>

          {/* MAP: We now iterate over the postsToDisplay array. 
                      This will render one card for every post in the list (or just one card 
                      if it's a single post view).
                    */}


          <div className="Posts flex gap-4 border-b pb-8">

            {/* Image */}
            <img
              className='w-[101px] h-[133px] md:w-[230px] md:h-[185px] object-cover rounded-lg'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAubSnMNRHoMoeNNz5Pcq6X74o4xfEp23GA&s"
              alt="sauske"

            />

            <div className="text-Sasuke an goat flex flex-col justify-between flex-1">

              {/* 1. Date */}
              <p className='text-[10px] pt-3 text-gray-500'>23-09-12-styledate</p>

              {/* 2. About/Title */}
              <h3 className='font-bold text-lg font-sans'>Sasuke</h3>

              {/* 3. Sasuke an goat/Lorum Ipsum (Added 'line-clamp' for cleaner display) */}
              <p className='text-[10px] line-clamp-4'>
                Sasuke an  goat
              </p>

              {/* 4. Read More Button */}
              {/* NOTE: Use a proper link element to the single post slug later */}
              <button className='text-black font-semibold text-[10px] underline self-start mt-2 pb-3'>Read More</button>
            </div>

          </div>

          <div className="Posts flex gap-4 border-b pb-8">

            {/* Image */}
            <img
              className='w-[101px] h-[133px] md:w-[230px] md:h-[185px] object-cover rounded-lg'
              src="https://images.stockcake.com/public/9/f/6/9f6994d9-b91e-46ef-b05c-df5d06ebad05_large/coding-on-laptop-stockcake.jpg"
              alt="coding"

            />

            <div className="text-Sasuke an goat flex flex-col justify-between flex-1">

              {/* 1. Date */}
              <p className='text-[10px] pt-3 text-gray-500'>23-09-12-styledate</p>

              {/* 2. About/Title */}
              <h3 className='font-bold text-lg font-sans'>Coding</h3>

              {/* 3. Sasuke an goat/Lorum Ipsum (Added 'line-clamp' for cleaner display) */}
              <p className='text-[10px] line-clamp-4'>
                An nice coding skilss
              </p>

              {/* 4. Read More Button */}
              {/* NOTE: Use a proper link element to the single post slug later */}
              <button className='text-black font-semibold text-[10px] underline self-start mt-2 pb-3'>Read More</button>
            </div>

          </div>


          <div className="Posts flex gap-4 border-b pb-8">

            {/* Image */}
            <img
              className='w-[101px] h-[133px] md:w-[230px] md:h-[185px] object-cover rounded-lg'
              src="https://i.pinimg.com/564x/24/0b/45/240b450586e7fbb7df51a628276e6b1f.jpg"
              alt="Naruto"

            />

            <div className="text-Sasuke an goat flex flex-col justify-between flex-1">

              {/* 1. Date */}
              <p className='text-[10px] pt-3 text-gray-500'>23-09-12-styledate</p>

              {/* 2. About/Title */}
              <h3 className='font-bold text-lg font-sans'>Naruto</h3>

              {/* 3. Sasuke an goat/Lorum Ipsum (Added 'line-clamp' for cleaner display) */}
              <p className='text-[10px] line-clamp-4'>
                No words for this great character
              </p>

              {/* 4. Read More Button */}
              {/* NOTE: Use a proper link element to the single post slug later */}
              <button className='text-black font-semibold text-[10px] underline self-start mt-2 pb-3'>Read More</button>
            </div>

          </div>

          {/* END MAP */}


          <div className="buttons">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Previous</button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
          </div>

        </div>
        <div className='right space-y-5 pl-7 sm:width-[40%]'>
          <h5 className='font-bold text-[10px] text-[#808080] '>What's hot</h5>
          <h3 className='font-bold'>Most Popular</h3>

          {/* OUTER FLEX: Aligns image and text block side-by-side */}
          <div className='flex items-start '>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>

          <div className='flex items-start'>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>

          <div className='flex items-start'>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>

          <div className='flex items-start'>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>


          <div className='flex items-start'>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>

          <span className='text-[7px]'>Discover by topics</span>
          <h2 className='font-bold font-sans relative bottom-[1%]'>Categories</h2>
          <div className="buttons grid grid-cols-3 gap-1 text-[6px] relative bottom-[2%] ">
            <button className='bg-blue-500 rounded-md flex justify-center p-1'>Style</button>
            <button className='bg-purple-400 rounded-md flex justify-center p-1'>Fashion</button>
            <button className='bg-green-400 rounded-md flex justify-center p-1'>Food</button>
            <button className='bg-pink-400 rounded-md flex justify-center p-1'>Travel</button>
            <button className='bg-orange-400 rounded-md flex justify-center p-1'>Culture</button>
            <button className='bg-purple-600 rounded-md flex justify-center p-1'>Coding</button>
          </div>

          <span className='text-[7px]'>Chosen By editor</span>
          <h2 className='font-bold font-sans relative bottom-[1%]'>Editors's Pick</h2>


          <div className='flex items-start '>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>

          <div className='flex items-start'>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>

          <div className='flex items-start'>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>

          <div className='flex items-start'>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>


          <div className='flex items-start'>

            {/* Image */}
            <img
              className="w-10 h-10 justify-center object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/nextblog-fa810.appspot.com/o/1694506359387sasuke.jpeg?alt=media&token=1280ede7-7086-4921-8178-1a21b330f6dc"
              alt="sasuke"
            />

            {/* NEW WRAPPER: This is the column that stacks the text Sasuke an goat */}
            <div className='pl-2 flex flex-col gap-0.5'>

              {/* Top Row: Style Tag + Views (still uses flex-row internally) */}
              <div className='flex gap-2 h-[10px] items-center'>
                <div className='bg-orange-400 rounded-lg text-white w-6 h-3 flex justify-center items-center text-[7px]'>Style</div>
                <span className='text-[7px]'>views:31</span>
              </div>

              {/* Title: Now correctly placed inside the column wrapper */}
              <span className='text-[10px] font-semibold'>
                About sasuke uchicha
              </span>
              <span className='text-[7px] '>Aditya001 -2023-09-12</span>

            </div>
          </div>
        </div>

      </div>


      <Blogs />




    </div>

  )
}

export default page
