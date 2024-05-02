<template>
  <v-container>
    <v-row class="justify-center ga-4 my-4">
      <ListUsers :users="usersList" v-if="usersList"></ListUsers>
      <CardUser :user="currentUser" v-if="currentUser"></CardUser>
    </v-row>
  </v-container>
</template>
<script>
import ListUsers from '@/components/ListUsers.vue'
import CardUser from '@/components/CardUser.vue'

export default {
  name: "HomePage",
  components:{
    ListUsers,
    CardUser,
  },
  data: () => ({
    // currentUser: null,
  }),
  methods: {
    // getCurrentUser(data){
    //   this.currentUser = data;
    // },
    // getFilterData(data){
    //   return data?.filter(
    //     (item) => 
    //       item?.fullname === this.$store.getters?.filterValue.fullname || 
    //       item?.lastname === this.$store.getters?.filterValue.lastname
    //   );
    // },
  },
  computed: {
    // haveFilter: function(){
    //   return !!this.$store.getters?.filterValue;
    // },
    currentUser: function() {
      return this.$store.getters?.currentUser;
    },
    usersList: function () {
      return this.$store.getters?.fullUsersData;
    },
  },
  
};
</script>
