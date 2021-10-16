import React from 'react'
import Link from "next/link"


export const Content: React.FC = () => {
  return (
    <div className='Content container mx-auto'>
        <h2>Your Watchlist</h2>
        <div className='pool-info'>
          <span>Saved pools will appear here</span>
        </div>
        <h2>All Pools</h2>

        <div>
        <table className="table-fixed w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm ">
                  <th className="py-3 px-6 text-left w-1/4 ">Tag</th>
                  <th className="py-3 px-6 text-left w-1/4 ">Category</th>
                  <th className="py-3 px-6 text-left w-1/4 capitalize ">Access</th>
                  <th className="py-3 px-6 text-left w-1/4 ">Created</th>
                </tr>
              </thead>
  <tbody className="text-gray-600 text-sm font-light">
    <Link href={"As"}>
    <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer" key="{model.tag}">
                    <td className="py-3 text-left ml-2">
                      <div className="flex items-center ml-2">
                        <span className="font-medium">Hello</span>
                      </div>
                    </td>
                    <td className="py-3 text-left">
                      <div className="flex items-center">
                        <span className="capitalize">Hello</span>
                      </div>
                    </td>
                    <td className="py-3 text-center">
                      <span className="flex items-center">
                      Hello
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="bg-green-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                       Hello
                      </span>
                    </td>
                  </tr>
                  </Link>
     
  </tbody>
</table>
        </div>
    </div>
  )
}
