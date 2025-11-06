const uri = "https://example.com"; // Replace with actual URI
const id = "user123"; // Replace with actual user ID
const quest_api_key = "quest-api-key"; // Replace with actual API key

const main = async () => {
    const response = await fetch(`${uri}/api/users/update-flag`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "x-api-key": quest_api_key
        },
        body: JSON.stringify({
            userId: id,
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

    console.log(response.status); // 200 is ok, 4xx is client error, 5xx is server error
    const data = await response.json();
    console.log(data.data);
}

main();