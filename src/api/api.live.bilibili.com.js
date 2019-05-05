module.exports = {
  getRoomInfoOld: {
    require: ['mid'],
    type: 'json',
    get: ({ mid }) => `https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=${mid}`
  },
  topList: {
    require: ['roomid', 'mid'],
    type: 'json',
    optional: ['page'],
    get: ({ roomid, mid, page = 1 }) => `https://api.live.bilibili.com/guard/topList?roomid=${roomid}&page=${page}&ruid=${mid}`
  },
  fullTopList: {
    require: ['roomid', 'mid', 'topListPage'],
    type: 'jsonArray',
    get: ({ roomid, mid, topListPage }) => Array(topListPage).fill(undefined).map((a, i) => `https://api.live.bilibili.com/guard/topList?roomid=${roomid}&page=${i + 1}&ruid=${mid}`)
  },
  getAnchorInRoom: {
    require: ['roomid'],
    type: 'json',
    get: ({ roomid }) => `https://api.live.bilibili.com/live_user/v1/UserInfo/get_anchor_in_room?roomid=${roomid}`
  },
  rankdb: {
    require: ['mid'],
    type: 'json',
    get: ({ mid }) => `https://api.live.bilibili.com/rankdb/v1/Common/roomInfo?ruid=${mid}`
  }
}
