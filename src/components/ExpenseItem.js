import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import Card from "../UI/Card";

function ExpenseItem(props){
    const ExpenseItem = (props) => {
        const clickHandler = () => {
            console.log('Clicked!')
        }

        return (
            <Card className="expense-item">
                @@ -11,8 +14,10 @@ function ExpenseItem(props){
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
                </Card>
                )

            }

                export default ExpenseItem