# Microfrontends Project

This project demonstrates a microfrontends architecture using Webpack Module Federation. It consists of three main applications:
- Container
- Harry Potter List
- Rick and Morty List

## Description

The Container application serves as the host and integrates the Harry Potter List and Rick and Morty List microfrontends. Each microfrontend is developed and deployed independently, allowing for better scalability and maintainability.

## ANSWER TO CHALLENGE QUESTIONS

**What is accessibility? How do you achieve it?**

Accessibility ensures that products are usable by people with diverse abilities. Achieving it involves using clear font sizes, proper contrast, and ensuring compatibility with screen readers. Additionally, adding alt text for images is essential.


**What is the difference between session storage, local storage, and cookies?**

- **Lifetime**: Session storage and cookies expire when the browser is closed, while local storage persists.
- **Transmission**: Cookies are sent with every HTTP request; session and local storage are not.
- **Storage Capacity**: Local and session storage offer larger capacity compared to cookies.


**Explain the JavaScript event loop (also may explain how promises or async/await work in JS; these are basically all the same question/answer)**

The JavaScript event loop manages asynchronous operations in a single-threaded environment. It ensures non-blocking execution. Promises are queued in the event loop, allowing the main thread to continue execution. `async/await` is syntactic sugar that makes asynchronous code look synchronous; `await` pauses execution until the promise resolves.

**If you are getting too many API calls being made from your hooks, what can you do to prevent this?**

To prevent excessive API calls, add conditions or dependencies in `useEffect`, ensuring requests are made only when necessary.

**How do you manage the global state? And why in that way?**

In a microfrontend architecture, the global state should be managed in a way that allows each application to access it independently, without relying on shared dependencies like React hooks. This approach enhances isolation between different projects, making it easier to develop, deploy, and maintain individual microfrontends. By decoupling the global state from specific frameworks or libraries, you can achieve better flexibility, scalability, and maintainability across all the microfrontends in the system.

**What is progressive rendering?**

Progressive rendering loads and displays content incrementally as it becomes available. This improves the user experience by reducing perceived load times, often using techniques like lazy loading to prioritize essential content.


## NOTES

### Unresolved Issues
1. **Route Switching Between Microfrontends**:
   - When navigating to a microfrontend route (e.g., `/harrypotter`) and then going back to access another (e.g., `/rickandmorty`), the second route does not load unless the page is refreshed.
   - Likely caused by inconsistent history management or state persistence.

2. **Unit Tests**:
   - Unit tests were not implemented due to time limitations.




## Installation Guide

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

### Clone the Repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### Install Dependencies

#### Container

```sh
cd container
npm install
```

#### Harry Potter List

```sh
cd ../harrypotter-list
npm install
```

#### Rick and Morty List

```sh
cd ../rickandmorty-list
npm install
```

### Running the Applications

#### Development Mode

To run the applications in development mode, open separate terminal windows for each application and execute the following commands:

##### Container

```sh
cd container
npm start
```

##### Harry Potter List

```sh
cd ../harrypotter-list
npm start
```

##### Rick and Morty List

```sh
cd ../rickandmorty-list
npm start
```

The applications will be available at the following URLs:
- Container: [http://localhost:8080](http://localhost:8080)
- Harry Potter List: [http://localhost:8081](http://localhost:8081)
- Rick and Morty List: [http://localhost:8082](http://localhost:8082)

#### Production Mode

To build the applications for production, execute the following commands:

##### Container

```sh
cd container
npm run build
```

##### Harry Potter List

```sh
cd ../harrypotter-list
npm run build
```

##### Rick and Morty List

```sh
cd ../rickandmorty-list
npm run build
```

The built files will be available in the `dist` directory of each application.

## Project Structure

```sh
.gitignore
container/
    config/
        webpack.common.js
        webpack.dev.js
        webpack.prod.js
    package.json
    public/
        index.html
    src/
        app.js
        bootstrap.js
        components/
        i18n.js
        index.js
harrypotter-list/
    config/
        webpack.common.js
        webpack.dev.js
        webpack.prod.js
    package.json
    public/
        index.html
    src/
        app.js
        bootstrap.js
        components/
        i18n.js
        index.js
        locales/
readme.md
rickandmorty-list/
    config/
        webpack.common.js
        webpack.dev.js
        webpack.prod.js
    package.json
    public/
        index.html
    src/
        app.js
        bootstrap.js
        components/
        i18n.js
        index.js
        locales/
```

## License

This project is licensed under the MIT License.
