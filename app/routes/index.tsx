
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import StatsCard from '~/components/StatsCard';
import StatsTabs from '~/components/StatsTabs';
export default function Index() {
  const stats = [
    {
      title: 'CPI',
      value: '9%',
      isUp: false,
      date: new Date().toLocaleDateString(),
    },
    {
      title: 'MOM Inflation',
      isUp: true,
      value: '9%',
      date: new Date().toLocaleDateString(),
    },
    {
      title: 'YOY Inflation',
      isUp: false,
      value: '9%',
      date: new Date().toLocaleDateString(),
    }
  ]
  return (
    <div>
      <div className="relative bg-[url('https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg')] bg-cover md:pt-10 pb-32 pt-12">
        <h1 className="text-7xl  text-gray-500 p-5 font-bold">
          The Reserve Bank Of Wakanda
        </h1>
        <div className="flex flex-wrap w-full">
          {stats.map((stat, i) => (
            <StatsCard {...stat} />
          ))}
        </div>
      </div>
      <div className="md:flex p-10">
        <div className="w-full md:w-1/2">
            <StatsTabs/>
        </div>
        <div className="w-full md:w-1/2">

        </div>

      </div>


      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div >
  );
}
