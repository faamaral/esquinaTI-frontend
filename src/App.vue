<template>
  <Navbar/>
  <router-view />
  <Footer/>
</template>

<script>
import './styles/global.css'
import './styles/style.css'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>
