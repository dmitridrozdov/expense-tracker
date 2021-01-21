import React from 'react'

const isIncome = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%'}}>
             Try to say: <br/>
             Add { isIncome ? 'Income ' : 'Expense ' } 
             for { isIncome ? '$100 ' : '$27 ' } 
             in Category { isIncome ? 'Business ' : 'Bills ' } 
             for NEXT { isIncome ? 'Monday ' : 'Tuesday ' } 
        </div>
    )
}

export default InfoCard
