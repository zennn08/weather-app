<template>
  <div v-if="weather">
    <div class="row items-center justify-center">
      <div class="col-6">
        <div class="text-left text-h5">
          {{ weather.weather[0].main }}
        </div>
      </div>
      <div class="col-6">
        <div class="text-right text-h5">
          {{ weather.name }}, {{ weather.sys.country }}
        </div>
      </div>
    </div>
    <div class="row items-center justify-center justify-between">
      <div class="col-4">
        <q-img
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`"
          width="150px"
        />
      </div>
      <div class="col-4">
        <div class="text-h3 text-left">
          {{ weather.main.temp.toFixed(0) }}°C
        </div>
      </div>
    </div>
    <div class="row items-center justify-center">
      <div class="col-6">
        <div class="text-left">Feels like</div>
      </div>
      <div class="col-6">
        <div class="text-right text-weight-bold">
          {{ weather.main.feels_like.toFixed(0) }}°C
        </div>
      </div>
      <div class="col-6">
        <div class="text-left">Pressure</div>
      </div>
      <div class="col-6">
        <div class="text-right text-weight-bold">
          {{ weather.main.pressure }}hPa
        </div>
      </div>
      <div class="col-6">
        <div class="text-left">Wind</div>
      </div>
      <div class="col-6">
        <div class="text-right text-weight-bold">
          {{ weather.wind.speed }}m/s
        </div>
      </div>
      <div class="col-6">
        <div class="text-left">Visibility</div>
      </div>
      <div class="col-6">
        <div class="text-right text-weight-bold">
          {{ (weather.visibility / 1000).toFixed(0) }}km
        </div>
      </div>
      <div class="col-6">
        <div class="text-left">Humidity</div>
      </div>
      <div class="col-6">
        <div class="text-right text-weight-bold">
          {{ weather.main.humidity }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "WeatherResult",
});

const props = defineProps({
  weather: {
    type: Object,
  },
});
</script>
