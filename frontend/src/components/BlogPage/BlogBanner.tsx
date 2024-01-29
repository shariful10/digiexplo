import React from 'react'
import Container from '../Container'

const BlogBanner = () => {
  return (
    <div className='bg-secondary py-[100px] text-textColor'>
      <Container>
         <h2 className="text-[36px] text-center font-bold">
            Blog
         </h2>
         <p className='text-center text-sm'>Home <span>&gt;</span> <span>Blog</span></p>
      </Container>
    </div>
  )
}

export default BlogBanner