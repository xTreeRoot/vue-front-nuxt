import request from '@/utils/request'

export default {
  // 分也讲师查询
  getTeacherLsit(page, limit) {
    return request({
      url: `/eduservice/teacherFront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  // 根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/educenter/member/getMemberInfo`,
      method: 'get'
    })
  }
}
