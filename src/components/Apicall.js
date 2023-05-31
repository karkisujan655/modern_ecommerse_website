import React from 'react'

export default function Apicall() {
  function add (a,b){
  const c = a+b;
  console.log("The Sum is: "+c);
}
  add(5,2);

  return (
    <div>Apicall</div>
  )
}
