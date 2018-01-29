<template>
  <div class="card">
    <div class="header"><h4 class="title">Assigned Todo List</h4></div>
    <div class="content">
      <table class="table table-striped table-todo">
        <thead>
          <th class="todo-header-input">Todo</th>
          <th class="todo-header-date">Date</th>
          <th class="todo-header-action text-center">Action</th>
        </thead>
        <tbody>
          <tr v-for="item in detailList" :key="item.id">
            <td>
              <label class="list-item-label list-item-label-checkbox" v-bind:class="{done: item.editing}">
                <input type="checkbox" class="list-item-checkbox" v-model="item.isChecked" />
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
      <div class="row places-buttons text-center"><button class="btn btn-wd btn-default btn-fill" @click="returnPage()">Back</button></div>
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
      beforeMember: '',
      detailList: []
    }
  },
  methods: {
    deleteTodo: function (target) {
      this.detailList = this.detailList.filter((item) => {
        return item.id !== target.id
      })
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
    },
    returnPage: function () {
      this.$router.go(-1)
    }
  },
  created: function () {
    this.detailList = this.elements.filter((item) => {
      return item.member.substr(item.member.indexOf(':') + 1) === this.$route.params.id
    })
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
.list-item-label-checkbox {
  padding-left: 30px;
  position: relative;
}
.list-item-checkbox {
  left: 0;
  margin-top: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
}
.list-item-editor {
  width: 100%;
}
.todo-header-input {
  padding-left: 8px;
}
.todo-header-checkbox {
  width: 4%;
}
.todo-header-date,
.todo-header-member {
  padding-left: 10px;
  width: 15%;
}
.todo-header-action {
  width: 18%;
}
.done {
  display: none;
}
.comp {
  text-decoration: line-through;
}
</style>
