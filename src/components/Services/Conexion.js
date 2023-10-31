import axios from 'axios';

export async function getFligthRound() {
    try {
        const response = await axios.get('http://localhost:3000/round-Trip');
        return response.data;
    } catch (error) {
        console.error('Error fetching flights:', error);
        return [];
    }
}

export async function getFligthsOne() {
    try {
        const response = await axios.get('http://localhost:3000/one-Way');
        return response.data;
    } catch (error) {
        console.error('Error fetching flights:', error);
        return [];
    }
}