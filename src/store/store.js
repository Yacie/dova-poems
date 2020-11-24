import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		poems: [],
		cur_poem: [],
	},
	getters: {
		fetchPoem: state => state.cur_poem,
		fetchPoems: state => state.poems
	},
	mutations: {
		POEM: (state, payload)=>{
			state.cur_poem = payload;
		},
		POEMS: (state, payload)=>{
			state.poems = payload;
		}
	}
})