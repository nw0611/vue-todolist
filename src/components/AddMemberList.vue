<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="header"><h4 class="title">Member List</h4></div>
        <div class="content">
          <table class="table table-striped table-todo">
            <thead>
              <th class="todo-header-id">Id</th>
              <th class="todo-header-member">Member</th>
              <th class="todo-header-action text-center">Action</th>
            </thead>
            <tbody>
              <tr v-for="item in members" :key="item.id">
                <td>
                  <label>
                    <span>{{item.id}}</span>
                  </label>
                </td>
                <td>
                  <label class="list-item-label">
                    <span v-text="item.member" v-bind:class="{done: item.editing}">{{item.member}}</span>
                    <input type="text" class="form-control border-input list-item-editor" v-model="item.member" v-bind:class="{done: !item.editing}">
                  </label>
                </td>
                <td class="text-center">
                  <div v-show="!item.editing">
                    <button class="btn btn-info btn-xs btn-fill" v-on:click="editMember(item)" v-bind:disabled="isDisabled">Edit</button>
                    <button class="btn btn-danger btn-xs btn-fill" v-on:click="deleteMember(item)" v-bind:disabled="isDisabled">Delete</button>
                  </div>
                  <div v-show="item.editing">
                    <button class="btn btn-info btn-xs btn-fill" v-on:click="doneEdit(item)">Complete</button>
                    <button class="btn btn-default btn-xs btn-fill" v-on:click="cansellEdit(item)">Cansell</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: Array
  },
  data () {
    return {
      isDisabled: false
    }
  },
  methods: {
    deleteMember: function (target) {
      this.$emit('deleteMember', target)
    },
    editMember: function (target) {
      this.beforeCache = target.member
      this.isDisabled = true
      target.editing = true
    },
    doneEdit: function (target) {
      this.isDisabled = false
      target.editing = false
      this.$emit('editMember', target)
    },
    cansellEdit: function (target) {
      target.member = this.beforeCache
      this.isDisabled = false
      target.editing = false
    }
  }
}
</script>

<style scoped>
.table-todo {
  table-layout: fixed;
  word-wrap: break-word;
}
.list-item-label {
  display: block;
  width: 100%;
}
.list-item-editor {
  width: 100%;
}
.todo-header-id,
.todo-header-action,
.todo-header-member {
  padding-left: 8px;
}
.todo-header-id {
  width: 5%;
}
.todo-header-action {
  width: 18%;
}
.done {
  display: none;
}
</style>
