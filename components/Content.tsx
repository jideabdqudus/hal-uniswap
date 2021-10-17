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
        <table className="pool-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Pool</th>
              <th>TVL</th>
              <th>Volume 24H</th>
              <th>Volume 7D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>USDC/ETH</td>
              <td>$341.50m</td>
              <td>$88.64m</td>
              <td>$617.85m</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  )
}
