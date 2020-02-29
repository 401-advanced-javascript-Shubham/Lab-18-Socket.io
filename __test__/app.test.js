'use strict';

describe('Server is up', () => {
    beforeEach((done) => {
        require('../hub.js')
        done()
    })

    it('should return "Hello World"', (done) => {
        http.get('http:localhost/3000', (res) => {
            expect(res).to.contain('hello world')
            done()


        })

    })

})