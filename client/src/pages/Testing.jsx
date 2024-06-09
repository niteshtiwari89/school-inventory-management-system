// import { useEffect, useState } from "react";
import "../products.json";

// export default function MyComponent() {
  //   const [data, setData] = useState("");
  //   const getData = async () => {
  // const response = await fetch('products.json', {
  //         headers: {
  //           Accept: "application/json"
  //         }
  //       });
  //     const json =  response.json();
  //     setData(json);
  //   }

  //   useEffect(() => {
  //     getData();
  //   }, []);
  // const response = await fetch('https://api.sampleapis.com/coffee/hot/1')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));
  //   return (
  //     <pre>
  //       {/* {JSON.stringify(data, null, 2)} */}
  //       <h1>Hello</h1>
  //     </pre>
  //   )

//   const [data, setData] = useState("");
//   //   const getData = async () => {
//   useEffect(() => {
//     fetch("../products.json")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
//   return (
//     <>
//       <h1>{data.name}</h1>
//     </>
//   );
// }


import { useState, useEffect } from 'react';

// export default function MyComponent() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     // If you're using Create React App and the file is in the public folder
//     fetch('/src/products.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => setData(data))
//       .catch(error => console.error('There has been a problem with your fetch operation:', error));
//   }, []);

//   function Renderbtn() {
//     for(let i=0;i<data.length;i++){
//         console.log(data[i].name);
//     }
//   }
// Renderbtn();

const hey =data;

//   return (
//     <div>
//       {/* Render your data here */}
//       {/* {data && <h1>
//         for(const i=0; i==data.length;i++){
//         console.log()
//         }
//         </h1>} */}

//         {
//         function Renderbtn() {
//             for(let i=0;i<data.length;i++){
//                 <h1>{data[i].name}</h1>
//             }
//         }
       
//        }
      

//        {/* {   data.map((task)=>(
// <h1>{task}</h1>
//         )
//     )} */}
//     </div>
//   );

return(
<>
{
hey.map((task)=>(
    <h1>task</h1>
))}
</>

);

}

// export default MyComponent;
