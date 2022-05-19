---
sidebar_position: 1
---

# Onboarding Interface

In this page you'll know more about how our web project is structured :)

## Folders Structure

### Assets

Here we keep only assets that have general purposes, like arrow images and some other things that could be used in all of our app. Here we have only icons and images;

### Components

Here we keep the components we use in our app. By components we mean the code that doesn't represent a page. The pages folder will be explained later, but here you'll find the components that are shared by more than one page.

- Atomics => in the atomics folder, we keep only the simplest components, that don't use other components. They are the base for the molecular components;
- Moleculars => in the moleculars folder, we keep the components that are composed by other components. They are a bit more complex, because they use atomics and other moleculars.

### Config

Here we have two important folders:

- Chains:
  In the chains we define the data for the chains we are integrated. For now, we only have data for Polygon.

- Routes:
  In the routes we define, as the name says, all the routes we have in the app, and the rules to redirect to them.

- TestUtils:
  In the testUtils we define some utilities for our tests. Mainly, we define here our factories, that are used with the objective of creating an object of a certain type, without the logic, to be used in others contexts. Click [here](https://refactoring.guru/design-patterns/factory-method) for more info about factories.

### Lib

Here we define some logic to be used by our components such as date formatters, functions to humanize seconds, etc.

### Contexts

In the contexts folder, we define all the page contexts that are often used in the app, such as the currentUserContext and the loadingOverlayContext. If you see some logic that is being used in a lot of places in the app, you may see the possibility of moving it to this folder;

### Hooks

It's a default hook folder;

### Pages

In the pages folder, we have the folders for all the pages that we present in our dApp. **If there is a component that is used only by a certain page, it should be placed inside of the correspondent pages folder**. Also, if the page or its components need some assets, **they should be inside the pages folder**, to make it easier to maintain the context. We also create domains for the pages, like donations and users.

### Services

Here we keep our api folder and other logics that are used to serve our app such as our analytics, sign in functions, etc. Another important thing that is in here is the **apiTheGraph**. For more information about The Graph, visit the reserved page for it (link).

### Styles

In this folder we define the global styles for all of the app. There are some important files here, that we constantly use in our daily process of coding.

- typography.ts =>
  Typography.ts defines the font-size of our headers (h1, h2, h3, ...) and paragraphs (p). If you want to implement a title that has a font-size of 20px, instead of defining the font-size in the styles of the component, **you should instead define the correspondent header that defines that font-size**.

- theme =>
  In this file, we define the colors that we use in the app, and also the breakpoints (mobile, pad, desktop) for our media-queries.

### Types

In the types folder, we implement the entities of the interfaces related to our business logic (typescript).

### Utils

We keep the abis here :)

### Hooks and Contexts

In both folders, we take advantage of Hooks and Contexts features to create our own custom hooks and contexts. It's always important to remind you that all the hooks we create need to follow the pattern established by React with the prefix "use" - Ex: useWindowSize. For more info about Hooks, check the [React documentation](https://reactjs.org/docs/hooks-intro.html)

## CI/CD and Clean Code

### Prettier

We have a .prettierrc file that contains all the default patterns for our projects. To use it, you just have to clone the app and select the correct version of prettier in your IDE;

### Husky

We use husky as an improvement to our commits. Every commit must pass all the tests and fulfill the requirements of prettier.

### CI

Today we have a CI on Github actions. In every pull request (PR), you must request a review and it's necessary that someone approves your commit, after the review process.

## Code Quality

### Codehawk

We use codehawk to do the static analysis of our code. It identifies complex areas of the code that need special attention by our team.
To run it, you just have to run `yarn codehawk`

### Coverage

We use coverage to see the percentage of the test coverage in our project. To run it, you just have to run `yarn testCoverage`

```

```
