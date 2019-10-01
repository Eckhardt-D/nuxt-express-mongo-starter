const Hello = require('./hello.model')
const router = require('express').Router()

router.get('/', (_, res) => {
  Hello.find((err, docs) => {
    if(err) return res.send(err)

    if(!docs.length) {
      const hello = new Hello()

      hello.save()
        .then(result => {
          return res.json(result)
        })
        .catch(err => {
          return res.send(err)
        })
    }

    return res.json(docs[0])
  })
})

module.exports = router