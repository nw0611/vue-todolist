<template>
  <div class="">
    <div class="card">
      <div class="header"><h4 class="title">Todo Entry</h4></div>
      <div class="content">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Set Term</label>
              <input type="text" class="form-control border-input" placeholder="ex:0131" v-model="newDate">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Assign Member</label>
              <select class="form-control border-input" v-model="selectedMember">
                <option value="">no selected</option>
                <option v-for="nameItem in members" :key="nameItem.id">{{nameItem.id}}:{{nameItem.member}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Input Todo</label>
              <input type="text" class="form-control border-input" v-model="newTodo" placeholder="ex:TODO" />
            </div>
          </div>
        </div>
        <div class="row places-buttons text-center">
          <button class="btn btn-info btn-fill btn-wd" v-on:click="addTodo">Add</button>
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
      Todo: '',
      newTodo: '',
      newDate: '',
      selectedMember: ''
    }
  },
  methods: {
    addTodo: function () {
      let inputValue = {
        todo: this.newTodo,
        date: this.newDate,
        member: this.selectedMember
      }
      // ''の場合は追加しない
      if (!inputValue.todo) {
        return
      }
      this.$emit('addTodo', inputValue)
      this.newTodo = '' // textboxの中を初期化
      this.newDate = '' // textboxの中を初期化
      this.selectedMember = '' // textboxの中を初期化
    }
  }
}
</script>
