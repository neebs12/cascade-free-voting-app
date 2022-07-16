# Cascade-Free-Voting

## Backend Environments
To use proper backend environments, use the command: 

`npm run dev:[environment-keyword]`
### Production
`npm run dev:prod`

Definition: all entities are cleared of records - start from the beginning 
- Populated: 
  - `table` 
- Empty: 
  - `sessions`, `users`, `ideas`, `votes` 

### Transitional
