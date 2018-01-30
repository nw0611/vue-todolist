<template>
  <div class="card">
    <div class="header"><h4 class="title">Todo List</h4></div>
    <div class="content">
      <table class="table table-striped table-todo">
        <thead>
          <th class="todo-header-input">Todo</th>
          <th class="todo-header-date">Date</th>
          <th class="todo-header-member">Member</th>
          <th class="todo-header-action text-center">Action</th>
        </thead>
        <tbody>
          <tr v-for="item in elements" :key="item.id">
            <td>
              <label class="list-item-label list-item-label-checkbox" v-bind:class="{done: item.editing}">
                <input type="checkbox" class="checkbox list-item-checkbox" v-model="item.isChecked" />
                <span v-text="item.todo" v-bind:class="{comp: item.isChecked}">{{item.todo}}</span>
              </label>
              <label class="list-item-label" v-bind:class="{done: !item.editing}">
                <input type="text" class="form-control border-input list-item-editor" v-model="item.todo">
              </label>
            </td>
            <td>
              <label>
                <span v-text="item.date" v-bind:class="{done: item.editing}">{{item.date}}</span>
                <input type="text" class="form-control border-input list-item-editor" v-model="item.date" v-bind:class="{done: !item.editing}">
              </label>
            </td>
            <td>
              <label>
                <span v-bind:class="{done: item.editing}">{{item.member}}</span>
                <select class="form-control border-input list-item-editor" v-model="item.member" v-bind:class="{done: !item.editing}">
                  <option v-for="nameItem in members" :key="nameItem.id">{{nameItem.id}}:{{nameItem.member}}</option>
                </select>
              </label>
            </td>
            <td class="text-center">
              <div v-show="!item.editing">
                <button class="btn btn-info btn-xs btn-fill" v-on:click="editTodo(item)" v-bind:disabled="isDisabled">Edit</button>
                <button class="btn btn-danger btn-xs btn-fill" v-on:click="deleteTodo(item)" v-bind:disabled="isDisabled">Delete</button>
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
</template>

<script>
export default {
  props: {
    elements: Array,
    members: Array
  },
  data () {
    return {
      isDisabled: false,
      beforeTodo: '',
      beforeDate: '',
      beforeMember: ''
    }
  },
  methods: {
    deleteTodo: function (target) {
      this.$emit('deleteTodo', target)
    },
    editTodo: function (target) {
      this.beforeTodo = target.todo
      this.beforeDate = target.date
      this.beforeMember = target.member
      this.isDisabled = true
      target.editing = true
    },
    doneEdit: function (target) {
      this.isDisabled = false
      target.editing = false
      this.$emit('editTodo', target)
    },
    cansellEdit: function (target) {
      target.todo = this.beforeTodo
      target.date = this.beforeDate
      target.member = this.beforeMember
      this.isDisabled = false
      target.editing = false
    }
  }
}
</script>
