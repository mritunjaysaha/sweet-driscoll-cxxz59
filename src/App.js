import CalendarExample from "./components/calendar";
import CalendarExampleTailwind from "./components/calendartailwind";
import QuillEditorExample from "./components/quill";
import DataTableExample from "./components/dataTables";
import DataTableExampleV8 from "./components/dataTablesV8";
import KanbanExample from "./components/kanban";
import WizardExample from "./components/wizard";
import MiniProile from "./components/card/MiniProfile";
import General from "./components/card/GeneralInformation";
import NFT from "./components/card/NFT";
import SignIn from "./components/card/LoginForm";
import Notifications from "./components/card/Notifications";
import MiniStatistics from "./components/card/MiniStatistics";
import BarChart from "./components/charts/barChart";
import BubbleChart from "./components/charts/bubbleChart";
import DonutChart from "./components/charts/donutChart";
import LineBarChart from "./components/charts/lineBarChart";
import LineChart from "./components/charts/lineChart";
import LineAreaChart from "./components/charts/lineAreaChart";
import PieChart from "./components/charts/pieChart";
import PolarChart from "./components/charts/polarChart";
import RadarChart from "./components/charts/radarChart";
import Dropzone from "./components/Dropzone";
import MapComponent from "./components/map";
import MiniCalendar from "./components/MiniCalendar";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";
import avatar4 from "./assets/avatar4.png";
import Nft1 from "./assets/img/Nft1.png";

import Card from "./components/card/Card.js";
import {
  lineChartDataOverallRevenue,
  lineChartOptionsOverallRevenue,
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
  barChartOptionsCharts2,
  pieChartOptions,
  pieChartData,
  barChartDataCharts2,
  bubbleChartData,
  bubbleChartOptions,
  donutChartDataCharts1,
  donutChartOptionsCharts1,
  lineBarChartData,
  lineBarChartOptions,
  lineChartDataAreaEventsCalendar,
  lineChartOptionsAreaEventsCalendar,
  polarChartDataCharts,
  polarChartOptionsCharts,
  radarChartDataCharts,
  radarChartOptionsCharts
} from "./components/charts/chartData.js";
import TotalSpent from "./components/card/TotalSpent";
import tableData1 from "./components/tableData.json";
import tableDataV81 from "./variables/tableDataTopCreators";
import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
  FormLabel,
  Avatar,
  Select
} from "@chakra-ui/react";
import Showcase from "./components/Showcase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-quill/dist/quill.snow.css"; // ES6
import "./styles.css";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  MdBarChart,
  // MdAttachMoney,
  MdOutlineCloudUpload
  // MdAddTask,
  // MdFileCopy
} from "react-icons/md";
import Usa from "./assets/img/usa.png";

