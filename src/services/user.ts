import { request } from 'umi';

export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

export async function queryCurrent() {
  // return request<API.CurrentUser>('/api/currentUser');
  return new Promise(resolve => {
    resolve({"name":"Jiayu","avatar":"https://swb-bucket01.oss-cn-zhangjiakou.aliyuncs.com//wxefc131b3abbf2ff8.o6zAJs64sQPPv-JeNrDQxhYB8nkA.k9gy4C2Bg5hyc0ab5b24de1c423e02a2d4ff60821c2a.jpeg","userid":"00000001","email":"antdesign@alipay.com","signature":"海纳百川，有容乃大","title":"交互专家","group":"蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED","tags":[{"key":"0","label":"很有想法的"},{"key":"1","label":"专注设计"},{"key":"2","label":"辣~"},{"key":"3","label":"大长腿"},{"key":"4","label":"川妹子"},{"key":"5","label":"海纳百川"}],"notifyCount":12,"unreadCount":11,"country":"China","access":"guest","geographic":{"province":{"label":"浙江省","key":"330000"},"city":{"label":"杭州市","key":"330100"}},"address":"西湖区工专路 77 号","phone":"0752-268888888"})
  })
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}
