# btc-converter-tool

A CLI to convert bitcoin to any provided currency.

## Installing the CLI

You can use this library by 2 ways: trough npm repository or by building the library locally. If you can't use it from the npm repository, try [generating a new API key](https://bitcoinaverage.com/) and building the library locally.

### Installing from npm repository

```
$ npm install -g btc-converter-tool
```

### Building the package locally

1. Clone this repo: `git@github.com:lcnogueira/btc-converter-tool.git`
2. Install the dependencies: `npm install`.
3. Create an account on `https://bitcoinaverage.com` and get a public API.
4. Fill the `API_KEY` field in the `env.example` file with the new gerated public API and rename the file to `.env`.
5. Build the library: `npm run build`.
6. Link the code: `npm link` (it's not `npm run link`).
7. Have fun!

### How to use

```sh
btc-converter --help

  Usage: btc-converter [options]

  Convert Bitcoin to any currency defined

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -C, --currency <currency>  Currency to be converted. (Default: USD)
    -A, --amount <amount>      Value in Bitcoin to convert. (Default: 1)
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lcnogueira/js-spotify-wrapper/tags).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
