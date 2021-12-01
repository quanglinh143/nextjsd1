import { databooks } from "../../../data/databooks"

export default function handler(req:any,res:any){
    
      if (req.method === 'GET') {
           
            res.status(200).json(databooks) 
      }


      else{
            const {id}=req.query
            const book =databooks.find((item)=>{
                  return item.id===parseInt(id)
            })

            const newBook=[];
            newBook.push(book)
            res.status(200).json(newBook) 
      }
    
}

