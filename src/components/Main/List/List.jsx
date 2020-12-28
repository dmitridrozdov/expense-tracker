import React, { useContext } from 'react'
import { List as MUList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../context/context'

const List = () => {
    const classes = useStyles()

    const globalState = useContext(ExpenseTrackerContext)
    console.log(globalState)

    const transactions = [
        { id: 1, type: 'Income', category: 'Salary', amount: 5000, date: 'Mon Dec 28 2020 ' },
        { id: 2, type: 'Expense', category: 'Business', amount: 4500, date: 'Mon Dec 28 2020 ' },
        { id: 3, type: 'Income', category: 'Salary', amount: 3799, date: 'Mon Dec 28 2020 ' }
    ];
    return (
        <MUList dance={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' area-label='delete' onClick=''>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUList>
    )
}

export default List
