import api from '../data/api.json'

import { normalize, schema } from 'normalizr';

// const media = new schema.Entity('media', scheme definition, options)
const media = new schema.Entity('media', {}, {
  // idAtributte: 'id-name',
  idAtributte: 'id',
  processStrategy: (value, parent, key) => ({...value, category:parent.id})
  
})

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})

const categories = { categories: new schema.Array(category)}

const normilizedData = normalize(api, categories)

export default normilizedData