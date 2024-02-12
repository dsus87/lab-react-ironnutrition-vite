// Your code here

function FoodBox(props) {
    const { food } = props;
  
    return (
      <div className="FoodBox">
        <p>NAME</p> 
        <img src={food.image} alt={food.name} />  
        <p>Name: {food.name}</p> 
        <p>Calories: {food.calories} CALORIES</p> 
        <p>Servings: {food.servings} SERVINGS</p> 
  
        <p>
          <b>Total Calories: {food.servings * food.calories} kcal</b> 
        </p>
  
        <button>Delete</button>
      </div>
    );
  }

  export default FoodBox; 