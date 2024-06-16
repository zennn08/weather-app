<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="header-container">
        <q-btn dense flat round icon="cloud" target="/" />
        <q-toolbar-title> Weather </q-toolbar-title>
        <DropDown :items="linksList" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import DropDown from "components/DropDown.vue";
defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    label: "Tugas 1",
    link: "/tugas1",
  },
  {
    label: "Tugas 2",
    link: "/tugas2",
  },
  {
    label: "Tugas 3",
    link: "/tugas3",
  },
  {
    label: "Tugas 4",
    link: "/tugas4",
  },
  {
    label: "Tugas 5",
    link: "/tugas5",
  },
  {
    label: "Tugas 6",
    link: "/tugas6",
  },
  {
    label: "Tugas 7",
    link: "/tugas7",
  },
];
</script>

<style>
.header-container {
  max-width: 1140px; /* Sesuaikan dengan ukuran container Bootstrap */
  margin: 0 auto; /* Untuk menyorok ke tengah */
  padding: 0 15px; /* Padding agar tidak menempel di sisi */
  box-sizing: border-box; /* Agar padding tidak menambah lebar total */
}
</style>
