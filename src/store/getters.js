import moment from 'moment'
import _ from 'lodash'
moment.locale('zh-CN')

export const entities = stata => {
  return stata.entities
}

export const updated = stata => entity => {
  return moment(entity.meta.updated).fromNow()
}

export const words = stata => entity => {
  return entity.body.length
}

export const header = stata => entity => {
  return _.truncate(entity.body, { length: 30 })
}
