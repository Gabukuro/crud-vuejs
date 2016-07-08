<template>

<a class="fixo button is-large is-danger is-loading" v-show="isLoading">Loading</a>

  <div class="container">



    <h1 class="title">{{title}}</h1>

    <div class="columns">

      <div class="column is-5">
        <p class="control has-addons">
          <input class="input is-expanded" type="text" placeholder="Procure pelo nome" v-model="search">
          <a class="button is-info" @click="trySearch()">Search</a>
        </p>

      </div>

      <div class="column is-5">

      </div>

    </div>

    <div class="columns">

      <div class="column is-12">

        <table class="table is-narrow is-bordered">
          <thead>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Telefone</th>
            <th>Mais</th>
            <th>Ações</th>

            </tr>
          </thead>
          <tbody>

            <tr v-for="brewery in breweries">
              <td>{{brewery.name}}</td>
              <td>{{brewery.city}}</td>
              <td>{{brewery.phone}}</td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-map-marker"></i>
                </a>
                <a href="#">
                  <i class="fa fa-plus-circle"></i>
                </a>
              </td>
              <td class="is-icon">

                <a href="#">
                  <i class="fa fa-edit"></i>
                </a>
                <a href="#">
                  <i class="fa fa-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <Pagination :total="total" :page="page" @change-page="onChangePage"></Pagination>

      </div>
    </div>
  </div>
</template>

<script>
  import { loadBreweries, changeBreweriesPage } from './vuex/actions.js'
  import {isLoading} from './vuex/getters.js'
  import Pagination from './Pagination.vue'

export default {
  data () {
    return {
      title: 'Vue.js Crud',
      search: ''
    }
  },
  components: {
    Pagination
  },
  vuex: {
    actions: {
          loadBreweries,changeBreweriesPage
    },
    getters: {
      isLoading, 
      breweries: store => store.breweries.list,
      total: store => store.breweries.total,
      page:  store => store.breweries.page
    }
  },
  created(){
    this.loadBreweries();
  },
  methods: {
    onChangePage: function(page){
      this.changeBreweriesPage(page)
    },
    trySearch: function(){
      this.searchBreweries(search)
    }
  }
}
</script>
<style>
  .fixo{float: right; margin-right: 10px; margin-top: 0px; z-index: 1000;}
</style>