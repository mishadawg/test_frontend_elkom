<template>
  <v-container>
    <div class="home-page-container">
      <FilterUsers />
      <div class="home-page-listAndCard">
        <ListUsers :users="usersList" v-if="usersList" @chooseUser="getCurrentUser"></ListUsers>
        <CardUser :user="currentUser" v-if="currentUser"></CardUser>
      </div>
    </div>
  </v-container>
</template>
<script>
import ListUsers from '@/components/ListUsers.vue'
import CardUser from '@/components/CardUser.vue'
import FilterUsers from '@/components/FilterUsers.vue'

export default {
  name: "HomePage",
  components:{
    ListUsers,
    CardUser,
    FilterUsers
  },
  data: () => ({
    currentUser: null,
  }),
  methods: {
    getCurrentUser(data){
      this.currentUser = data;
    },
    getFilterData(data){
      return data?.filter(
        (item) => 
          item?.fullname === this.$store.getters?.filterValue.fullname || 
          item?.lastname === this.$store.getters?.filterValue.lastname
      );
    },
  },
  computed: {
    haveFilter: function(){
      return !!this.$store.getters?.filterValue;
    },
    usersList: function () {
      return this.haveFilter ? this.getFilterData(this.$store.getters?.fullUsersData) : this.$store.getters?.fullUsersData;
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