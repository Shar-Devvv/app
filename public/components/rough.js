<div className='recentposts flex'>
                <div className='left w-[70%] space-y-10'>
                    <div className='font-bold text-2xl italic pb-3'>Recent Posts</div>
                    
                    {/* MAP: We now iterate over the postsToDisplay array. 
                      This will render one card for every post in the list (or just one card 
                      if it's a single post view).
                    */}
                    
                        // Each iterated post is now referenced as 'p'
                        <div className="Posts flex gap-4 border-b pb-8"> 
                            
                            {/* Image */}
                            <img 
                                className='w-[230px] h-[160px] object-cover rounded-lg' 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAubSnMNRHoMoeNNz5Pcq6X74o4xfEp23GA&s"
                                alt="sauske"
                                
                            />
                            
                            <div className="text-content flex flex-col justify-between flex-1">
                                
                                {/* 1. Date */}
                                <p className='text-[10px] pt-3 text-gray-500'>23-09-12-styledate</p>
                                
                                {/* 2. About/Title */}
                                <h3 className='font-bold text-lg font-sans'>About-Sasuke</h3>
                                
                                {/* 3. Content/Lorum Ipsum (Added 'line-clamp' for cleaner display) */}
                                <p className='text-[10px] line-clamp-4'>
                                    content
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
                </div>
