import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 4, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' }
    ]
    const [counters, SetCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id !== id);
        SetCounters(newCounters);
    };

    const handleReset = () => {
        SetCounters(initialState);
    }

    const handleIncrement = (id) => {
        const newValue = counters.map((item) => ({
            ...item,
            value: item.id === id ? item.value + 1 : item.value
        }));
        SetCounters(newValue);
    }

    const handleDecrement = (id) => {
        const newValue = counters.map((item) => ({
            ...item,
            value: item.id === id ? item.value - 1 : item.value
        }));
        SetCounters(newValue);
    }

    return (
        <>
            {/* {counters.map(count => (
                <Counter
                    key={count.id}
                    id={count.id}
                    value={count.value}
                    name={count.name}
                    onDelete={handleDelete} />))} */}

            {counters.map(count => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}

            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    );
};

export default CountersList;