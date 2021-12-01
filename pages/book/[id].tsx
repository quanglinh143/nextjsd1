
import React from 'react';
import { InferGetStaticPropsType } from 'next';
type book = {
    id: number
    title: string
    
}
export const getStaticPaths = async () => {
    
    const res = await fetch(`https://datafakeapi.vercel.app/api/dataapi`);
    const books: book[] = await res.json();

    const paths=books.map((item)=>{
        return {
            params:{id:item.id.toString()}
        }
    })
    return { paths, fallback: false }
    
    
}

export async function getStaticProps(context:any) {
    const id=context.params.id;
    const res = await fetch(`https://datafakeapi.vercel.app/api/dataapi/${id}`);
    const books= await res.json();
    // const data=await res.json();
    return {
        
      props: {
        books:books,
      },
      
    }
}


const Detail=({books}:InferGetStaticPropsType<typeof getStaticProps>)=>{
    console.log("books", books);
    
    return (
        <div>
            {books[0].title}
        </div>
    );
}

export default Detail;