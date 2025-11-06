## APIのrequestについて

### constant values
uri, x-api-keyについては固定にしにくいので、"./env.json"から取得、みたいな感じで行きたい。
- uri: サーバのuri。
- id: 該当ユーザのid。取得方法はもうちょいまって。
- x-api-key: サーバにリクエストを送るためのキー。

### flag names
- casino
    - casino_played
    - casino_rolette_played
    - casino_poker_played
    - casino_backjack_played
    - casino_coins_earned

- dungeon
    - dungeon_played
    - dungeon_enemies_defeated
    - dungeon_chests_opened
    - dungeon_floors_cleared

- code
    - code_editor_played
    - code problems_solved
    - code_solo_clears

### usage
- "./chFlag.js"を参照
- 複数フラッグを同時に更新することもできる。