export default function App() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brand = useColorModeValue("brand.500", "brand.400");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const columnsData1 = [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Artworks",
      accessor: "artworks"
    },
    {
      Header: "Rating",
      accessor: "rating"
    }
  ];
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/calendar">
              <CalendarExample />
            </Route>
            <Route exact path="/calendar-tailwind">
              <Showcase>
                <CalendarExampleTailwind />
              </Showcase>
            </Route>
            <Route path="/mini-profile">
              <Showcase>
                <MiniProile />
              </Showcase>
            </Route>
            <Route path="/sign-in">
              <Showcase>
                <SignIn />
              </Showcase>
            </Route>
            <Route path="/general-info">
              <Showcase>
                <General maxW="590px" mt="50px" />
              </Showcase>
            </Route>
            <Route path="/notifications">
              <Showcase>
                <Notifications />
              </Showcase>
            </Route>
            <Route path="/nft">
              <Showcase>
                <NFT
                  name="3D Cubes Art"
                  author="By Manny Gates"
                  bidders={[
                    avatar2,
                    avatar3,
                    avatar4,
                    avatar2,
                    avatar3,
                    avatar4
                  ]}
                  image={Nft1}
                  currentBid="0.91 ETH"
                  download="#"
                />
              </Showcase>
            </Route>
            <Route path="/mini-statistics">
              <Showcase>
                <SimpleGrid
                  columns="1"
                  maxW="350px"
                  gap="20px"
                  pt="40px"
                  mx="auto"
                >
                  <MiniStatistics
                    startContent={
                      <Flex
                        borderRadius="100px"
                        justify="center"
                        align="center"
                        w="56px"
                        h="56px"
                        bg={boxBg}
                      >
                        <Icon
                          w="32px"
                          h="32px"
                          as={MdBarChart}
                          color={brandColor}
                        />
                      </Flex>
                    }
                    name="Earnings"
                    value="$350.4"
                  />
                  <MiniStatistics growth="+23%" name="Sales" value="$574.34" />
                  <MiniStatistics
                    endContent={
                      <Flex me="-16px" mt="10px">
                        <FormLabel htmlFor="balance">
                          <Avatar src={Usa} />
                        </FormLabel>
                        <Select
                          id="balance"
                          variant="mini"
                          mt="5px"
                          me="0px"
                          defaultValue="usd"
                        >
                          <option value="usd">USD</option>
                          <option value="eur">EUR</option>
                          <option value="gba">GBA</option>
                        </Select>
                      </Flex>
                    }
                    name="Your balance"
                    value="$1,000"
                  />
                </SimpleGrid>
              </Showcase>
            </Route>
            <Route path="/total-spent">
              <Showcase>
                <TotalSpent mt="40px" />
              </Showcase>
            </Route>
            <Route path="/data-tables">
              <Card maxWidth="700px" mx="auto" mt="30px">
                <DataTableExample
                  tableData={tableData1}
                  columnsData={columnsData1}
                />
              </Card>
            </Route>
            <Route path="/data-tables-v8">
              <Showcase>
                <Card maxWidth="600px" mx="auto" mt="30px">
                  <DataTableExampleV8 tableData={tableDataV81} />
                </Card>
              </Showcase>
            </Route>
            <Route path="/kanban">
              <Showcase>
                <KanbanExample />
              </Showcase>
            </Route>
            <Route path="/map">
              <MapComponent />
            </Route>
            <Route path="/quill-editor">
              <Box maxWidth="450px" mx="auto" mt="30px">
                <QuillEditorExample />
              </Box>
            </Route>
            <Route path="/line-chart-1">
              <LineChart
                chartData={lineChartDataOverallRevenue}
                chartOptions={lineChartOptionsOverallRevenue}
              />
            </Route>
            <Route path="/line-chart-2">
              <LineAreaChart
                chartData={lineChartDataAreaEventsCalendar}
                chartOptions={lineChartOptionsAreaEventsCalendar}
              />
            </Route>
            <Route path="/bar-chart-1">
              <Showcase>
                <Card
                  mx="auto"
                  mt="50px"
                  align="center"
                  direction="column"
                  w="400px"
                >
                  <Flex
                    justify="space-between"
                    align="start"
                    px="10px"
                    pt="5px"
                  >
                    <Flex flexDirection="column" align="start" me="20px">
                      <Text
                        color="secondaryGray.600"
                        fontSize="sm"
                        fontWeight="500"
                      >
                        Daily Traffic
                      </Text>
                      <Flex align="end">
                        <Text
                          color={textColor}
                          fontSize="34px"
                          fontWeight="700"
                          lineHeight="100%"
                        >
                          2.579
                        </Text>
                        <Text
                          ms="6px"
                          color="secondaryGray.600"
                          fontSize="sm"
                          fontWeight="500"
                        >
                          Visitors
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex align="center">
                      <Icon as={RiArrowUpSFill} color="green.500" />
                      <Text color="green.500" fontSize="sm" fontWeight="700">
                        +2.45%
                      </Text>
                    </Flex>
                  </Flex>
                  <Box h="240px" mt="auto">
                    <BarChart
                      chartData={barChartDataDailyTraffic}
                      chartOptions={barChartOptionsDailyTraffic}
                    />
                  </Box>
                </Card>
              </Showcase>
            </Route>
            <Route path="/bar-chart-2">
              <BarChart
                chartData={barChartDataCharts2}
                chartOptions={barChartOptionsCharts2}
              />
            </Route>
            <Route path="/dropzone">
              <Showcase>
                <Card p="30px" w="400px" mx="auto" mt="50px">
                  <Text
                    color={textColor}
                    fontSize="2xl"
                    fontWeight="700"
                    mb="20px"
                  >
                    Media
                  </Text>
                  <Dropzone
                    content={
                      <Box>
                        <Icon
                          as={MdOutlineCloudUpload}
                          w="80px"
                          h="80px"
                          color={textColor}
                        />
                        <Text
                          mx="auto"
                          mb="12px"
                          fontSize="lg"
                          fontWeight="700"
                          whiteSpace="pre-wrap"
                          color={textColor}
                        >
                          Drop your files here, or{" "}
                          <Text
                            as="span"
                            fontSize="lg"
                            fontWeight="700"
                            color={brand}
                          >
                            browse
                          </Text>
                        </Text>
                        <Text
                          fontSize="sm"
                          fontWeight="500"
                          color="secondaryGray.500"
                        >
                          PNG, JPG and GIF files are allowed
                        </Text>
                      </Box>
                    }
                  />
                </Card>
              </Showcase>
            </Route>
            <Route path="/mixed-chart">
              <LineBarChart
                chartData={lineBarChartData}
                chartOptions={lineBarChartOptions}
              />
            </Route>
            <Route path="/bubble-chart">
              <BubbleChart
                chartData={bubbleChartData}
                chartOptions={bubbleChartOptions}
              />
            </Route>
            <Route path="/donut-chart">
              <DonutChart
                chartData={donutChartDataCharts1}
                chartOptions={donutChartOptionsCharts1}
              />
            </Route>
            <Route path="/pie-chart">
              <PieChart
                chartData={pieChartData}
                chartOptions={pieChartOptions}
              />
            </Route>
            <Route path="/radar-chart">
              <RadarChart
                chartData={radarChartDataCharts}
                chartOptions={radarChartOptionsCharts}
              />
            </Route>
            <Route path="/polar-chart">
              <PolarChart
                chartData={polarChartDataCharts}
                chartOptions={polarChartOptionsCharts}
              />
            </Route>
            <Route path="/wizard">
              <WizardExample />
            </Route>
            <Route path="/mini-calendar">
              <Showcase>
                <MiniCalendar />
              </Showcase>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
