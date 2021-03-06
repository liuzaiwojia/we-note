/*
 * @Author: liujia
 * @Date: 2019-08-13 08:52:06
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-09 08:48:19
 * @description: 初始的state结构
 */
export default {
  // 当前选中的板块
  plate: 'books',
  // 当前关注的内容
  focus: 'all',
  // 板块列表
  plateList: [
    {
      key: 'books',
      name: '书单'
    },
    {
      key: 'posts',
      name: '文章'
    },
    {
      key: 'topic',
      name: '话题'
    },
    {
      key: 'contact',
      name: '联系人'
    }
  ],
  // 关注的内容的列表
  focusList: [
    {
      name: '计算机',
      key: 'computer',
      children: [
        {
          name: ''
        }
      ]
    }
  ],
  user: null
}
