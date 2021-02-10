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