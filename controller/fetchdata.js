const axios = require('axios')

module.exports.getAlldata = async function (req, res) {

    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        // console.log('res', resp)
        let resp=response.data
        if (resp) {
           const chunkedArray=splitArray(resp,50)
console.log('chunkedArray',chunkedArray.length)
console.log('chunked ARRAT',chunkedArray[0].length)
            // let response = resp.slice(0, length)
            // console.log('response for 50', response.length)

            if (chunkedArray.length != 0) {
                for(let i=0;i<chunkedArray.length;i++){
                    axios({
                        method: 'POST',
                        url: 'https://jsonplaceholder.typicode.com/posts',
                        data: chunkedArray[i]
                    }).then((postresponse)=>{
                        console.log('postresponse',postresponse.data)
                    }).catch((err)=>{
                        console.log('err for post',err)
                    })
                }
             
            }
        }

    }).catch((err) => {
        console.log('err', err)
    })
    return res.json({ status: 200,msg:'data inserted successfullY!!!!!!!' })
}



function splitArray(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
}

