import Vue from 'vue'
import Router from 'vue-router'
import TodoEntry from '@/page/TodoEntry'
import MemberEntry from '@/page/MemberEntry'
import MemberList from '@/page/MemberList'
import MemberDetail from '@/page/MemberDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TodoEntry
    },
    {
      path: '/entrymember',
      component: MemberEntry
    },
    {
      path: '/members',
      component: MemberList
    },
    {
      path: '/members/:id',
      component: MemberDetail
    }
  ]
})
