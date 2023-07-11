# single-spa-vite
This is an experimental repository of single-spa using Vite without any dependency on SystemJS. It showcases the potential of Microfrontend architecture using single-spa and Vite.

## Features

- Single SPA
- Vite

## Project Structure

The project structure is as follows:
```
single-spa-vite
├── microfrontend
├── root-config
```

The `microfrontend` is a single-spa micro-frontend application which is bundled and served by Vite. This application will operate under the umbrella of the global 'root-config' application.

The `root-config` is a root-config single-spa application that initializes and mounts the micro-frontend application.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/)

## Running the Example

1. Navigate into both folders `microfrontend` and `root-config`

```bash
cd microfrontend
npm install
npm run dev
```

Then,

```bash
cd ../root-config
npm install
npm run dev
```

2. Open your browser and visit `http://localhost:3000`

The microfrontend app bundled by Vite without SystemJS should now be running! Enjoy.