import { databooks } from "../../../data/databooks"

export default function handler(req:any, res:any) {
//    res.status(200).json({name:req.query.id});
    const {id}=req.query
    const book =databooks.find((item)=>{
        return item.id===parseInt(id)
    });
    res.status(200).json(book)


}