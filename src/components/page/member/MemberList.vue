<template>
  <div>
    <MemberListAssigned :members="sharedstate.members" @deleteMember="deleteMember" @editMember="editMember"></MemberListAssigned>
  </div>
</template>

<script>
import MemberListAssigned from '@/components/page/member/Read.vue'
import store from '@/store'

export default {
  data () {
    return {
      sharedstate: store.state
    }
  },
  components: {
    MemberListAssigned
  },
  beforeRouteEnter (to, from, next) {
    document.title = 'MemberList'
    next()
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
