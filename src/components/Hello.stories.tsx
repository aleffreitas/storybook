import { useState } from "react";
import { Hello } from "./Hello";

export default {
    component: Hello,
    title: 'Hello',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Default = () => {
    const [number, setNumber] = useState(0);

    function Increment() {
        setNumber(number + 1);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={Increment}>Incrementar</button>
        </>
    )
};

export const Pinned = () => <Hello />;

export const Archived = () => (<Hello />);