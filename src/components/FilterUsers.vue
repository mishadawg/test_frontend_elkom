<template>
    <v-autocomplete
        v-model="filterUser"
        :items="usersItems"
        clearable
        @change="handlerFilter"
    ></v-autocomplete>
</template>
<script>
export default {
    name: "FilterUser",
    data: () => ({
        filterUser: null,
    }),
    methods: {
        handlerFilter(){
            this.$store.commit("goFilter", this.filterUser);
        },
    },
    computed: {
        usersItems: function () {
            return this.$store.getters?.fullUsersData?.map((item)=>{
                return `${item.lastname} ${item.firstname}`;
            });
        },
    }
}
</script>