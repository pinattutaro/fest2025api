require('dotenv').config();

const main = async () => {
    const response = await fetch(`${process.env.URI}/api/users/update-flag`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "x-api-key": process.env.QUEST_API_KEY
        },
        body: JSON.stringify({
            userId: process.env.ID,
            updates: [
                {
                    flagName: "game_played",
                    increment: 0
                }
            ]
        })
    });

    console.log(response.status);
    const data = await response.json();
    console.log(data.data);
}

main();