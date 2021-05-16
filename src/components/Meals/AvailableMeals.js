import {useState , useEffect} from "react"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"
import classes from "./AvailableMeals.module.css"
import useHttp from "../../hooks/use-http"


const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const { isLoading , error,sendRequest : fetchMeals} = useHttp()

  useEffect(() => {
    const  transformedMeals = mealsObj => {
      const loadedMeals = [];
  
        for (const key in mealsObj) {
          loadedMeals.push({ id: key, name: mealsObj[key].name, description: mealsObj[key].description, price: mealsObj[key].price });
        }
  
        setMeals(loadedMeals);
  
      }
    fetchMeals({url :'https://food-order-app-a41e0-default-rtdb.firebaseio.com/meals.json' }, transformedMeals);
  }, [fetchMeals]);

if (isLoading){
  return <section className={classes.mealLoading}>
    <p>Loading....</p>
  </section>
}
if (error){
  return <section className={classes.mealError}>
    <p>{error}</p>
  </section>
}
const mealsList = meals.map((meal) => <MealItem items={meal} id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}  />);
    return (<section className={classes.meals}>
        <Card>
        <ul> {mealsList} </ul>
        </Card>
    </section>
    )
}

export default AvailableMeals

