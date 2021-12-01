import React,{ useEffect } from 'react';
import Link from "next/link";
import { InferGetStaticPropsType } from 'next';

type book = {
    id: number
    title: string
    
}

export const getStaticProps = async () => {
    require('dotenv').config()
    const res = await fetch(`https://datafakeapi.vercel.app/api/dataapi`);
    const books: book[] = await res.json();

    return {
        
      props: {
        books:books,
      },
      
    }
    // const res = await fetch(`http://localhost:3000/api/databooks/2`);
    // const books: book[] = await res.json();

    // return {
        
    //   props: {
    //     books:books,
    //   },
      
    // }
    
}

const Book = ({books}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(books);
    
    
    
    return (
        <div>
            Api routings
            
            {books.map((item,index)=>{
                return <Link href={'/book/'+item.id} key={index}>
                        {item.title}
                    
                    </Link>
            })}
            
        </div>
    )
}

export default Book
