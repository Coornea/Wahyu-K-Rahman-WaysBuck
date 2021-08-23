import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Cards(props) {
  const route = useHistory();
  function formatPrice({ price }) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  }

  return (
    <Card
      className="mx-1 my-2 card-overide"
      onClick={() => route.push(`/product/${props.dataId}`)}
    >
      <Card.Img
        className="img-card"
        variant="top"
        src={`./assets/img/products/${props.img}`}
        alt={props.product}
      />
      <Card.Body>
        <Card.Title style={{ textDecoration: "none" }}>
          {props.product}
        </Card.Title>
        <Card.Text className="fs-6" style={{ textDecoration: "none" }}>
          <span>{formatPrice(props)}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
