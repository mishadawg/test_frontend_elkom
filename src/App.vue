<template>
  <v-app>
    <v-main>
      <!-- TODO добавить возможность редактировать данные пользователя -->
      <!-- TODO сделать в отдельном блоке отображение информации о выбранном пользователе с использование v-card -->
      <!-- TODO используйте v-autocomplete для выбора пользователя -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),

  methods: {
    getUsers() {
      // TODO получить список пользователей отсюда
      // https://fakerapi.it/api/v1/persons?_locale=ru_RU
    },
  },
};
</script>
