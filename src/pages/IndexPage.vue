<template>
  <q-page class="page-wrap q-py-xl q-px-md">
    <div class="row justify-center">
      <q-card class="my-card" bordered>
        <q-card-section>
          <q-input
            v-model="searchQuery"
            placeholder="Masukkan kota..."
            outlined
            :dense="dense"
            @keyup.enter="handleEnter"
          >
            <template v-slot:append>
              <q-btn
                color="primary"
                icon="search"
                :loading="isLoading"
                @click="performSearch"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section v-if="error">
          <div>{{ error }}</div>
        </q-card-section>
        <q-card-section>
          <weather-result :weather="result"></weather-result>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import WeatherResult from "components/WeatherResult.vue";

defineOptions({
  name: "IndexPage",
});

const searchQuery = ref("");
const isLoading = ref(false);
const error = ref(null);
const result = ref(null);

const performSearch = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery.value}&appid=ef516cb6b44c851ab24236d7f58ae936&units=metric`
    );

    if (!response.ok) throw new Error(response.status);
    const res = await response.json();
    result.value = res;
  } catch (err) {
    error.value =
      err.message == 404 ? "Lokasi tidak ditemukan!" : "Internal server error";
    result.value = null;
  } finally {
    isLoading.value = false;
  }

  isLoading.value = false;
};

const handleEnter = () => {
  performSearch();
};
</script>

<style>
.my-card {
  width: 90vw;
  background-color: rgba(255, 255, 255, 0.18);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (min-width: 768px) {
    width: 420px;
  }
}
</style>
