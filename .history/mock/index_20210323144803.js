const fs = require("fs")

const files = {
    'POST /test-api/hhhhhh': "hhhhhh.json"
}

const mocks = (props) => {
    let returnObj = {}
    Object.keys(files)?.map(item => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) {
                returnObj[item] = {
                    code: 404
                }
            }
            else {
                returnObj[item] = data
            }
        })
    })
    console.log(returnObj, "returnObj")
    return {
        'POST /test-api/hhhhhh': {
            aaa: "aaa"
        },
        'POST /test-api/aaaaaa': "hhhhhh.json"
    }
}

module.exports = mocks()