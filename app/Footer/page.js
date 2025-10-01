import React from 'react'

const page = () => {
  return (
    <>
      <div className="footer flex text-[#626262] pt-7">
        <div className="left w-[50%]">
            <div className='top flex'>
            <img width={30} src="https://my-next-blog-kohl.vercel.app/logo.png" alt="" />
          <h1 className="logo">SharBlog</h1>
          </div>
          <div className="copyright text-[8px] pt-[3%] pb-[3%]">
           This is a blog website where you can post your blogs with images Here you will find best blogs and best blogger around you. Trending website in terms of blogs.
          </div>

<div className="flex space-x-1">
          <img className="w-3 h-3" src="facebook.png" alt="facebook" />
          <img className="w-3 h-3" src="instagram.png" alt="instagram" />
          <img className="w-3 h-3" src="tik-tok.png" alt="tik-tok" />
          <img className="w-3 h-3" src="youtube.png" alt="youtube" />
        </div>
          
        </div>
       <div className="right w-[50%] flex justify-end space-x-7 text-[10px]"> {/* <-- ADDED 'flex' and 'justify-between' HERE */}
    
    {/* Links Column */}
    <div className="Link flex flex-col"> {/* <-- ADDED 'flex-col' for vertical stack and column alignment */}
        <h3 className="font-bold mb-2 text-[10px]">Links</h3> {/* <-- Added H3 title and spacing */}
        <ul>
            <li>Homepage</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    
    {/* Tags Column */}
    <div className="Tags flex flex-col"> {/* <-- ADDED 'flex-col' and column alignment */}
        <h3 className="font-bold mb-2">Tags</h3> {/* <-- Added H3 title and spacing */}
        <ul>
            <li>Style</li>
            <li>Fashion</li>
            <li>Coding</li>
            <li>Travel</li>
        </ul>
    </div>
    
    {/* Social Column */}
    <div className="Social flex flex-col"> {/* <-- ADDED 'flex-col' and column alignment */}
        <h3 className="font-bold mb-2">Social</h3> {/* <-- Added H3 title and spacing */}
        <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Tiktok</li>
            <li>Youtube</li>
        </ul>
    </div>
</div>
        </div>
    </>
  )
}

export default page
