import { loadCollection, db } from '../database'

export default {
  setInitialData (stata) {
    loadCollection('notes')
      .then((collection) => {
        // collection.insert([
        //   { body: 'hello 1' },
        //   { body: 'hala ii' }
        // ])
        // db.saveDatabase()
        const _entities = collection.chain()
          .find()
          .simplesort('$loki', 'isdesc')
          .data()
        stata.entities = _entities
        console.log(stata.entities)
      })
  },
  createEntity (stata) {
    loadCollection('notes')
      .then((collection) => {
        const entity = collection.insert({
          body: ''
        })
        db.saveDatabase()
        stata.entities.unshift(entity)
      })
  },
  updateEntity (stata, entity) {
    loadCollection('notes')
      .then((collection) => {
        collection.update(entity)
        db.saveDatabase()
      })
  },
  destroyEntity (stata, entity) {
    const _entities = stata.entities.filter((_entity) => {
      return _entity.$loki !== entity.$loki
    })

    stata.entities = _entities

    loadCollection('notes')
      .then((collection) => {
        collection.remove(entity)
        db.saveDatabase()
      })
  }
}
