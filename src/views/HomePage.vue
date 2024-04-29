<template>
    <div>
      <h1>Hello world</h1>
      <pre>{{ usersList }}</pre>
    </div>
</template>
<script>
export default {
  name: "HomePage",
  data: () => ({
    users: 'null',
  }),
  methods: {
    getUsers(){
      console.log(this.$store.getters.fullUsersData)
    }
  },
  computed: {
    usersList: function () {
      return this.$store.getters.fullUsersData;
    },
  },
  
};
</script>