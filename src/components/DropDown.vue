<template>
  <div class="q-pa-md">
    <q-btn-dropdown color="secondary" label="Tugas Najwa L">
      <q-list>
        <q-item
          v-for="(item, index) in items"
          :key="index"
          clickable
          :to="item.link"
          target="_blank"
        >
          <q-item-section>
            <q-item-label>
              {{ item.label }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup>
defineOptions({
  name: "DropDown",
});

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
