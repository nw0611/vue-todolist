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
