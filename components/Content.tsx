import React from 'react'
import Link from "next/link"


export const Content: React.FC = () => {
  return (
    <div className='Content container mx-auto'>
        <h2>Your Watchlist</h2>
        <div className='pool-info'>
          <span>Saved pools will appear here</span>
        </div>
        <h2 className='all-pools-title'>All Pools</h2>
        <div>
        <div className='pool-table'>
        <div>
        <div className="grid grid-cols-8 gap-4 header">
              <h4 className='col-end-1'>
                #
              </h4>
              <h4>
                Pool
              </h4>
              <h4 className='col-end-7 right'>
                TVL
              </h4>
              <h4 className='right'>
                Volume 24H
              </h4>
              <h4 className='right'>
                Volume 7D
              </h4>
        </div>
        {/* <hr className='line-breaker'/> */}
        </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    1
                  </h4>
                  <h4>
                    USDC/ETH <span className='percent'>0.3%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $345.56m
                  </h4>
                  <h4 className='right'>
                    $97.87m
                  </h4>
                  <h4 className='right'>
                    $517.87m
                  </h4>
            </div>
          </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    2
                  </h4>
                  <h4>
                    WBTC/ETH <span className='percent'>0.3%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $145.56m
                  </h4>
                  <h4 className='right'>
                    $37.32m
                  </h4>
                  <h4 className='right'>
                    $817.17m
                  </h4>
            </div>
          </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    3
                  </h4>
                  <h4>
                    ETH/USDT <span className='percent'>0.2%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $145.56m
                  </h4>
                  <h4 className='right'>
                    $47.87m
                  </h4>
                  <h4 className='right'>
                    $617.87m
                  </h4>
            </div>
          </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    4
                  </h4>
                  <h4>
                    USDC/ETH <span className='percent'>0.5%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $45.56m
                  </h4>
                  <h4 className='right'>
                    $197.87m
                  </h4>
                  <h4 className='right'>
                    $17.87m
                  </h4>
            </div>
          </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    5
                  </h4>
                  <h4>
                    USDC/USDT <span className='percent'>0.3%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $422.32m
                  </h4>
                  <h4 className='right'>
                    $17.37m
                  </h4>
                  <h4 className='right'>
                    $817.87m
                  </h4>
            </div>
          </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    6
                  </h4>
                  <h4>
                    FRAX/USDC <span className='percent'>0.5%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $521.56m
                  </h4>
                  <h4 className='right'>
                    $57.87m
                  </h4>
                  <h4 className='right'>
                    $817.87m
                  </h4>
            </div>
          </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    7
                  </h4>
                  <h4>
                    USDC/ETH <span className='percent'>0.3%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $845.56m
                  </h4>
                  <h4 className='right'>
                    $17.83m
                  </h4>
                  <h4 className='right'>
                    $417.74m
                  </h4>
            </div>
          </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    8
                  </h4>
                  <h4>
                    UNI/ETH <span className='percent'>0.3%</span>
                  </h4>
                  <h4 className='col-end-7 right'>
                    $25.56m
                  </h4>
                  <h4 className='right'>
                    $1.87m
                  </h4>
                  <h4 className='right'>
                    $17.87m
                  </h4>
            </div>
          </div>
          <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    9
                  </h4>
                  <h4>
                    sETH2/ETH <span className='percent'>0.5%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $875.34m
                  </h4>
                  <h4 className='right'>
                    $237.87m
                  </h4>
                  <h4 className='right'>
                    $617.87m
                  </h4>
            </div>
            <div className='item'>
            <div className="grid grid-cols-8 gap-4">
                  <h4 className='col-end-1'>
                    10
                  </h4>
                  <h4>
                    USDC/DAI <span className='percent'>0.5%</span>
                  </h4>

                  <h4 className='col-end-7 right'>
                    $141.11m
                  </h4>
                  <h4 className='right'>
                    $321.17m
                  </h4>
                  <h4 className='right'>
                    $419.87m
                  </h4>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}
