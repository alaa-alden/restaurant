import { gql } from 'apollo-boost'

const getMealsQuery = gql`
    {
        meals {
            name,
            price,
            UrlImage,
            description,
            id
        }
    }
`

const test = {}
export { getMealsQuery, test }
