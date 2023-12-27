import React, { FC } from 'react'


interface pageprops {
    data : any;
}

const users: FC<pageprops> = ({data}) => {
  return (
    <>
    
    <tr className="text-xs bg-gray-100  :text-gray-400  :bg-transparent">
                                            <td className="px-6 py-5 font-medium">{data.name}</td>
                                            <td className="px-6 py-5 font-medium ">{data.age}</td>
                                            <td className="px-6 py-5 font-medium ">{data.occupation}</td>
                                            <td className="px-6 py-5 font-medium ">{data.email}</td>
                                            <td className="px-6 py-5 font-medium ">{data.aadharNumber}</td>
                                            <td className="px-6 py-5 font-medium ">{data.pan}</td>
                                            <td className="px-6 py-5 font-medium ">{data.kycdone}</td>
                                            
                                            <td className="px-6 py-5 ">
                                                <a href={`/dashboard/${data.id}`} className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md  :text-blue-300  :border-blue-300  :hover:bg-blue-300  :hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500">View
                                                </a>
                                            </td>
                                        </tr>
    
    
    </>
  )
}

export default users