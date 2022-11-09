import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'
import AuctionResults from './AuctionResults'
import ExchangeRates from './ExchangeRates'
import GoldCoinPriceTable from './GoldCoin'
import InflationRates from './InflationRates'

function StatsTabs() {
  return (
    <div>   <Tabs>
    <TabList>
      <Tab className='font-bold uppercase px-5 py-3  rounded block leading-normal ' >Gold Coin Price</Tab>
      <Tab className='font-bold uppercase px-5 py-3 rounded block leading-normal '>Exchange Rates</Tab>
      <Tab className='font-bold uppercase px-5 py-3 rounded block leading-normal '>Inflation Rates</Tab>
      <Tab className='font-bold uppercase px-5 py-3  rounded block leading-normal '>Auction Results</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
       <GoldCoinPriceTable/>
      </TabPanel>
      <TabPanel>
        <ExchangeRates/>
      </TabPanel>
      <TabPanel>
        <InflationRates/>
      </TabPanel>
      <TabPanel>
        <AuctionResults/>
      </TabPanel>
    </TabPanels>
  </Tabs></div>
  )
}

export default StatsTabs