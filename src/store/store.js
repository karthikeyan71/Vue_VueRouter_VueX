import vue from 'vue';
import Vuex from 'vuex';

import users from './modules/users';

vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users
  }
})
