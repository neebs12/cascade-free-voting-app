# Cascade-Free-Voting

## Backend Environments
To use proper backend environments, use the command: 

`npm run dev:[environment-keyword]`

### Summary of environments
- `npm run dev:prod` - production environments (empty entities)
- `npm run dev:full`- db fully filled with seed data
- `npm run dev:admin1` - admin has submitted session data
- `npm run dev:user1` - users have submitted names
- `npm run dev:admin2` - admin has submitted ideas, phase voting page
- `npm run dev:user2` - all users have voted, readies results phase

### Production
`npm run dev:prod`

Definition: all entities are cleared of records - start from the beginning 
- Populated: 
  - `table` 
- Empty: 
  - `sessions`, `users`, `ideas`, `votes` 


### Transitional Environments
`npm run dev:full`

Definition: all the seed data is run, assumed all information is entered - ensures that the seed data abides with the full intention of the users
- IE: whenever a user needs to progress, the database should be saying "yes" to `yn` routes
- Populated: 
  - `sessions`, `users`, `ideas`, `votes` 
- Empty: 
  - `none` 

`npm run dev:admin1`

Definition: A1 has submitted where the admin has entered a name for the event, and added the number of ideas - populated the `sessions` entity
- Populate: 
  - `sessions` 
- Empty: 
  - `users`, `ideas`, `votes` 

`npm run dev:user1`

Definition: U1 has submitted (all users) - a good number(7) of users have added their names 
- Populate: 
  - `sessions`, `users` 
- Empty: 
  - `ideas`, `votes` 

`npm run dev:admin2`:

Definition: A2 has submitted. All ideas has been proposed - Not all users need an idea - used so that the users can finally start voting
- Populate: 
  - `sessions`, `users`, `ideas` 
- Empty:
  - `votes`
 
`npm run dev:user2`:

Definition: U3  has been submitted (all users have submitted their votes). Requirement: All users have voted! (from backend's perspective, this just means seeing if userId have been found on the votes entity) - Use Case: So that A5 and U5, U6 can be viewed. Note: this is the same as `full` transitional environment
- Populated: 
  - `sessions`, `users`, `ideas`, `votes` 
- Empty: 
  - `none` 