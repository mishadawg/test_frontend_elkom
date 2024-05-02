<template>
    <v-card class="card-user-container">
        <pre>{{ user }}</pre>
    </v-card>
</template>
<script>
export default {
    name: "CardUser",
    props: {
        user: {
            required: true,
        },
    },
}
</script>
<style lang="scss">
.card-user{
    &-container{
        max-width: 490px;
        width: 100%;
        border: 1px solid black !important;
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75) !important;
        border-radius: 14px !important;
    }
}
</style>