<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

body, html {
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 90%;
  margin: 0 auto;
}

.container-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>