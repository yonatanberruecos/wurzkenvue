<template>
  <div id="app">
    <header>
      <img src="https://www.wurkzen.com/wp-content/uploads/2021/02/green-logo.png" class="logo" alt="" loading="lazy">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/ourwork">Ourwork</router-link>
      </div>
    </header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  float: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  float: left;
  width: 200px;
}
header {
  height: 150px;
  padding: 20px;
}
footer {
  height: 100px;
}
</style>
