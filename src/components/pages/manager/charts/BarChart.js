// import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
// import { tokens } from "./theme";

const BarChart = ({ routePlanData, onRoutePlanUpdate }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  // Extract the merchant name and count the number of outlets visited for each merchant
  const data = routePlanData.reduce((acc, curr) => {
    const existingMerchantIndex = acc.findIndex((item) => item.merchantName === curr.merchantName);
    if (existingMerchantIndex !== -1) {
      acc[existingMerchantIndex].outletsVisited += 1;
    } else {
      acc.push({
        merchantName: curr.merchantName,
        outletsVisited: 1,
      });
    }
    return acc;
  }, []);

  // Call the onRoutePlanUpdate callback when the chart is clicked
  const handleChartClick = (event) => {
    // Assuming you pass the merchant name as the index value
    const selectedMerchant = event.data.indexValue;
    onRoutePlanUpdate(selectedMerchant);
  };
  
  

  return (
    <ResponsiveBar
      data={data}
      // theme={{
      //   // Add your theme configuration here if needed
      // }}
      keys={["outletsVisited"]}
      indexBy="merchantName" // Use the merchant name as the index for the x-axis
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", "1.6"]] }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Merchandiser",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Outlets Visited",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={(e) => `${e.indexValue}: ${e.formattedValue} outlets visited by ${e.id}`}
      onClick={handleChartClick} // Handle chart click events
    />
  );
};

export default BarChart;
