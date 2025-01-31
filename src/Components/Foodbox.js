import { Card, Col, Button } from 'antd';

const FoodBox = ({ food, removeFood }) => {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button
          onClick={() => removeFood(food.name)}
          type="primary"
          removeFood={removeFood}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
