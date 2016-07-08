
export const loadBreweries = function ({ dispatch, state }) {
   dispatch('SHOW_LOADING')
    setTimeout(function(){
       dispatch('HIDE_LOADING')
       
    },2000)
}