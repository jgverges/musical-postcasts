# Musical Podcasts

This project is a mini-application for listening to musical podcasts. It is built with React, TypeScript, and Webpack from scratch.

- The application is designed to be a Single Page Application (SPA) with client-side navigation.
- Error handling is minimal and only logged to the browser console.

## Features

The project `musical-podcasts` is based on hexagonal architecture, which corresponds to its three main views:

- **PodcastList**: Main view who displays the list of the top 100 most popular podcasts.
- **Podcast Details**: Shows detailed information about a podcast and its episodes.
- **Episode Details**: Displays detailed information about an episode, including a basic audio player.

### Project tree diagram

```css

musical-podcasts/
│
├── src/
│   ├── features/
│   │   ├── PodcastList/
│   │   │   ├── components/
│   │   │   ├── models/
│   │   │   └── services/
│   │   │
│   │   ├── PodcastDetails/
│   │   │   ├── components/
│   │   │   ├── models/
│   │   │   └── services/
│   │   │
│   │   ├── EpisodeDetails/
│   │   │   ├── components/
│   │   │   ├── models/
│   │   │   └── services/
│   │   └── common/
│   │
│   ├── styles/
│   │   ├── EpisodeDetails/
│   │   ├── PodcastDetails/
│   │   ├── PodcastList/
│   │   └── main.css
│   ├── index.tsx
│   └── App.tsx
│
├── tests/
│   ├── __mocks____
│   ├── EpisodeDetails/
│   ├── PodcastDetails/
│   └── PodcastList/
|
├── webpack.config.js
├── tsconfig.json
└── package.json
```

This structure organizes the project by features, where each main function (view) has its own directory in src/features/, which contains its models, services and components. This follows the hexagonal architecture approach, where features are encapsulated and separated from each other, facilitating maintainability and scalability of the project.

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

## Development Requirements

The application has been designed based on the supplied requirements listed in a PDF file..

Additionally, it has followed the following received recommendations:

- Avoid using `create-react-app` or similar tools. Set up the project from scratch. Preferably using `webpack`.

- Utilize `hexagonal architecture`, focusing on features and separating models, services, and screens within each feature.

- Implement TypeScript.

- Preferably use native CSS without libraries.

- Include tests.

- Document the README file.
