import { Box, Typography, Stack } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="10px"
    >
      <Typography fontSize={18} fontWeight={500} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={600} color="#11142d">
          $369,428
        </Typography>

        <Stack direction={"row"} alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 24, color: "475be8" }} />

          <Stack>
            <Typography fontSize={14} color="#475be8">
              0.8%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than last month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;
