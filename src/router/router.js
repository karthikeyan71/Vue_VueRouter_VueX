import vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../components/MainPage.vue';
import Posts from '../components/Posts.vue';
import Comments from '../components/Comments.vue';

vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      name: 'users',
      component: MainPage,
      alias: '/user'
    },
    {
      path:'/user/:id',
      name: 'specific-users',
      component: Posts
    },
    {
      path:'/user/:userid/:postid',
      name: 'specific-posts',
      component: Comments
    },
    {
      path:'/posts',
      name: 'posts',
      component: Posts
    },

  ]
});
