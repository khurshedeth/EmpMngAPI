
import React from 'react'

function Error({message}) {
  return (
    <div className=" succes container max-auto">
      <div
        className=" mx-auto flex justify-center border border-yellow-400 bg-yellow-500
       text-gray-900 w w-3/6 text-md my-4 py-2 text-center bg-opacity-5"
      >
        {message}
      </div>
    </div>
  )
}

export default Error
