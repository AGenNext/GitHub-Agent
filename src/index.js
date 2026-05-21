import editorialReview from './skills/editorialReview.js'

export default (app) => {
  app.log.info('AGenNext GitHub Agent loaded')

  editorialReview(app)
}
