const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
  const response = await api.get('/api/blogs')
  expect(response.status).toBe(200)
  expect(response.contenttype).toBe('/application\/json/')
})
//4.8.
test('there are 2 blogs', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body.length).toBe(2)
  })
//4.9 tähän testi että blogin palauttaman olion tunnistekenttä on id eikä _id

//4.10 Tee testi joka varmistaa että sovellukseen voi lisätä blogeja osoitteeseen /api/blogs tapahtuvalla HTTP POST -pyynnölle. Testaa ainakin, että blogien määrä kasvaa yhdellä. Voit myös varmistaa, että oikeansisältöinen blogi on lisätty järjestelmään.
//Kun testi on valmis, refaktoroi operaatio käyttämään promisejen sijaan async/awaitia.

//4.11*: blogilistan testit, step4
//Tee testi joka varmistaa, että jos kentälle likes ei anneta arvoa, asetetaan sen arvoksi 0. Muiden kenttien sisällöstä ei tässä tehtävässä vielä välitetä.
//Laajenna ohjelmaa siten, että testi menee läpi.

//4.12*: blogilistan testit, step5
//Tee testit blogin lisäämiselle, eli osoitteeseen /api/blogs tapahtuvalle HTTP POST -pyynnölle, joka varmistaa, että jos uusi blogi ei sisällä kenttiä title ja url, pyyntöön vastataan statuskoodilla 400 Bad request
//Laajenna toteutusta siten, että testit menevät läpi.

afterAll(() => {
  mongoose.connection.close()
})