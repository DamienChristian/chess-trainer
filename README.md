# Chess Trainer

A Chess Training application that allows users to import chess studies in PGN format and practice their moves.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** MongoDB (Mongoose)
- **Testing:** Jest, React Testing Library, Playwright
- **Linting:** ESLint, Prettier
- **Git Hooks:** Husky, Commitlint

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd chess-trainer
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

### Development

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server

### Testing

- `npm test` - Run unit tests with Jest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run test:e2e:ui` - Run E2E tests with Playwright UI
- `npm run test:e2e:headed` - Run E2E tests in headed mode
- `npm run test:e2e:debug` - Debug E2E tests

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## License

This project is licensed under the MIT License.
