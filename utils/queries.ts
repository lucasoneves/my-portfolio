// lib/queries.ts
export const PROJECTS_QUERY = `
  {
    allProjects {
      id
      title
      href
      description
      thumb {
        url
      } 
      _status
    }

    _allProjectsMeta {
      count
    }
  }
`;
