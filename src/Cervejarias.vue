<template>
<div class="container">

<div class="modal" v-bind:class="{ 'is-active': isLoading }">
  <div class="modal-background"></div>
  <div class="modal-container">
    <div class="modal-content">
      <a class="button is-large is-danger is-loading">Loading</a>
    </div>
  </div>
  <button class="modal-close"></button>
</div>

    <h1 class="title">{{title}}</h1>
    
    <div class="columns">

      <div class="column is-5">
        <p class="control has-addons">
          <input class="input is-expanded" type="text" placeholder="Procure pelo nome">
          <a class="button is-info">Search</a>
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

            <tr>
              <td>Misty Abbott</td>
              <td>Bass Guitar</td>
              <td>Bass Guitar</td>
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

        <nav class="pagination">
          <a class="button">Previous</a>
          <a class="button">Next page</a>
          <ul>
            <li>
              <a class="button">1</a>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <a class="button">45</a>
            </li>
            <li>
              <a class="button is-primary">46</a>
            </li>
            <li>
              <a class="button">47</a>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <a class="button">86</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import { loadBreweries } from './vuex/actions.js'
  import {isLoading} from './vuex/getters.js'

export default {
  data () {
    return {
      title: 'Vue.js Crud'
    }
  },
  vuex: {
    actions: {
          loadBreweries
    },
    getters: {
      isLoading
    }
  },
  created(){
    this.loadBreweries();
  }
}
</script>