<template lang="html">
  <div class="main-container">
    <Users :users="users" v-on:updateOriginal="updateUserName" />
  </div>
</template>

<script>

import axios from 'axios';
import { mapActions } from 'vuex';

import Users from './Users.vue';

export default {
  name: "MainPage",
  components: {
    Users
  },
  data() {
    return {
      users: ''
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
      this.users = data;
    })
    .catch((err)=> {
      console.log('err',err);
    })
  },
  methods: {
    ...mapActions(['fetchingUsers']),
    updateUserName(index, name) {
      this.users[index].name = name;
      this.fetchingUsers(this.users);
    }
  }
}
</script>

<style lang="css" scoped>

.main-container {

}

</style>
