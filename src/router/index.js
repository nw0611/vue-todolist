import Vue from 'vue'
import Router from 'vue-router'
import TodoEntry from '@/components/page/todo/TodoEntry'
import MemberEntry from '@/components/page/member/MemberEntry'
import MemberList from '@/components/page/member/MemberList'
import MemberDetail from '@/components/page/member/MemberDetail'

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
