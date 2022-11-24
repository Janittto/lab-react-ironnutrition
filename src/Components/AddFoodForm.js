import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ setFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFood((currentState) => {
      const copy = [...currentState];
      copy.push({
        name,
        image,
        calories,
        servings,
      });
      return copy;
      //   return [
      //     ...currentState,
      //     { name, image, calories, servings, id: currentState.length + 1 },
      //   ];
    });
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  //const handleContentChange = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={({ target: { value } }) => {
          setName(value);
        }}
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={({ target: { value } }) => {
          setImage(value);
        }}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="text"
        onChange={({ target: { value } }) => {
          setCalories(value);
        }}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="text"
        onChange={({ target: { value } }) => {
          setServings(value);
        }}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
