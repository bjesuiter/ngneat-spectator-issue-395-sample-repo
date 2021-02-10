## Respository Creation 

1. Create folder via CMD 
2. `git init`
3. `npm init` + `npm install`
4. Add `@angular/cli@8` + ignore `node_modules`
5. Create new angular project in existing repo (Note: remove the --dry-run flag to execute the changes)
   ``` 
   npx ng new spectator-issue395 --directory ./ --create-application true \
    --enable-ivy false --inline-style false --inline-template false \
    --minimal true --interactive false --prefix "app" --style "scss" \
    --skip-git true --skip-tests --force --dry-run
   ```
6. Setup Testing with Jest like here: 
   https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/
   
   1. `npm install jest jest-preset-angular @types/jest --save-dev`
   2. setup `jest.config.js`
   3. ignore `coverage` directory
   4. add test.ts file which sets up jest testing environment after jest.config
   5. Create `tsconfig.spec.json` file with content from blog