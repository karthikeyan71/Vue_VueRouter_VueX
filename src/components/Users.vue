<template lang="html">
  <div>
    <br/>
    <li @dblclick="edit(index, user.name)" :key="user.id" v-for="(user,index) in users">

      <div v-if="index === selectedIndex">
        <input type="text" v-model="tempname" />
        <button @click="update(index)" class="update"> Update </button>
      </div>

      <div v-else> {{user.name}}</div>
      <div class="small-button"> <router-link :to="`/user/${user.id}`"> Open </router-link> </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: ["users"],
  data() {
    return {
      selectedIndex: -1,
      tempname: ''
    }
  },
  methods: {
    edit(index, name) {
      this.selectedIndex = index;
      this.tempname = name;
    },
    update(index) {
      this.$emit('updateOriginal', index, this.tempname);
      this.tempname = '';
      this.selectedIndex = -1;
    }
  }
}
</script>

<style lang="css">

li {
  list-style: none;
  display: block;
  margin:10px  10%;
  max-width: 50%;
  padding: 10px;
  box-sizing: border-box;
  color: #606060FF;
  font-weight: bolder;
  background-color: #D6ED17FF;
  position: relative;
  user-select: none;
}

.update {
  padding: 5px 10px;
  background-color: grey;
  color: #fff;
  border-radius: 10px;
}

input {
  padding: 10px;
  border: 1px solid #fff;
  margin-right: 20px;
  width: 70%;
  font-size: 14px;
  max-width: 70%;
}

.small-button {
  position: absolute;
  top: 50%;
  font-size: 12px;
  border-radius: 10px;
  background-color: grey;
  color: #fff;
  padding: 5px 10px;
  right:0;
  transform: translate(115%,-50%);
  cursor: pointer;
}

</style>
