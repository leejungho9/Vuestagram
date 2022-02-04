import axios from "axios";
import { createStore } from "vuex";
import postData from './assets/data.js'

const store = createStore({
    state () {
        return {
            name : 'kim',
            age : 20,
            likes : [21, 12 , 3],
            likecheck :[ false, false, false,],
            more : {},
            clickBtn : 0,
            postData : postData,
            i : 0,
        }
    },
    mutations : {
        changeName(state) {
            state.name = 'park'
        },
        likes0(state) {
           if(state.likecheck[0] == false) {
            state.likes[0] += 1 
            state.likecheck[0] = true
        } else {
            state.likes[0] -= 1
            state.likecheck[0] = false
           }
        },
        likes1(state) {
            if(state.likecheck[1] == false) {
             state.likes[1] += 1 
             state.likecheck[1] = true
         } else {
             state.likes[1] -= 1
             state.likecheck[1] = false
            }
         },
         likes2(state) {
            if(state.likecheck[2] == false) {
             state.likes[2] += 1 
             state.likecheck[2] = true
         } else {
             state.likes[2] -= 1
             state.likecheck[2] = false
            }
         },
         setMore(state, data){
             state.more = data
         },
         setPushData(state,data ){
            state.postData.push(data);
         },
         setI(state) {
             state.i++;
         }

    },
    actions : {
        getData({ commit, state}) {
            console.log(state.i)
            axios.get(`https://codingapple1.github.io/vue/more${state.i}.json`)
            .then((result) => {
                console.log(result.data);
                commit('setMore', result.data);
                commit('setPushData', result.data);
                commit('setI');
            })
        }
    }
})

export default store;