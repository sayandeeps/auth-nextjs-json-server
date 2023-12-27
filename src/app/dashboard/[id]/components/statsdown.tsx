import React from 'react'


interface StatsdownProps {
    fundname: string;
    amt: number;
  }

const statsdown : React.FC<StatsdownProps> = ({ fundname, amt }) => {
  return (
    <>
    
    <div className="flex items-center p-4 bg-white rounded">
			<div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
				<svg className="w-6 h-6 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
				</svg>
			</div>
			<div className="flex-grow flex flex-col ml-4">
				<span className="text-xl font-bold">₹ {amt}</span>
				<div className="flex items-center justify-between">
					<span className="text-gray-500">{fundname}</span>
					<span className="text-red-500 text-sm font-semibold ml-2">-8.1%</span>
				</div>
			</div>
		</div>
    
    </>
  )
}

export default statsdown