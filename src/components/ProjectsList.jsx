import React from 'react'

const ProjectsList = () => {
  return (
    <div>
        <div className='border-2 h-40 mx-40 mb-4 flex flex-row rounded-3xl'>
            <img className='rounded-l-3xl h-full w-40 object-cover' src={require("../img/vue.jpeg")} alt="" />
            <div className='ml-6 mt-2 '>
                <a href="https://main--meek-speculoos-91d879.netlify.app/">Onlince Course</a>
                <h3>JavaScript, Node JS, Vue JS, Mongoose, MongoDB, Stripe JS, Cloudiinary, Node Mailler</h3>
                <h3>Description</h3>
            </div>
        </div>
        <div className='border-2 h-40 mx-40 flex flex-row rounded-3xl'>
            <img className='rounded-l-3xl h-full w-40 object-cover' src={require("../img/react.png")} alt="" />
            <div className='ml-6 mt-2 '>
                <a href="https://shop-t.herokuapp.com/">Shop IT</a>
                <h3>JavaScript, Node JS, Vue JS, Mongoose, MongoDB, Stripe JS, Cloudiinary, Node Mailler</h3>
                <h3>Description</h3>
            </div>
        </div>
    </div>
  )
}

export default ProjectsList