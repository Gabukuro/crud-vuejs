
export const loadBreweries = function ({ dispatch,state }) {
   dispatch('SHOW_LOADING')

   let start = state.breweries.page*10-9
   let end = state.breweries.page*10

   this.$http.get(`/api/breweries?_start=${start}&_end=${end}`) .then(
     response=>{
       dispatch('HIDE_LOADING')
       dispatch('SET_BREWERIES',response.json())
       dispatch('SET_TOTAL_BREWERIES',response.headers['X-Total-Count']);
     },
     error=>{
       dispatch('HIDE_LOADING')
       console.log(error)
     }
   )
       
}

export const changeBreweriesPage = function ({ dispatch,state },page) {
   dispatch('CHANGE_BREWERIES_PAGE',page)
   this.loadBreweries()
}

export const searchBreweries= function ({ dispatch,state },search) {
  //TODO
}
