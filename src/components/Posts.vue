<template lang="html">
  <div>
    <li :key="post.id" v-for="post in posts">
      {{post.title}}
      <div class="small-button"> <router-link :to="`/user/${$route.params.id}/${post.id}`"> Comments </router-link> </div>
    </li>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    }
  },
  created() {
    const { params: { id } } = this.$route;
    console.log(id);
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(({data})=>(this.posts = data))
    .catch((err)=>{
      console.log(err);
    })
  }
}
</script>

<style lang="css" scoped>
</style>
