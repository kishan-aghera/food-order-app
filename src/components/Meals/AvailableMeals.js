import React from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Margherita',
    description: 'A hugely popular margherita, with a deliciously tangy single cheese topping.',
    price: 199,
  },
  {
    id: 'm2',
    name: 'Double Cheese Margherita',
    description: 'The ever-popular Margherita - loaded with extra cheese... oodies of it!',
    price: 339,
  },
  {
    id: 'm3',
    name: 'Peppy Paneer',
    description: 'Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!',
    price: 399,
  },
  {
    id: 'm4',
    name: 'Paneer Makhani',
    description: 'Paneer and Capsicum on Makhani Sauce.',
    price: 459,
  },
];


const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {mealsList}
      </Card>
    </section>
  )
}

export default AvailableMeals;
