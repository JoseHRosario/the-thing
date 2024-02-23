"use client"
import { parse } from "path";


function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default function Ideas() {
    const random = getRandomInt(2);   
    if(random === 0) {
        throw new Error('Failed to generate idea');
    }

    return (
        <h1>Ideas</h1>
    );
}