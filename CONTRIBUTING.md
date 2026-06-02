# Contributing to Ghost Arc

First off, thank you for taking the time to contribute! This project thrives on community participation, and we want to make it as easy and transparent as possible.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please report any unacceptable behavior to the project maintainers.

---

## Development Process

We use a standard branching model with GitHub Pull Requests:

1. **Fork the Repository**: Create a personal fork of the repository on GitHub.
2. **Clone the Fork**: Clone your fork locally.
3. **Create a Feature Branch**: Branch off from `main` using a descriptive name:
   ```bash
   git checkout -b feature/your-awesome-feature
   # or
   git checkout -b bugfix/issue-description
   ```
4. **Make Changes**: Implement your changes. Ensure you write tests where applicable.
5. **Format & Lint**: Validate your changes conform to the linting and formatting rules:
   ```bash
   npm run lint
   ```
6. **Commit**: Write descriptive, conventional commit messages. See [Commit Message Guidelines](#commit-message-guidelines) below.
7. **Push & Pull Request**: Push your branch to your fork and submit a PR to the `main` branch of the upstream repository.

---

## Commit Message Guidelines

We enforce a structured, conventional commit style. Commit messages should look like this:

```text
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Types
* **feat**: A new user-facing feature.
* **fix**: A bug fix.
* **docs**: Documentation updates.
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
* **refactor**: A code change that neither fixes a bug nor adds a feature.
* **perf**: A code change that improves performance.
* **test**: Adding missing tests or correcting existing tests.
* **build**: Changes that affect the build system or external dependencies (example scopes: npm, webpack).
* **ci**: Changes to CI configuration files and scripts.
* **chore**: Other changes that don't modify src or test files.

### Scope
The scope is optional but recommended. It specifies the component or file modified (e.g., `canvas`, `agent`, `docs`, `config`).

### Subject
* Use the imperative, present tense: "change" not "changed" nor "changes"
* Don't capitalize the first letter
* No dot (.) at the end

### Example Commit
```text
feat(canvas): integrate React Flow with Liveblocks sync

- Set up RoomProvider in layout
- Synchronize node movements across participants
- Handle connection status transitions
```

---

## Pull Request Guidelines

Before submitting your PR, please make sure:

1. The codebase builds successfully: `npm run build`
2. All current tests pass.
3. Code style guidelines are followed.
4. Your commits are atomic and follow the Conventional Commit guidelines.
5. The PR description clearly details the changes, rationale, and links to any related issues.

---

Thank you for contributing to Ghost Arc! 👻📐
