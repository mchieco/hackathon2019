<template>
  <v-container>
    <h1 class="headline pt-3">Search for Stocks</h1>
    <v-row align="center">
      <v-col cols="12">
        <v-card>
          <v-app-bar color="white" dense flat>
            <v-text-field
              background-color="white"
              solo
              hide-details
              flat
              color="blue"
              prepend-inner-icon="mdi-magnify"
              label="Search symbol"
              v-model="searchFor"
            ></v-text-field>
          </v-app-bar>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="result in results"
        :key="result.name"
      >
        <v-card class="pa-3">
          <v-list-item three-line>
            <v-list-item-content class="pb-1">
              <v-list-item-title class="headline">{{
                result.Name || "No name"
              }}</v-list-item-title>
              <v-list-item-title class="subtitle-1 font-weight-regular">
                {{ result.Symbol || "No Symbol" }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import searchService from "@/services/stocks/search";
export default {
  data: () => ({
    results: [],
    searchFor: ""
  }),
  methods: {
    async search() {
      console.log("waitng..");
      let results = await searchService(this.searchFor);
      this.results = results;
    }
  },
  watch: {
    searchFor() {
      this.search();
    }
  }
};
</script>

<style></style>
