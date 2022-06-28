import { useState } from "react";

// Use = Hook

// Immutability - Cannot directly change the content

// user = ['user1', 'user2', 'user3'] 

// user.push('new_user')

// newUsers = [...usuarios, 'new_user']


export function Counter() {

    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1)
        console.log("Test")
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}