import React from 'react';

export const Cost = (books) => { 
    let res = books.length *800,
      discounts = {5: .25, 4: .2, 3: .1, 2: .05},
      books_set = [];
      console.log(books)
      while (books.length>0){
        books_set.push(new Set(books).size)
        for(let b of new Set(books)){
          books.splice(books.indexOf(b), 1)
        }
      }
    console.log(books_set)
      while (books_set.includes(3) && books_set.includes(5)){
          books_set.splice(books_set.indexOf(3), 1)
          books_set.splice(books_set.indexOf(5), 1)
          books_set.push(4, 4)
      }
    return res - books_set.reduce((prev, curr) => prev +  (discounts[curr]||0) * 800 * curr, 0)
  };