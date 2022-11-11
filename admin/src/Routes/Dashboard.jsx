import { Box, Grid, Heading} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie,Cell, Tooltip } from 'recharts';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid,Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
const data = [
  { name: 'Stays', value: 290 },
  { name: 'Cars', value: 150 },
  { name: 'Flights', value: 350 }
];
const data1 = [
    { name: '2019', user: 0 },
    { name: '2020', user: 15 },
    { name: '2021', user: 10 },
    { name: '2022', user: 20 }
  ];
const COLORS = ['#2E7D32', '#F9A825', '#D32F2F'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

function Dashboard(props) {
    return (
        <Box w={{base:"100%",md:"100%",lg:"82%"}} ml={{base:"0%",md:"0%",lg:"19%"}} mt={{base:"75px",md:"75px",lg:"55px"}} px="10px">
            <Box>
                <Heading color="black" fontWeight="500">Dashboard</Heading>
            </Box>
            <Grid w="100%" mt="30px" mb="20px"  templateColumns={{base:'100%',md:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'}} gap="4">
                <Box backgroundColor="#0277bd" color="white" borderRadius="10px" fontWeight="400">
                    <Box  p="20px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box >
                        <Heading size="lg" fontWeight="400">10</Heading>
                        <Heading size="md" fontWeight="400">Total Users</Heading>
                        </Box>
                        <Box fontSize="50px" color="#08467C">
                        <i className="fa-solid fa-user-plus" ></i>
                        </Box>
                    </Box>
                    <Link to="/users"><Box borderBottomRadius="10px" textAlign="center" backgroundColor="#08467C"> More Info <i className="fa-solid fa-circle-arrow-right"></i></Box></Link>
                </Box>

                <Box backgroundColor="#2e7d32" color="white" borderRadius="10px" >
                    <Box  p="20px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box >
                        <Heading size="lg" fontWeight="400">290</Heading>
                        <Heading size="md" fontWeight="400">Total Stays</Heading>
                        </Box>
                        <Box fontSize="50px" color="#1b5e20">
                        <i className="fa-solid fa-hotel"></i>
                        </Box>
                    </Box>
                    <Box borderBottomRadius="10px" textAlign="center" backgroundColor="#1b5e20"> More Info <i className="fa-solid fa-circle-arrow-right"></i></Box>
                </Box>
                

                <Box backgroundColor="#f9a825" color="white" borderRadius="10px" >
                    <Box  p="20px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box >
                        <Heading size="lg" fontWeight="400">150</Heading>
                        <Heading size="md" fontWeight="400">Total Cars</Heading>
                        </Box>
                        <Box fontSize="50px" color="#f57f17">
                        <i className="fa-solid fa-taxi"></i>
                        </Box>
                    </Box>
                    <Box borderBottomRadius="10px" textAlign="center" backgroundColor="#f57f17"> More Info <i className="fa-solid fa-circle-arrow-right"></i></Box>
                </Box>

                <Box backgroundColor="#d32f2f" color="white" borderRadius="10px" >
                    <Box  p="20px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box >
                        <Heading size="lg" fontWeight="400">35</Heading>
                        <Heading size="md" fontWeight="400">Total Flights</Heading>
                        </Box>
                        <Box fontSize="50px" color="#b71c1c" >
                        <i className="fa-solid fa-plane-departure"></i>
                        </Box>
                    </Box>
                    <Box borderBottomRadius="10px" textAlign="center" backgroundColor="#b71c1c"> More Info <i className="fa-solid fa-circle-arrow-right"></i></Box>
                </Box>


            </Grid>


           
                {/* Graph section begins here */}




            <Box w="100%" mt="40px"  pr="10px" display="flex" flexDirection={{base:"column",lg:"row"}} gap="4" justifyContent="space-between" alignItems="center">
            

             {/* Pie Graph section */}


             <Box w={{base:"100%",lg:"48%"}} border="1px solid grey" borderRadius="0.5em" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Box borderBottom="1px solid grey"mb="20px">
                    <Heading size="lg" fontWeight="400">Services Analytics Report</Heading>
                </Box>
                <Box display={{base:"none",md:"block",lg:"block"}}>
             <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </Box>
        <Box display={{base:"block",md:"none",lg:"none"}}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </Box>
             </Box>



             {/* Bar Graph section */}



             <Box w={{base:"100%",lg:"48%"}} border="1px solid grey" borderRadius="0.5em"display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                <Box borderBottom="1px solid grey" mb="20px">
                    <Heading size="lg" fontWeight="400">Users Analytics Report</Heading>
                </Box>
                <Box display={{base:"none",md:"block",lg:"block"}}>
                <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="user" fill="#0277BD" />
        </BarChart>
                </Box>
                <Box display={{base:"block",md:"none",lg:"none"}}>
                <BarChart
          width={300}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="user" fill="#0277BD" />
        </BarChart>
                </Box>
             </Box>


            </Box>
        </Box>
    );
}

export default Dashboard;