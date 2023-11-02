import React from 'react'
import Card from '../component/Card'
import ColumnChart from '../component/ColumnChart'
import Box from '../component/Box'

function HomePage() {
  return (
    <div className="">
      <div className=" px-4 max-w-6xl py-2 bg-gray-200 ">
        <Card />
        <ColumnChart />
        <Box />
      </div>
    </div>
  );
}

export default HomePage