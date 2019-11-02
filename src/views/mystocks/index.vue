<template>
  <v-container>
    <h1 class="headline pt-3">Search for Stocks</h1>
    <v-row align="center">
      <!-- Our account statistics -->
      <v-col class="col-12 col-sm-6 col-md-4">
        <v-card>
          TEsting
          <apexchart
            type="line"
            height="350"
            :options="chartOptions"
            :series="series"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from "apexcharts";
export default {
  components: {
    apexchart: VueApexCharts
  },
  data:()=> ({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chartOptions: {
      chart: {
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    }
  })
};
</script>

<style></style>
