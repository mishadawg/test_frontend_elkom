<template>
    <div class="list-users">
        <FilterUsers />
        <v-list class="list-users-container">
            <v-list-item 
                :class="{'active': currentUser === user}" 
                v-for="(user,index) in users" 
                :key="index" 
                @click="chooseCurrentUser(user)"
            >
                <v-list-item-content>
                    <v-list-item-title>{{ `${user.lastname} ${user.firstname}` }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-img :src="'https://cdn.vuetifyjs.com/images/lists/2.jpg'"></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
import FilterUsers from '@/components/FilterUsers.vue'

export default {
    name: "ListUsers",
    components:{
        FilterUsers
    },
    props: {
        users: {
            required: true,
        },
    },
    // data: () => ({
    //     currentUser: null,
    // }),
    // emits:['chooseUser'],
    computed: {
        currentUser: function() {
            return this.$store.getters?.currentUser;
        },
    },
    methods: {
        chooseCurrentUser(data){
            // this.currentUser = data;
            this.$store.commit("chooseCurrentUser", data);
            // this.$emit('chooseUser', data);
        },
    },
};
</script>
<style lang="scss">
.list-users{
    max-width: 490px;
    width: 100%;
    &-container{
        border: 1px solid black !important;
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75) !important;
        border-radius: 14px !important;
        padding: 0px;
    }
    .v-list-item{
        cursor: pointer !important;
        transition: .2s linear;
        &:hover,&.active{
            .v-list-item__title {
                text-decoration: underline !important;
            }       
        }
        &.active{
            &::before{
                opacity: 0.04 !important;
            }
        }
    }
}
</style>