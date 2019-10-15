<template lang="pug">
  div(class="hello")
    h1 {{ msg }}

    router-link(to='/') Home
    span  | 
    router-link(to='/admin') Admin
    span  | 
    router-link(to='/info') Information

    p Total Count: {{ totalCount }}
    p Pilot Name: {{ pilotName }}
    p Mech Name: {{ mechName }}

    span Add/Subtract &nbsp
    button(@click="addCount") +
    span &nbsp
    button(@click="deductCount") -

    br
    br

    input(
      placeholder="Enter new pilot name"
      ref="username")

    button(
      @click="updateUserName"
    ) Update Name

    br
    br

    input(
      placeholder="Enter new mecha name"
      ref="gundam")

    button(
      @click="updateMechaName"
    ) Update Mecha
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
    }
  },

  computed: {
    ...mapState(['pilotName', 'mechName', 'totalCount']),
  },

  methods: {
    ...mapMutations(['addCount', 'deductCount', 'updateName', 'updateMech']),

    updateUserName() {
      if (this.$refs.username.value) {
        this.updateName(this.$refs.username.value)
      }
    },

    updateMechaName() {
      if (this.$refs.gundam.value) {
        this.updateMech(this.$refs.gundam.value)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
  color: paleturquoise;
}
</style>
