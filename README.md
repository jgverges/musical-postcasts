# Musical Podcasts

This project is a mini-application for listening to musical podcasts. It is built with React, TypeScript, and Webpack from scratch.

- The application is designed to be a Single Page Application (SPA) with client-side navigation.
- Error handling is minimal and only logged to the browser console.

## Features

The project `musical-podcasts` is based on its three main views:

- **PodcastList**: Main view who displays the list of the top 100 most popular podcasts.
- **Podcast Details**: Shows detailed information about a podcast and its episodes.
- **Episode Details**: Displays detailed information about an episode, including a basic audio player.

### Project tree diagram

musical-podcasts/

```
.
|-- LICENSE
|-- README.md
|-- jest.config.js
|-- package-lock.json
|-- package.json
|-- public
|   `-- index.html
|-- src
|   |-- App.tsx
|   |-- common
|   |   |-- components
|   |   |   |-- AudioPlayer.tsx
|   |   |   |-- Header
|   |   |   |-- Loading
|   |   |   `-- NotFoundPage.tsx
|   |   |-- constants
|   |   |   |-- apiURLConstants.ts
|   |   |   `-- routesConstants.ts
|   |   |-- contexts
|   |   |   `-- LoadingContext.tsx
|   |   `-- utils
|   |       `-- FormattingHelpers.ts
|   |-- features
|   |   |-- EpisodeDetails
|   |   |   `-- components
|   |   |-- PodcastDetails
|   |   |   |-- components
|   |   |   |-- models
|   |   |   `-- services
|   |   `-- PodcastList
|   |       |-- components
|   |       |-- models
|   |       `-- services
|   |-- index.tsx
|   `-- styles.css
|-- tests
|   |-- EpisodeDetails
|   |   `-- EpisodeDetail.test.tsx
|   |-- PodcastDetails
|   |   `-- PodcastDetails.test.tsx
|   |-- PodcastList
|   |   `-- PodcastList.test.tsx
|   `-- __mocks__
|       |-- Podcast-detail-sm.mock.json
|       |-- Podcast-detail.mock.json
|       |-- Podcasts.mock.json
|       |-- filterdList.mock.json
|       `-- filteredPodcast.json
|-- tsconfig.json
`-- webpack.config.js

```

This structure organizes the project by features, where each main function (view) has its own directory in src/features/, which contains its models, services and components.

## Running the Application

### Requirements

- Node.js (v20.x or higher)
- npm choose based on the Node.js version

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/jgverges/musical-podcasts.git
```

2. **Install dependencies**:

Open a terminal and navigate to the project folder.

Install project dependencies by running the following command:

```bash
npm install
```

### Development Mode

3. **Start the development server**:

```bash
npm run dev
```

4. **Open the application**:

Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.

### Production Mode

To run the application in production mode, follow these steps:

- Make sure you have followed the steps up to step 2.
- Once the dependencies are installed, you can build the application for production by running:

```

npm run build

```

3. This will generate a `dist` folder with concatenated and minified assets.
4. The generated files in the `dist` folder can be deployed to any web server to be run in production mode.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm test`: Run unit tests.

## External APIs

- [Top 100 Podcasts](https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json)
- [Podcast Details](https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20)

## Information Processing, Filtering, and Conversions

### Interpreted HTML Rendering

The description of the episodes sometimes contains HTML and should be displayed interpreted (not escaped). This is the default behavior of React when rendering, although treatment has been added to allow line breaks.

This is how we achieve rendering:

```
Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/joebudden
Sleeper Picks:
Joe | Marie Dahlstrøm - “Safe Place”
Ice | Flo Milli (feat. Gunna) - “Edible”
```

Instead of the default React behavior:

```
Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/joebudden Sleeper Picks: Joe | Marie Dahlstrøm - “Safe Place” Ice | Flo Milli (feat. Gunna) - “Edible” ”
```

### JSON List Filtering

The podcast list API call returns a JSON with thousands of lines corresponding to the `PodcastListResponse` interface.

This JSON is filtered to use only the minimum necessary information, using the `PodcastFiltered` interface instead of `PodcastI`. This facilitates handling information in `localstorage` as well as podcast searches without the need to apply `React Hooks`.

### Date Treatments

- **Dates**: Rendered in a more readable format.
- **Milliseconds**: Converted to hours:minutes format.

### Track Title Filtering

**Track Titles**: "trackName" information has been filtered to directly display the title, removing the episode number. For example:

Instead the original: "Episode 709 | \"Ish Type Beat\""

Renders: "Ish Type Beat"

### Podcast Card Title Length Limitation

To prevent overflow with some excessively long titles that broke the card layout, such as `BROKEN RECORD WITH RICK RUBIN, MALCOLM GLADWELL, BRUCE HEADLAM AND JUSTIN RICHMOND`, their maximum length has been truncated.

## Lighthouse

Results on localhost in Mac OS for Desktop

![image](https://github.com/jgverges/podcast-apuntes/assets/55912813/b16884f4-b5d7-4e4e-b5cf-bb9af4787b2f)

Used Lighthouse to make performance improvements to the application. Accessibility, Best Practices and SEO are increasingly valued by companies to position their projects. That is why the HTML code was created following semantic, accessibility and SEO guidelines. Additionally, improvements have been made to the build process with Webpack.

## Version Control

The project uses `git` and `GitHub` under the `conventional commit` protocol. It also includes explanatory `tags`.
