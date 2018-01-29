<template>
  <div>
    <MemberListAssigned :members="sharedstate.members" @deleteMember="deleteMember" @editMember="editMember"></MemberListAssigned>
  </div>
</template>

<script>
import MemberListAssigned from '@/components/MemberListAssigned.vue'
import store from '../store'

export default {
  data () {
    return {
      sharedstate: store.state
    }
  },
  components: {
    MemberListAssigned
  },
  methods: {
    deleteMember (deleteTarget) {
      store.actions.deleteMember(deleteTarget)
    },
    editMember (editTarget) {
      store.actions.editMember(editTarget)
    }
  }
}
</script>
