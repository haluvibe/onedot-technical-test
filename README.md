# onedot-technical-test

## Notes

### Things I would improve

I tried to include something a file/folder structure that would be used in a production app.

It's a little verbose for the requirements of the test. For example, I could have simply used a single container and passed everything down via a provider, but I feel having multiple containers makes the code easier to reason about and is a better foundation for a bigger, scalable app.

### Tests

I chose to use Cypress for testing.

Run `yarn start` to start the local development server

and then `yarn run cypress open` to start the tests
