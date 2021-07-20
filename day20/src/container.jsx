import { useState } from "react";
import { Items } from "./Items";

const Container = () => {
   
  const Cards = [
    {
        name: "Pizza",
        cal: 56
    },
    {
        name: 'Burger',
        cal: 69
    },
    {
        name: 'Coke',
        cal: 500
    },
    {
        name: 'Browne',
        cal: 180
    },
    {
        name: 'Fried Rice',
        cal: 90
    },
    {
        name: 'Lassania',
        cal: 200
    },
    {
        name: 'Pani Puri',
        calorie: 10
    },
    {
        name: "Pizza",
        calorie: 56
    }
]

const [foods,setFood]=useState(Cards)
let newFoods=[...foods];
const HandleDelete=(id)=>{
  newFoods=foods.filter(food=> food!==foods[id])
  setFood(newFoods);
}
const empty=()=>{
  if (newFoods.length===0){
  return <h1>Empty List</h1>}
}


    return (
      <div className="container">
        <h1 className="heading">Calorie Chart</h1>
        <div className="containercard">
          {newFoods.map((item,id)=>{
            return(
              <Items
              key={id}
              item={item}
              id={id}
              HandleDelete={HandleDelete}
              />
            )
          }
          )}
        {empty()}
        </div>
        
      </div>
    );
  };

 
export default Container