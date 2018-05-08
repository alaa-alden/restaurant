import { gql } from 'apollo-boost'

const getUtitlesQuery = gql`
    {
        untitles {
            name,
            id
        }
    }
`

const test = {}
export { getUtitlesQuery, test }
