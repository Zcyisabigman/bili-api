module.exports = {
  mid: {
    oneOf: [
      ['getAnchorInRoom'],
      ['view'],
      ['search']
    ],
    get: ({ getAnchorInRoom, view, search }) => {
      if (getAnchorInRoom) {
        return getAnchorInRoom.data.info.uid
      }
      if (view) {
        return view.data.owner.mid
      }
      if (search) {
        return search.data.result[0].mid
      }
    }
  },
  // TODO: aid: {},
  cid: {
    require: ['view'],
    optional: ['p'],
    get: ({ view, p }) => view.data.pages[p || 0].cid
  },
  // TODO: p: {},
  // TODO: page: {},
  roomid: {
    require: ['getRoomInfoOld'],
    get: ({ getRoomInfoOld }) => getRoomInfoOld.data.roomid
  }
}
