import CardComponent from "../component/Card-component/CardComponent";
import HeaderComponent from "../component/Header-component/HeaderComponent";
import { Container, Row } from 'react-bootstrap'
import FooterComponent from "../component/Footer-component/FooterComponent";

export default function Home({data}) {
 
  console.log(data);
  return (
    <>
      <HeaderComponent />
      

      <Container>
        <Row>
        <CardComponent data= {data} />
        </Row>
        
      </Container>
      <FooterComponent />


    </>
  );
}
Home.getInitialProps = async function()
{
  const res= await fetch('https://jsonplaceholder.typicode.com/posts');
  const data= await res.json();
  return {
     data
   }
 }

