<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1><span style="color: blue;">S</span><span style="color: red;">e</span><span style="color: yellow;">a</span><span style="color: blue;">r</span><span style="color: green;">c</span><span style="color: red;">h</span> <span style="color: blue;">S</span><span style="color: red;">c</span><span style="color: yellow;">r</span><span style="color: color: blue;">u</span><span style="color: green;">t</span><span style="color: red;">i</span><span style="color: blue;">n</span><span style="color: red;">y</span></h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Preventing search engine bias</h3>
        <h5>An example of a google search (Search Entry) and it's associated autofill results.</h5>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Search Entry</th>
              <th>First Result</th>
              <th>Second Result</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="searched in search">
              <td>
                {{searched.searchEntry}}
              </td>
              <td>
                {{searched.firstResult}}
              </td>
              <td>
                {{searched.secondResult}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h5>Found a different autofill? Enter you results here.</h5>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addSearch">
          <div class="form-group">
            <label for="searchEntry">Search Entry:</label>
            <input type="text" id="searchEntry" class="form-control" v-model="newSearch.searchEntry">
          </div>
          <div class="form-group">
            <label for="firstResult">First Result:</label>
            <input type="text" id="firstResult" class="form-control" v-model="newSearch.firstResult">
          </div>
          <div class="form-group">
            <label for="secondResult">Second Result:</label>
            <input type="text" id="secondResult" class="form-control" v-model="newSearch.secondResult">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Search Input Item">
          </input>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyA7yrYpQ-PFX-Z_m9YK9FpcBC67T_u-mQY",
  authDomain: "final-app-b3318.firebaseapp.com",
  databaseURL: "https://final-app-b3318.firebaseio.com",
  projectId: "final-app-b3318",
  storageBucket: "final-app-b3318.appspot.com",
  messagingSenderId: "686178515094"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let searchRef = db.ref('search');

export default {
  name: 'app',
  firebase: {
    search: searchRef
  },
  data() {
    return {
      newSearch: {
        searchEntry: '',
        firstResult: '',
        secondResult: ''
      }
    }
  },
  methods: {
    addSearch: function(){
      searchRef.push(this.newSearch);
      this.newSearch.searchEntry = '';
      this.newSearch.firstResult = '';
      this.newSearch.secondResult = '';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Futura', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
td {
  text-align: left;
}
</style>
