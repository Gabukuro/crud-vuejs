
export const loadBreweries = function ({ dispatch,state }) {
   dispatch('SHOW_LOADING')

   this.$http.get('/api/breweries').then(
     response=>{
       dispatch('HIDE_LOADING')
       dispatch('SET_BREWERIES',response.json())
     },
     error=>{
       dispatch('HIDE_LOADING')
       console.log(error)
     }
   )
       
}