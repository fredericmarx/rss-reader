# rss-reader

## Description

This project aims to implement an RSS reader. This is being done as a learning project, and an experiment in open source project management.

## Code of Conduct

This project operates under the [Contributor Covenant 1.4.0](http://contributor-covenant.org/), and it's text can be found under `CONDUCT.md` in the project root.

## How to get started

You will need [Node.JS](https://nodejs.org/) installed, which should come with [npm](https://www.npmjs.com/) too.

You will also need [Git](https://git-scm.com/) installed, and there's a great guide by GitHub on [Setting up Git](https://help.github.com/articles/set-up-git/).

Assuming you have the prerequisite software, the following steps should work for you, if they don't please, [file an Issue](https://github.com/lewiscowper/rss-reader/issues)

```
git clone git@github.com:lewiscowper/rss-reader.git
npm install
npm start
```

Now open a browser to `http://localhost:8080`, and you should see some things and stuff!

If not please [file an Issue](https://github.com/lewiscowper/rss-reader/issues).

You should now be in a position to add tests, and run the coverage report.

You can do this with:

```
npm run test
npm run test:coverage
```

If you'd like a more friendly testing environment which will watch for changes, and re-run the unit tests, you can also run:

```
npm run test:js:watch
```

## If you need help

Each file in the project has comments (assuming the file format allows them), so your first port of call when trying to understand what's happening is there.

If you can't understand why something is happening, please [file an Issue](https://github.com/lewiscowper/rss-reader/issues) and I'd love to help clear up any misconceptions or issues you may have. Because if one person has the time to open an issue and ask a question, then it probably means a few people have looked at it and not understood it.

## Filing an Issue

If you are wondering how to file an Issue, please first check out GitHub's excellent guide, [Creating an Issue](https://help.github.com/articles/creating-an-issue/).

If you're still unsure, feel free to shoot me an email at the address listed in the Code of Conduct, and I'll try and help you out!

## Filing a Security Issue

Any security related issues should be disclosed to `lewis.cowper+security [at] googlemail.com`, and can be dealt with privately.

## Things you can help with

If you see an open issue that nobody is assigned to, you are more than welcome to add a comment on the issue that you'd like to take a look at solving it.

If you have an idea for a feature or improvement, or would like to fix a bug you've found, please open a Pull Request, (see GitHub's wonderful guide on [Opening a Pull Request](https://help.github.com/articles/creating-a-pull-request/) if you're unfamiliar with the process), and explain why your changes are necessary to the project.

We follow the [Angular commit message format](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines), and for an easy way of ensuring you format your commit messages correctly, you can run `npm run commit`, which uses [commitizen](https://github.com/commitizen) under the hood to create your commit message.

## Getting in touch

The best way is via email (`lewis.cowper+rss-reader [at] googlemail.com`),or GitHub Issues on this repo. If you would like to help out, we'd be happy to have you!
