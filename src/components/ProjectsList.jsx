import React from 'react'

const ProjectsList = () => {
  return (
    <div>
        <div className='bg-gray-400 h-40 mx-40 flex flex-row'>
            <img className='h-full w-40' src={require("../img/1654120704258.jpg")} alt="" />
            <div className='ml-6 mt-2'>
                <a href="https://main--meek-speculoos-91d879.netlify.app/">Onlince Course</a>
                <h3>JavaScript, Node JS, Vue JS, Mongoose, MongoDB, Stripe JS, </h3>
                <h3>Description</h3>
            </div>
        </div>
    </div>
  )
}

export default ProjectsList