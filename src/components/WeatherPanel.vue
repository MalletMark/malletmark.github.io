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
          class="timeBox border-0 p-2 h2 mb-2 text-grey text-center w-100"
          :class="item.tempcolor"
        />
        <input
          type="text"
          placeholder="60"
          v-model="item.temp"
          v-on:change="selectTemp($event, item.ind)"
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
      tempNum: 0,
      cards: [
        {
          ind: 0,
          temp: 60, tempcolor: "bg-primary",
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
      this.cards.push({ind:this.cards.length, temp:60, tempcolor:"bg-primary", title:"Windy", src: require('@/assets/w-icon-windy.png')});
    },
    removeCard() {
      this.cards.pop();
    },
    selectTemp(value, ind) {
      var tempVal = Number(this.cards[ind].temp);
      if (tempVal < 23) {
        this.cards[ind].tempcolor = "temp-col-23";
      } else if (tempVal < 32) {
        this.cards[ind].tempcolor = "temp-col-32";
      } else if (tempVal < 41) {
        this.cards[ind].tempcolor = "temp-col-41";
      } else if (tempVal < 50) {
        this.cards[ind].tempcolor = "temp-col-50";
      } else if (tempVal < 59) {
        this.cards[ind].tempcolor = "temp-col-59";
      } else if (tempVal < 68) {
        this.cards[ind].tempcolor = "temp-col-68";
      } else if (tempVal < 77) {
        this.cards[ind].tempcolor = "temp-col-77";
      } else if (tempVal < 86) {
        this.cards[ind].tempcolor = "temp-col-86";
      } else if (tempVal < 95) {
        this.cards[ind].tempcolor = "temp-col-95";
      } else {
        this.cards[ind].tempcolor = "temp-col-104";
      }
    },
    selectWeather(value, ind) {
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
.temp-col-23 {
  background-color: #001d8f;
}
.temp-col-32 {
  background-color: #0342ff;
}
.temp-col-41 {
  background-color: #4491fc;
}
.temp-col-50 {
  background-color: #a8d2ff;
}
.temp-col-59 {
  background-color: #3feff2;
}
.temp-col-68 {
  background-color: #1e9400;
}
.temp-col-77 {
  background-color: #a4eb2a;
}
.temp-col-86 {
  background-color: #ffe600;
}
.temp-col-95 {
  background-color: #ffa600;
}
.temp-col-104 {
  background-color: #ff1900;
}
</style>
