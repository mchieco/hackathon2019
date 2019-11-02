<template>
  <v-container>
    <h1 class="headline pt-3">My Account</h1>
    <v-row align="center" justify="center">
      <!-- Our account statistics -->
      <v-col class="col-12 col-sm-6 col-md-12 justify-center">
        <v-card class="status-card pa-2">
          <h2>Account Value: {{ accountValue }}</h2>
          <apexchart type="line" :options="chartOptions" :series="series" height=350 />
        </v-card>
      </v-col>
      <!-- <v-col class="col-12 col-sm-6 col-md-6">
        <v-flex>
          <v-layout column justify-space-between fill-height>
            <v-card class="mid-card mb-2 pa-2">
              <h2>Cash on Hand: {{ cashOnHand }}</h2>
            </v-card>
            <v-card class="mid-card pa-2">
              Second Card
            </v-card>
          </v-layout>
        </v-flex>
      </v-col> -->
    </v-row>
    <v-row>
      <v-col class="col-12">
        <v-data-table
          :headers="headers"
          :items="stocksOwned"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import VueApexCharts from /"apexcharts";
export default {
  data: () => ({
    accountValue: 12000,
    cashOnHand: 1200,
    series: [
      {
        name: "Account Value",
        data: [
          10000,
          10030,
          9823,
          8200,
          8405,
          9203,
          9850,
          12343,
          13233,
          12002,
          11002,
          10200,
          11300,
          11000,
          10300,
          9300,
          8400,
          9000,
          9900,
          11300,
          13000,
          14000,
          11000,
          10000,
          9033,
          10030,
          8700,
          9200,
          11030
        ]
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
        text: "Account Value by Past Month",
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
          "10/2",
          "10/3",
          "10/4",
          "10/5",
          "10/6",
          "10/7",
          "10/8",
          "10/9",
          "10/10",
          "10/11",
          "10/12",
          "10/13",
          "10/14",
          "10/15",
          "10/16",
          "10/17",
          "10/18",
          "10/19",
          "10/20",
          "10/21",
          "10/22",
          "10/23",
          "10/24",
          "10/25",
          "10/26",
          "10/27",
          "10/28",
          "10/29",
          "10/30",
          "11/1",
          "11/2"
        ]
      }
    },
    headers: [
      {
        text: "Stock Name",
        align: "left",
        sortable: true,
        value: "name"
      },
      { text: "Symbol", value: "symbol" },
      { text: "Units Owned", value: "units" },
      { text: "Value", value: "value" }
    ],
    stocksOwned: [
      {
        name: "Microsoft",
        symbol: "MSFT",
        units: 1230,
        value: 12000
      }
    ]
  })
};
</script>

<style scoped>
.status-card {
  height: 400px;
}
.mid-card {
  height: 194px;
}
</style>
