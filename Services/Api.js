// Home.getInitialProps = async function()
// {
//   const res= await fetch('https://jsonplaceholder.typicode.com/albums');
//   const data= await res.json();
//   return {
//     data
//   }
// }
import fetch from "isomorphic-unfetch";


export async function getStaticProps() {
    const res= await fetch('https://jsonplaceholder.typicode.com/albums');
   const data= await res.json();
   
   return {
        data
    }
   }


