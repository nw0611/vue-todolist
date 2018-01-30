<template>
<div class="sidebar" data-active-color="danger">
  <div class="sidebar-wrapper">
    <div class="logo">
      <span class="simple-text">Todo List</span>
    </div>
    <ul class="nav">
      <router-link to="/" tag="li"><a>Todo Entry</a></router-link>
      <router-link to="/entrymember" tag="li" exact><a>Member Entry</a></router-link>
      <router-link to="/members" tag="li" exact><a>Member List</a></router-link>
    </ul>
  </div>
</div>
</template>

<style scoped lang="sass">
.sidebar .nav .router-link-exact-active > a:after
  border-right: 17px solid #f4f3ef
  border-top: 17px solid transparent
  border-bottom: 17px solid transparent
  content: ""
  display: inline-block
  position: absolute
  right: -1px
  top: 8px

.sidebar .nav li > a
  line-height: 2

</style>
