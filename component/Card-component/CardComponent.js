import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardComponent({data}) {
  console.log(data)
    return (

      <>
      {data.map(data=>
              <Card className="card" key={data.id} >
              <Card.Img variant="top"  />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                  {data.body}

                </Card.Text>
              </Card.Body>
            </Card>
        )}

      </>
    );
}
