import Header from './Header';
import './home.css';
import MealInfo from '../modals/MealInfo';

export default function Home() {
  return (
    <div>
        <Header />
        <section>
          <h3>01/04/2022</h3>
          <div className='innerSection'>
            <button className='addBtn'>Add meal</button>
            <div className='mealSection'>
              <h4 className='mealName'>Khinkali</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Olivie</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>01/04/2022</h3>
          <div className='innerSection'>
            <button className='addBtn'>Add meal</button>
            <div className='mealSection'>
              <h4 className='mealName'>Khinkali</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Olivie</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className='mealSection'>
              <h4 className='mealName'>Salad</h4>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </section>
        <MealInfo />
    </div>
  )
}
