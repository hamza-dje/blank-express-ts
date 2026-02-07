# Blank Express TypeScript

A clean, well-structured starter template for building Express.js applications with TypeScript support.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Building & Production](#building--production)
- [Scripts](#scripts)
- [Project Architecture](#project-architecture)
- [License](#license)

## ✨ Features

- **TypeScript Support**: Full TypeScript configuration with strict type checking
- **Express.js**: Lightweight and flexible web framework
- **Environment Management**: Dotenv for environment variable configuration
- **Error Handling**: Custom error handling middleware and error classes
- **Morgan Logger**: HTTP request logging middleware
- **CORS Support**: Cross-Origin Resource Sharing enabled
- **Development Tools**: Nodemon for auto-reloading during development
- **Code Quality**: ESLint integration for code linting

## 📁 Project Structure

```
blank-express-ts/
├── src/
│   ├── app.ts                 # Express app configuration
│   ├── server.ts              # Server entry point
│   ├── config/
│   │   ├── index.ts           # Config exports
│   │   ├── env.ts             # Environment variables
│   │   └── logger.ts          # Morgan logger setup
│   ├── controllers/
│   │   └── appController.ts   # Request handlers
│   ├── routes/
│   │   ├── index.ts           # Route aggregation
│   │   └── appRoutes.ts       # App-specific routes
│   ├── services/
│   │   └── appService.ts      # Business logic
│   ├── middlewares/
│   │   ├── error.ts           # Error handling middleware
│   │   └── not-found.ts       # 404 handler
│   └── utils/
│       └── error/
│           └── custom-error.ts # Custom error class
├── package.json
├── tsconfig.json
├── nodemon.json
└── README.md
```

## 📦 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

## 🚀 Installation

1. **Clone or download the project**

    ```bash
    cd blank-express-ts
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Create environment configuration**
    ```bash
    # Create a .env file in the project root
    echo "NODE_ENV=development" > .env
    echo "PORT=5000" >> .env
    ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
NODE_ENV=development
PORT=5000
```

**Required Variables:**

- `NODE_ENV`: Must be either `development` or `production`
- `PORT`: Port number for the server (default: 5000)

The application will throw an error if `NODE_ENV` is missing or has an invalid value.

## 🛠️ Development

### Start Development Server

```bash
npm run dev
```

This command starts the server with nodemon, which automatically restarts the server when you modify TypeScript files.

## 🏗️ Building & Production

### Build TypeScript

Compile TypeScript to JavaScript:

```bash
npm run build
```

This generates JavaScript files in the `out/` directory.

### Start Production Server

After building, start the production server:

```bash
npm start
```

The server will run on the port specified in your `.env` file (default: 5000).

## 📝 Scripts

| Script          | Description                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start development server with auto-reload |
| `npm run build` | Compile TypeScript to JavaScript          |
| `npm start`     | Run production server                     |

## 🏛️ Project Architecture

### Configuration (`config/`)

Manages environment variables and logger setup. The `env.ts` file validates required environment variables at startup.

### Routes (`routes/`)

Defines all API endpoints and route handlers. Routes are organized by feature.

### Controllers (`controllers/`)

Handles incoming HTTP requests and delegates business logic to services.

### Services (`services/`)

Contains business logic and data processing separated from HTTP handling.

### Middlewares (`middlewares/`)

- **error.ts**: Global error handling middleware
- **not-found.ts**: 404 handler for undefined routes

### Utils (`utils/`)

Utility modules including custom error classes for consistent error handling.

## 📚 Middleware Stack

1. **Logger Middleware** (Dev only): Logs HTTP requests using Morgan
2. **JSON Parser**: Parses incoming JSON request bodies
3. **Route Handlers**: Process requests and send responses
4. **Not Found Handler**: Returns 404 for unmapped routes
5. **Error Handler**: Catches and formats errors globally

## 🔒 Error Handling

The application includes a custom error handling system with:

- Custom error class in `utils/error/custom-error.ts`
- Global error middleware in `middlewares/error.ts`
- Consistent error response formatting

## 📦 Dependencies

### Core

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **http-status-codes**: HTTP status code constants
- **morgan**: HTTP request logger
- **typescript**: TypeScript compiler

### Dev Dependencies

- **@types/\***: TypeScript type definitions
- **nodemon**: Dev server auto-reloader
- **ts-node-dev**: TypeScript execution for Node.js

## 🎯 Getting Started

1. Install dependencies: `npm install`
2. Create `.env` file with required variables
3. Run development server: `npm run dev`
4. Start building your API endpoints in `src/routes/` and `src/controllers/`

## 📄 License

ISC

---

**Author**: hamza-dje

**Version**: 0.0.1
