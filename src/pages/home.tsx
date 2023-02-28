import { useList } from "@pankod/refine-core";
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";
import { Box, Typography, Stack } from "@pankod/refine-mui";

const home = () => {
  return (
    <Box>
      <Typography fontSize={24} fontWeight={500} color="#11142d">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={864}
          series={[75, 25]}
          colors={["#47bbe8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for rent"
          value={264}
          series={[60, 40]}
          colors={["#47caa8", "#e8c8cf"]}
        />
        <PieChart
          title="Total customers"
          value={4286}
          series={[75, 25]}
          colors={["#dddbc8", "#c4c8ef"]}
        />
        <PieChart
          title="Total cities"
          value={486}
          series={[75, 25]}
          colors={["#87ece8", "#a8c8cf"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default home;
