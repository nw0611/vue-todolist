<template>
  <div class="card">
    <div class="header"><h4 class="title">Members List</h4></div>
    <div class="content">
      <table class="table table-member">
        <tbody>
          <tr v-for="item in members" :key="item.member">
            <td>
              <router-link :to="'/members/' + item.member" class="table-member-Link">
                {{item.member}}
             </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: Array
  }
}
</script>

<style scoped>
.table-member {
  table-layout: fixed;
  word-wrap: break-word;
}
.table-member tr:hover {
  background-color: #FFFCF5;
}
.table-member-Link {
  cursor: pointer;
  display: block;
  color: #66615B;
}
.list-item-label {
  display: block;
  padding-left: 30px;
  position: relative;
}
.list-item-editor {
  width: 100%;
}
.member-header-id,
.member-header-member {
  padding-left: 8px;
}
.member-header-id {
  width: 5%;
}
</style>
