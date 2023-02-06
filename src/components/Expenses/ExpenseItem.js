import './Expenseitem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail';
const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <ExpenseDetail title = {props.title} locationOfExpenditure = {props.locationOfExpenditure} amount = {props.amount} />
        </Card>
    );
}

export default ExpenseItem;