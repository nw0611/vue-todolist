<template>
  <div>
    <MemberListDetail :elements="sharedstate.elements" :members="sharedstate.members" @deleteTodo="deleteTodo" @editTodo="editTodo"></MemberListDetail>
  </div>
</template>

<script>
import MemberListDetail from '@/components/page/member/Detail'
import store from '@/store'

export default {
  data () {
    return {
      sharedstate: store.state
    }
  },
  components: {
    MemberListDetail
  },
  methods: {
    deleteTodo (deleteTarget) {
      store.actions.deleteTodo(deleteTarget)
    },
    editTodo (editTarget) {
      store.actions.editTodo(editTarget)
    }
  }
}
</script>
