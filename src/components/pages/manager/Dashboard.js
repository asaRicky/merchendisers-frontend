// import { Box, Button, Typography } from "@mui/material";
// import Header from "../../charts/Header";
// import StatBox from "../../charts/StatBox";
// import EmailIcon from '@mui/icons-material/Email';
// import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
// import IconButton from '@mui/material/IconButton';
// import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
// import { useState, useEffect } from "react";
// import { tokens } from "../../theme";



// const Dashboard = () => {
//   // State variable to store the route plan data
//   const [routePlan, setRoutePlan] = useState(null);


//   // Function to fetch the route plan data from the backend
//   const fetchRoutePlan = () => {
//     // Replace this with the actual API endpoint to fetch the route plan
//     fetch("/api/getRoutePlan")
//       .then((response) => response.json())
//       .then((data) => setRoutePlan(data))
//       .catch((error) => console.error("Error fetching route plan:", error));
//   };

//   // Fetch the route plan data on component mount
//   useEffect(() => {
//     fetchRoutePlan();
//   }, []);

  
// //   const colors = tokens(theme.palette.mode);
//   const colors = tokens.palette.mode === "dark" ? tokens.dark : tokens.light;

//   return (
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="Dashboard" subtitle="Welcome to your dashboard" />
//         <Box>
//           <Button
//             sx={{
//               backgroundColor: colors.blueAccent[700],
//               color: colors.grey[100],
//               fontSize: "14px",
//               fontWeight: "bold",
//               padding: "10px 20px",
//             }}
//           >
//             Download Reports
//           </Button>
//         </Box>
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="140px"
//         gap="20px"
//       >
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="12,361"
//             subtitle="Emails Sent"
//             progress="0.75"
//             increase="+14%"
//             icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="431,225"
//             subtitle="Sales Obtained"
//             progress="0.50"
//             increase="+21%"
//             icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
//           />
//         </Box>
//         {/* Rest of your StatBoxes */}
//         {/* ... */}

//         {/* ROW 2 */}
//         <Box
//           gridColumn="span 8"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Box
//             mt="25px"
//             p="0 30px"
//             display="flex "
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box>
//               <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
//                 Revenue Generated
//               </Typography>
//               <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
//                 $59,342.32
//               </Typography>
//             </Box>
//             <Box>
//               <IconButton>
//                 <DownloadOutlinedIcon
//                   sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
//                 />
//               </IconButton>
//             </Box>
//           </Box>
//           <Box height="250px" m="-20px 0 0 0">
//             {/* Replace this with your actual LineChart component */}
//             {/* <LineChart isDashboard={true} /> */}
//           </Box>
//         </Box>
//         {/* Rest of your Grid */}
//         {/* ... */}
//       </Box>

//       {/* Route Plan */}
//       <Box mt={3}>
//         <Typography variant="h5" fontWeight="600">
//           Monthly Route Plan
//         </Typography>
//         {routePlan ? (
//           <Box>
//             {/* Display the route plan using a Google Calendar or any suitable component */}
//             {/* You can use an external library like react-google-calendar or implement a custom calendar */}
//             {/* <GoogleCalendar routePlan={routePlan} /> */}
//           </Box>
//         ) : (
//           <Typography>Loading route plan...</Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;
