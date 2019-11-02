<template>
    <div class="pa-4">
    <p>Total Amount of Stocks Owned: {{  }}</p>
    <div id="chart">
      <apexchart type=line height="290" :options="chartOptions1" :series="series1" />
    </div>
    <div id="chart">
      <apexchart type=line height="290" :options="chartOptions2" :series="series2" />
    </div>
    <v-layout justify-center>
    <div>
        <v-btn rounded large color="green" style="margin-right:20px; color: white;">Buy</v-btn>
        <v-btn rounded large color="red" style="color: white;">Sell</v-btn>
    </div>
    </v-layout>
    </div>
</template>

<script>
export default {
    props: ['sym'],
  data: function() {
    return {
        series1: [{
            name: "Price",
            data: [10, 41, 35, 51, 49]
        }],
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
                curve: 'straight'
            },
            title: {
                text: 'Weekly Stock Data',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['date1', 'date2', 'date3', 'date4', 'date5'],
            }
        },
        series2: [{
            name: "Price",
            data: [10, 41, 35, 51, 49]
        }],
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
                curve: 'straight'
            },
            title: {
                text: 'Monthly Stock Data',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['date1', 'date2', 'date3', 'date4', 'date5'],
            }
        },
    };
  }
};
</script>