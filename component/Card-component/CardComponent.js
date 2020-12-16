import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function CardComponent({data}) {
  console.log(data)
    return (

      <>
      {data.map(data=>
              <Card key={data.id} style={{ width: "18rem", height: "18rem" }}>
              <Card.Img variant="top"  />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Select Product</Button>
              </Card.Body>
            </Card>
        )}

      </>
    );
}
