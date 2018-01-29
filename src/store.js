const state = {
  elements: JSON.parse(localStorage.getItem('elements')),
  members: JSON.parse(localStorage.getItem('members'))
}

const actions = {
  addTodo: function (newInput) {
    if (!state.elements) {
      state.elements = []
    }
    let memberId = newInput.member.substr(0, newInput.member.indexOf(':'))
    state.elements.push({
      id: this.makeId(state.elements),
      todo: newInput.todo,
      date: newInput.date,
      memberId: memberId,
      member: newInput.member,
      isChecked: false,
      editing: false
    })
    localStorage.setItem('elements', JSON.stringify(state.elements))
  },
  deleteTodo: function (deleteTarget) {
    state.elements = util.deleteData(state.elements, deleteTarget)
    localStorage.setItem('elements', JSON.stringify(state.elements))
  },
  editTodo: function (editTarget) {
    editTarget.todo = editTarget.todo
    editTarget.date = editTarget.date
    editTarget.member = editTarget.member
    editTarget.memberId = editTarget.member.substr(0, editTarget.member.indexOf(':'))
    // 修正後に''の場合は削除
    util.EmptyRempve('todo', editTarget)
    localStorage.setItem('elements', JSON.stringify(state.elements))
  },
  addMember: function (newEntry) {
    if (!state.members) {
      state.members = []
    }
    state.members.push({
      id: this.makeId(state.members),
      member: newEntry.member,
      editing: false
    })
    localStorage.setItem('members', JSON.stringify(state.members))
  },
  deleteMember: function (deleteTarget) {
    state.members = util.deleteData(state.members, deleteTarget)
    localStorage.setItem('members', JSON.stringify(state.members))
  },
  editMember: function (editTarget) {
    editTarget.member = editTarget.member
    // 修正後に''の場合は削除
    util.EmptyRempve('member', editTarget)
    localStorage.setItem('members', JSON.stringify(state.members))
  },
  makeId: function (state) {
    // 最大値に＋１した値を返す
    return state.reduce(function (id, item) {
      return id < item.id ? item.id : id
    }, 0) + 1
  }
}

const util = {
  deleteData: function (targetState, deleteTarget) {
    return targetState.filter((item) => {
      return item.id !== deleteTarget.id
    })
  },
  EmptyRempve: function (key, editTarget) {
    if (editTarget.key === '') {
      this.deleteTodo(editTarget)
    }
  }
}

export default {
  state,
  actions,
  util
}
