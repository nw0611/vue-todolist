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
    // 修正後に''の場合は削除
    if (editTarget.todo === '') {
      this.deleteTodo(editTarget)
      return
    }
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
    // 修正後に''の場合は削除
    if (editTarget.member === '') {
      this.deleteMember(editTarget)
      return
    }
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
  }
}

export default {
  state,
  actions,
  util
}
