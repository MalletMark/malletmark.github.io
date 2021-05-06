<template>
  <div class="weatherpanel p-5">
    <h1>LSBN Weather Forecast</h1>
    <div
      v-for="(item, index) in cards"
      :key="item"
      :ref="addCard"
      class="card d-inline-flex m-2 bd-highlight"
      style="width: 10rem"
    >
      <div class="card-body p-0">
        <input
          type="text"
          placeholder="1:30 PM"
          class="timeBox border-0 p-2 h2 mb-2 bg-danger text-white text-center w-100"
        />
        <input
          type="text"
          placeholder="60"
          class="tempBox border-0 w-100 text-center m-0"
          style="font-size: 5rem; line-height: 0"
        />
        <img src="" class="img-thumbnail border-0" />
        <div class="dropdown">
          <button
            class="btn w-100 h2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ index }}. {{ item }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <v-select :options="options" label="title">
          <template slot="option" slot-scope="option">
            <img :src="option.src" /> {{ option.title }}
          </template>
        </v-select>
      </div>
    </div>
    <div id="example-1">
      <button v-on:click="addCard">Add</button>
      <button v-on:click="removeCard">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherPanel",
  props: {
    time: String,
  },
  data() {
    return {
      cards: ["1"],
      options: [
        {
          title: "Windy",
          src:
            "https://cdn2.iconfinder.com/data/icons/weather-and-meteorology-simplicon-set/102/windy-cloud-wind-512.png",
        },
        {
          title: "Sunny",
          src:
            "https://cdn4.iconfinder.com/data/icons/spring-theme-line/32/sun--512.png",
        },
      ],
    };
  },
  methods: {
    addCard() {
      this.cards.push(this.cards.length + 1);
    },
    removeCard() {
      this.cards.pop();
    },
  },
  beforeUpdate() {},
  updated() {
    console.log(this.cards);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

h1 {
  font-family: 'Bebas Neue', cursive;
}
.timeBox::placeholder {
  color: white;
  text-align: center;
  border: 0px;
}
.tempBox::placeholder {
  color: rgb(53, 53, 53);
  text-align: center;
  border: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
