<template>
  <v-container>
    <div class="home-page-container">
      <div class="home-page-listAndCard">
        <ListUsers :users="usersList" v-if="usersList"></ListUsers>
        <CardUser :user="currentUser" v-if="currentUser"></CardUser>
      </div>
    </div>
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
<style lang="scss">
.home-page{
  &-listAndCard{
    display: flex;
    justify-content: center;
    gap: 16px;
  }
}
</style>