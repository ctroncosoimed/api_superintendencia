export default `
  type Car {
    _id: String!
    name: String
    model: String
  }

  type Query {
    allCars(_id: String!): [Car!]!
  }

  type Mutation {
    createCar(name: String!, model: String!): Car!
  }
`;