import React,{ useEffect } from 'react';

import { InferGetStaticPropsType } from 'next'
type book = {
    id: number
    title: string
    
}

export const getStaticProps = async () => {
    
    const res = await fetch('http://localhost:3000/api');
    const books: book[] = await res.json();
    console.log(books);
    
    return {
        
      props: {
        books:books,
      },
      
    }
    
}

const Book = ({books}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(books);
    const booksmap:book[]=books
    return (
        <div>
            Api routings
            
            {booksmap.map((item,index)=>{
                return <div key={index}>
                        {item.title}
                    
                    </div>
            })}
        </div>
    )
}

export default Book
