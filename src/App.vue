<template>
  <div id="app">
    <div class="wrapper">
      <SideBar></SideBar>
      <div class="main-panel">
        <div class="content">
          <div class="container-fluid">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoEntry from './components/page/todo/TodoEntry'
import SideBar from '@/components/SideBar'

export default {
  name: 'App',
  components: {
    SideBar,
    TodoEntry
  }
}
</script>

<style lang="sass">
@import '../static/styles.sass'
</style>
