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
- `npm run typecheck` - Type check with TypeScript

## Project Structure

```
chess-trainer/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── tests/                 # All tests
│   ├── e2e/              # Playwright E2E tests
│   └── *.test.tsx        # Jest unit tests
├── .github/              # GitHub Actions workflows
│   └── workflows/
│       └── ci.yml        # CI pipeline
├── .husky/               # Git hooks
│   ├── pre-commit        # Pre-commit hook (format, typecheck, test)
│   └── commit-msg        # Commit message validation
├── jest.config.ts        # Jest configuration
├── playwright.config.ts  # Playwright configuration
├── eslint.config.mjs     # ESLint configuration
├── .prettierrc           # Prettier configuration
└── commitlint.config.mjs # Commitlint configuration
```

## Git Hooks

This project uses Husky to enforce code quality before commits:

### Pre-commit Hook

The pre-commit hook automatically runs:

1. **Lint-staged**: Formats and lints staged files
2. **Type check**: Runs TypeScript type checking
3. **Tests**: Runs unit tests

### Commit Message Hook

Validates commit messages against [Conventional Commits](https://www.conventionalcommits.org/) specification.

Format: `<type>(<scope>): <subject>`

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

Example:

```bash
git commit -m "feat(pgn): add PGN import functionality"
git commit -m "fix(training): correct move validation logic"
```

## Continuous Integration

GitHub Actions CI pipeline runs on every push and pull request to `main` and `dev` branches:

1. **Lint**: Code formatting, linting, and type checking
2. **Commitlint**: Validates commit messages (PR only)
3. **Test**: Runs unit tests with coverage
4. **E2E**: Runs Playwright end-to-end tests
5. **Build**: Builds the application

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes following conventional commits
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
