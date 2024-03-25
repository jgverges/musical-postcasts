# Musical Podcasts

This project is a mini-application for listening to musical podcasts. It is built with React, TypeScript, and Webpack from scratch.

- The application is designed to be a Single Page Application (SPA) with client-side navigation.
- Error handling is minimal and only logged to the browser console.

## Architerture

The project is based on hexagonal architecture, which corresponds to its three main views:

- PodcastList: List of podcasts.
- PodcastDetails: Details of a podcast.
- EpisodeDetails: Audio player of the selected podcast as well as detailed description.

### Project tree diagram

```css

musical-podcasts/
│
├── src/
│   ├── features/
│   │   ├── PodcastList/
│   │   │   ├── components/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   └── tests/
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
│   ├── PodcastList/
|
├── webpack.config.js
├── tsconfig.json
└── package.json
```

This structure organizes the project by features, where each main function (view) has its own directory in src/features/, which contains its models, services, components, and associated tests. This follows the hexagonal architecture approach, where features are encapsulated and separated from each other, facilitating maintainability and scalability of the project.

## Getting Started

To get a local copy up and running, follow these steps:

## Requirements

- Node.js (v20.x or higher)
- npm choose based on the Node.js version

1. **Clone the repository**:

```bash
git clone https://github.com/jgverges/musical-podcasts.git
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm run dev
```

4. **Open the application**:

Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm test`: Run unit tests.

## Features

- **Main View (/)**: Displays the list of the top 100 most popular podcasts.
- **Podcast Details (/podcast/{podcastId})**: Shows detailed information about a podcast and its episodes.
- **Episode Details (/podcast/{podcastId}/episode/{episodeId})**: Displays detailed information about an episode, including a basic audio player.

## External APIs

- [Top 100 Podcasts](https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json)
- [Podcast Details](https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20)

## Notes

- The application is designed to be a Single Page Application (SPA) with client-side navigation.
- Clean URLs are used for navigation without hash (#) usage.
- Error handling is minimal and only logged to the browser console.

## Development Requirements

The application has been designed based on the supplied requirements listed in a PDF file..

- The application is designed to be a Single Page Application (SPA) with client-side navigation.
- Clean URLs are used for navigation without hash (#) usage.
- Error handling is minimal and only logged to the browser console.

Additionally, it has followed the following received recommendations:

- Avoid using `create-react-app` or similar tools. Set up the project from scratch. Preferably using `webpack`.

- Utilize `hexagonal architecture`, focusing on features and separating models, services, and screens within each feature.

- Implement TypeScript.

- Preferably use native CSS without libraries.

- Include tests.

- Document the README file.
