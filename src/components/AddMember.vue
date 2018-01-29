<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="header"><h4 class="title">Member Entry</h4></div>
        <div class="content">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Set Member</label>
                <input type="text" class="form-control border-input" placeholder="todo taro" v-model="newMember">
              </div>
            </div>
          </div>
          <div class="row places-buttons text-center">
            <button class="btn btn-info btn-fill btn-wd" v-on:click="addMember">Entry</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newMember: ''
    }
  },
  methods: {
    addMember: function () {
      let inputValue = {
        member: this.newMember
      }
      // ''の場合は追加しない
      if (!inputValue.member) {
        return
      }
      this.$emit('addMember', inputValue)
      this.newMember = '' // textboxの中を初期化
    }
  }
}
</script>
