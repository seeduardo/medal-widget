# Olympic Medals Widget

Small app that sorts Olympic medal information by medal type and total.

## Running the widget

### Install dependencies

Once the repo has been forked and cloned, install dependencies by running:

```sh
npm install
```

### Start the development server

Then you can check to see the widget in action by running:

```sh
npm start
```
and navigating to localhost:9000

### Production build

Once you are ready to embed the widget in your own project, run:

```sh
npm run build
```

This will produce a dist folder in the repo, wherein you can find a medal-widget.js file that you will need to move into the root directory of your project. Also in the dist folder will be an index.html file, which you can also move to your project's root directory if you're starting from scratch, or simply copy the the two script tags there and place them into your existing HTML file. The initialSort parameter is set as 'total' by default, but you can change it in the relevant script tag to 'gold', 'silver' or 'bronze'. The medal table div in the widget has an id of 'medal-widget' which you can then use to correctly place it on the screen by way of CSS. Happy medalling!
