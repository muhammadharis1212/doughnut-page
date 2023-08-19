import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import DoughnutChart from "../components/DoughnutChart";
import { ChartData } from "chart.js";

const DoughnutPage = () => {
  const [age, setAge] = useState("");
  const [doughnutData, setDoughnutData] = useState<ChartData<"doughnut">>({
    datasets: [],
  });

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    const value: number = Number(event.target.value);
    console.log(event.target.value);
    if (value === 1) {
      setDoughnutData(() => ({
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "Dataset 1",
            data: [1, 2, 3, 4, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
          },
        ],
      }));
    } else if (value === 2) {
      setDoughnutData(() => ({
        labels: ["Tulips", "Roses", "Jasmines", "Sunflowers", "Lilies"],
        datasets: [
          {
            label: "Dataset 2",
            data: [10, 20, 3, 14, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
          },
        ],
      }));
    }
  };
  return (
    <div>
      <Container maxWidth={"lg"}>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <Box
              sx={{
                display: "flex",

                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 486,
                  height: 328,
                  borderRadius: "15px",
                },
              }}
            >
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                elevation={0}
                color="white"
              >
                <DoughnutChart data={doughnutData} />
              </Paper>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 486,
                  height: 115,
                  borderRadius: "15px",
                },
              }}
            >
              <Paper elevation={1} color="white" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 486,
                  height: 115,
                  borderRadius: "15px",
                  marginBottom: "24px",
                },
              }}
            >
              <Paper elevation={1} color="white" />
            </Box>
            <Box>
              <Button
                sx={{ height: "85px", width: "98%", borderRadius: "25px" }}
                variant="contained"
              >
                Calculate
              </Button>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 585,
                  height: 150,
                  borderRadius: "15px",
                },
              }}
            >
              <Paper elevation={1} color="white" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 585,
                  height: 470,
                  borderRadius: "15px",
                },
              }}
            >
              <Paper elevation={1} color="white">
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DoughnutPage;
