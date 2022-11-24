import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/Foodbox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

import { Row, Divider, Button } from 'antd';

function App() {
  const [food, setFood] = useState(foods);
  const [searchString, setSearchString] = useState('');
  const [button, setButton] = useState(false);

  const handleSearch = (event) => {
    //console.log(event.target.value);
    setSearchString(event.target.value);
  };

  const allFood = food.filter((food) => {
    return food.name.toLowerCase().includes(searchString.toLowerCase());
  });

  const removeFood = (name) => {
    const updatedFoodList = food.filter((food) => food.name !== name);
    return setFood(updatedFoodList);
  };

  return (
    <div className="App">
      <Button onClick={() => setButton(button ? false : true)}>
        {button ? 'Hide Form' : 'Form'}
      </Button>
      {/* <AddFoodForm setFood={setFood} /> */}
      {button ? '' : <AddFoodForm />}
      <Search searchString={searchString} handleSearch={handleSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {!allFood.length ? (
          <Divider>Empty list</Divider>
        ) : (
          allFood.map((food) => {
            return (
              <FoodBox key={food.name} food={food} removeFood={removeFood} />
            );
          })
        )}
      </Row>
    </div>
  );
}

export default App;
