import { useContext } from 'react'
import { ExpenseTrackerContext } from './context/context'
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories'

const useTransactions = (title) => {
    resetCategories()
    const { transactions } = useContext(ExpenseTrackerContext)
    const transactionsPerType = transactions.filter((t) => t.type === title)
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories
    console.log({ transactionsPerType, total, categories })

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.categoriy)
        if(category) category.amount += t.amount
    });

    const filteredCategory = categories.filter((c) => c.amount > 0)

    const chartData = {
        datasets: [{
            data: filteredCategory.map((c) => c.amount),
            backgroundColor: filteredCategory.map((c) => c.color)
        }],
        labels: filteredCategory.map((c) => c.type)
    }

    return { filteredCategory, total, chartData } 
}

export default useTransactions