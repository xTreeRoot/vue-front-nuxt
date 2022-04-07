import request from '@/utils/request'

export default {

  // 条件分页查询
  getCourseLsit(page, limit, searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 查询所有分类
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },
  getTeacherInfo(teacherId) {
    return request({
      url: `/eduservice/teacherFront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
  }
}
