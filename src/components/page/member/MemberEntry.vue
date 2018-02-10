<template>
  <div>
    <AddMember @addMember="addMember"></AddMember>
    <AddMemberList :members="sharedstate.members" @deleteMember="deleteMember" @editMember="editMember"></AddMemberList>
  </div>
</template>

<script>
import AddMember from '@/components/page/member/Create'
import AddMemberList from '@/components/page/member/Update'
import store from '@/store'

export default {
  data () {
    return {
      sharedstate: store.state
    }
  },
  components: {
    AddMember,
    AddMemberList
  },
  methods: {
    addMember (newMember) {
      store.actions.addMember(newMember)
    },
    deleteMember (deleteTarget) {
      store.actions.deleteMember(deleteTarget)
    },
    editMember (editTarget) {
      store.actions.editMember(editTarget)
    }
  }
}
</script>
