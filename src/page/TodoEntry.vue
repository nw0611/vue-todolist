<template>
  <div class="row">
    <div class="col-md-12">
      <AddTodo :members="sharedstate.members" @addTodo="addTodo"></AddTodo>
      <AddTodoList :members="sharedstate.members" :elements="sharedstate.elements" @deleteTodo="deleteTodo" @editTodo="editTodo"></AddTodoList>
    </div>
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo'
import AddTodoList from '@/components/AddTodoList'
import store from '../store'

export default {
  data () {
    return {
      sharedstate: store.state
    }
  },
  components: {
    AddTodo,
    AddTodoList
  },
  methods: {
    addTodo (newTodo) {
      store.actions.addTodo(newTodo)
    },
    deleteTodo (deleteTarget) {
      store.actions.deleteTodo(deleteTarget)
    },
    editTodo (editTarget) {
      store.actions.editTodo(editTarget)
    }
  }
}
</script>
