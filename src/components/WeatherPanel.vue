<template>
  <div class="weatherpanel p-5">
    <h1>LSBN Weather Forecast</h1>
    <div
      v-for="(item) in cards"
      :key="item"
      :ref="addCard"
      class="b-0 shadow card d-inline-flex m-2 bd-highlight"
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
        <img :src="item.src" class="img-thumbnail border-0" />
        <h1 class="weather-title">{{ item.title }}</h1>
      </div>
      <v-select
        class="weather-dd"
        :options="weatherOpts"
        :clearable="false"
        append-icon-cb="()"
        v-on:input="selectWeather($event, item.ind)"
        item-text="title"
        item-value="src"
        return-object
      >
        <template slot="option" slot-scope="option">
          <img :src="option.src" class="img-thumbnail border-0" />
        </template>
      </v-select>
    </div>
    <div id="example-1">
      <button v-on:click="addCard">Add</button>
      <button v-on:click="removeCard">Remove</button>
    </div>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "WeatherPanel",
  props: {
    time: String,
  },
  data() {
    return {
      cards: [
        {
          ind: 0,
          title: "Windy",
          src: require('@/assets/w-icon-windy.png')
        }
      ],
      weatherOpts: [
        {
          title: "Cloudy",
          src: require('@/assets/w-icon-cloudy.png'),
        },
        {
          title: "Ice",
          src: require('@/assets/w-icon-ice.png'),
        },
        {
          title: "Partially Cloudy",
          src: require('@/assets/w-icon-light_cloudy.png'),
        },
        {
          title: "Light Rain",
          src: require('@/assets/w-icon-light_rain.png'),
        },
        {
          title: "Rainy",
          src: require('@/assets/w-icon-rainy.png'),
        },
        {
          title: "Snow",
          src: require('@/assets/w-icon-snow.png'),
        },
        {
          title: "Sunny",
          src: require('@/assets/w-icon-sunny.png'),
        },
        {
          title: "Thunder",
          src: require('@/assets/w-icon-thunder.png'),
        },
        {
          title: "Storm",
          src: require('@/assets/w-icon-thunder_rain.png'),
        },
        {
          title: "Tornado",
          src: require('@/assets/w-icon-tornado.png'),
        },
        {
          title: "Windy",
          src: require('@/assets/w-icon-windy.png'),
        },
      ],
    };
  },
  methods: {
    addCard() {
      this.cards.push({ind:this.cards.length, title:"Windy", src: require('@/assets/w-icon-windy.png')});
    },
    removeCard() {
      this.cards.pop();
    },
    selectWeather(value, ind) {
      console.log(value);
      console.log(ind);
      this.cards[ind].title = value.title;
      this.cards[ind].src = value.src;
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
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

h1 {
  font-family: "Bebas Neue", cursive;
}
.weather-title {
  min-height: 100px;
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
.vs__dropdown-toggle {
  border: none !important;
}
.weather-dd .vs__dropdown-toggle:before {
  border: none !important;
}
.weather-dd .vs__dropdown-toggle:after {
  border: none !important;
}
</style>
