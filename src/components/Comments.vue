<template lang="html">
  <div>
    <li :key="comment.id" v-for="comment in comments">
      {{comment.name}}
      <div class="small-button"> Delete </div>
    </li>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      comments: []
    }
  },
  created() {
    const { params: { postid } } = this.$route;
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`).then(({data})=>(this.comments = data))
    .catch((err)=>{
      console.log(err);
    })
  }
}
</script>

<style lang="css" scoped>
</style>
