require('dotenv').config();

const main = async () => {
    const response = await fetch(`${process.env.URI}/api/users/update-flag`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "x-api-key": "2025fes-quest-key"
        },
        body: JSON.stringify({
            userId: process.env.ID,
            updates: [
                {
                    flagName: "casino_coins_earned",
                    increment: 100
                },
                {
                    flagName: "casino_played",
                    increment: 1
                },
                {
                    flagName: "casino_roulette_played",
                    increment: 1
                }
            ]
        })
    });

    console.log(response.status);
    const data = await response.json();
    console.log(data.data);
}

main();