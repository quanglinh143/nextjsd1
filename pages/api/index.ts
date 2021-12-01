var Mock = require('mockjs');


export default function handler(req:any,res:any){
    const Random=Mock.Random
    if (req.method === 'GET') {
        var data = Mock.mock({
            'list|1-10': [{
                'id|+1': 1,
                'title': Random.name()
            }]
        });
        res.status(200).json(data.list) 
      }else{
          res.status(200).json({name:"GET REQUEST"})
      }
      
    
}

