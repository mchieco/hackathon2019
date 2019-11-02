<template>
  <div class="">
    <p>Total Amount of Stocks Owned: {{ sym }}</p>
    <apexchart
      type="line"
      height="290"
      :options="chartOptions1"
      :series="series1"
    />
    <apexchart
      type="line"
      height="290"
      :options="chartOptions2"
      :series="series2"
    />
    <v-layout justify-center>
      <div>
        <v-btn
          rounded
          large
          color="green"
          style="margin-right:20px; color: white;"
          >Buy</v-btn
        >
        <v-btn rounded large color="red" style="color: white;">Sell</v-btn>
      </div>
    </v-layout>
  </div>
</template>

<script>
import priceService from "@/services/stocks/prices";
export default {
  props: ["sym"],
  data: function() {
    return {
      series1: [
        {
          name: "Price",
          data: [10, 41, 35, 51, 49]
        }
      ],
      chartOptions1: {
        chart: {
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Weekly Stock Data",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: []
        }
      },
      series2: [
        {
          name: "Price",
          data: [10, 41, 35, 51, 49]
        }
      ],
      chartOptions2: {
        chart: {
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Monthly Stock Data",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: []
        }
      }
    };
  },
  methods: {
    async load() {
      console.log(this.sym);
      let x = await priceService(this.sym);
      console.log(x);
      let keys = Object.keys(x);
      console.log(x);
      let last7 = [];
      let last7data = [];
      for (var i = 0; i < 7; i++) {
        let key = keys.shift();
        last7.push(key);
        console.log(key, x[key]);
        last7data.push(Number(x[key]["1. open"]));
      }
      let secondSet = Object.keys(x);
      let AHHHH = [];
      secondSet.forEach(key => {
        AHHHH.push(x[key]["1. open"]);
      });
      console.log(last7, last7data);
      this.series1 = [
        {
          name: "Price",
          data: last7data
        }
      ];
      this.series2 = [
        {
          name: "Price",
          data: AHHHH
        }
      ];
      this.chartOptions1.xaxis.categories = last7;
    }
  },
  mounted() {
    this.load();
  }
};
</script>