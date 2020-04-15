### Up and running
`yarn start`

### Description
A game of Tic Tac Toe where the computer never loses.

### Implementation notes
To bootstrap the application, I used [Create React App with the TypeScript template](https://create-react-app.dev/docs/adding-typescript/). I added four additional dependencies. [React Bootstrap](https://react-bootstrap.github.io/) for pre-styled components, [Emotion](https://emotion.sh/docs/introduction) to customize them, [Lodash](https://lodash.com/docs/4.17.15) for some helpers, and [Feather](https://feathericons.com/) for Icons.

The computer plays by the Newell and Simon strategy outlined in the [Wikipedia article you shared with me](https://en.wikipedia.org/wiki/Tic-tac-toe).

### Screencaptures
| |
| - |
| |
| <img width="1051" alt="Screen Shot 2020-04-15 at 1 23 57 PM" src="https://user-images.githubusercontent.com/5553834/79384841-765f7280-7f1c-11ea-8572-d03ca13ede30.png"> |

### Potential follow-ups
- [ ] Notification when the game has a winner.
- [ ] Notification when the game ends in a draw.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
