const id = "gmk7F5"; // Replace with actual user ID

const getData = async () => {
    const response = await fetch('https://pinattutaro.github.io/fest2025api/4u/env.json');
    const data = await response.json();
    // console.log(data);
    return [data.uri, data["x-api-key"]];
}

const main = async () => {
    const [uri, quest_api_key] = await getData(); // env.jsonからURIとAPIキーを取得

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
                    flagName: "game_played",
                    increment: 0
                }
            ]
        })
    });

    console.log(response.status); // 200 is ok, 4xx is client error, 5xx is server error
    const data = await response.json();

    const coin = data.data.updatedUser.currency;
    console.log(coin);
}

main();