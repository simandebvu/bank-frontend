import React from 'react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'


function StatsCard({title, value, isUp, date}: any) {
  return (
    <div className="px-4 w-full lg:w-3/12">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    {title}
                  </h5>
                  <p className="font-semibold text-blueGray-700">
                    {value}
                  </p>
                  <span className="font-semibold text-xs text-blueGray-700">
                    {date}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${ isUp? 'bg-red-500': 'bg-green-500' }`}>
                    {isUp ? <TriangleUpIcon className="w-6 h-6" /> :  <TriangleDownIcon className="w-6 h-6" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
  )
}

export default StatsCard