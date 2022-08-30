<template>
  <div class="d-flex flex-column" style="min-height: 100%">
    <header>
      <NavbarComponent />
    </header>
    <main role="main" class="d-flex flex-fill flex-column">
      <router-view />
    </main>
    <footer class="footer mt-auto py-3" style="background-color: #e3f2fd">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NavbarComponent from "@/components/NavbarComponent.vue";
export default defineComponent({
  components: {
    NavbarComponent,
  },
  setup() {},
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
