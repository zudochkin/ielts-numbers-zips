<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link :to="{ name: 'Test', params: { type: 'zip' } }">Zip</router-link>
      </li>

      <li>
        <router-link :to="{ name: 'Test', params: { type: '' } }">Numbers</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
nav li{
  list-style: none
}

a.router-link-exact-active{
  color: magenta
}
</style>

