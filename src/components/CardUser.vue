<template>
    <div class="card-user-container typical-block-container">
        <v-card class="card-user typical-block-style pa-4">
            <v-form>
                <v-text-field label="Фамилия" v-model="userData.lastname" :rules="requiredRule" required></v-text-field>
                <v-text-field label="Имя" v-model="userData.firstname" :rules="requiredRule" required></v-text-field>
                <v-select v-model="userData.gender" :items="genders" label="Пол"></v-select>
                <v-menu 
                    ref="visibleBirthday" 
                    v-model="visibleBirthday" 
                    :close-on-content-click="true" 
                    :return-value.sync="userData.birthday"
                    transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field 
                            v-model="userData.birthday" 
                            label="Дата рождения" 
                            prepend-icon="mdi-calendar" 
                            readonly
                            v-bind="attrs" v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="userData.birthday" no-title scrollable>
                    </v-date-picker>
                </v-menu>
                <v-text-field label="Email" v-model="userData.email" :rules="emailRules"></v-text-field>
                <v-text-field label="Вебсайт" v-model="userData.website"></v-text-field>
            </v-form>
        </v-card>
    </div>
</template>
<script>
export default {
    name: "CardUser",
    props: {
        user: {
            required: true,
        },
    },
    data: () => ({
        valid: false,
        requiredRule: [
            v => !!v || 'Обязательное поле',
        ],
        emailRules: [
            v => !!v || 'E-mail обязателен',
            v => /.+@.+/.test(v) || 'Ошибка в заполнении E-mail',
        ],
        genders: [
            'female',
            'male'
        ],
        visibleBirthday: false,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }),
    computed: {
        userData: function () {
            return this.user;
        },
    }
}
</script>