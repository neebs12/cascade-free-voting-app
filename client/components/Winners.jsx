import React from 'react'
// import ResultsTile from './ResultTile'

  /*
  - when this component is hit, it needs to be able to load the top n ideas from the server
  - (1) This will need to hit the "GET: api/v1/ideas/winners" -- this will be for the apis -- apis/ideas.js
  - then within this component, this needs a useEffect cb
  --- this cb will do a dispatch redux store useDispatch
  --- features/ideas/ideasSlice.js
  - This will also need a useSelector
  --- the cb for this needs to get from globalState => globalState.ideas
  */

export default function Winners () {
  const results = [
    {
      id: 1,
      title: '7 Minute Abs',
      description: "7's the key number here. Think about it.",
      votes: 20
    },
    {
      id: 2,
      title: '6 Minute Abs',
      description: 'But what if someone comes up with 6 minute abs.',
      votes: 30
    },
    { id: 3, title: 'Minute Abs', description: 'Abs in a Minute', votes: 40 }
  ]
  return (
    <>
      <h1>U6</h1>
      <h2>This is the user - winners page</h2>

      <div className="tile-container">
        {results.map((result) => {
          return <ResultsTile key={result.id} result={result} />
        })}
      </div>

    </>
  )
}
