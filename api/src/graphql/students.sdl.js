export const schema = gql`
  type Student {
    id: Int!
    email: String!
    firstName: String!
    lastName: String!
    phone: String!
    countryCode: String!
  }

  type Query {
    students: [Student!]!
    student(id: Int!): Student
  }

  input CreateStudentInput {
    email: String!
    firstName: String!
    lastName: String!
    phone: String!
    countryCode: String!
  }

  input UpdateStudentInput {
    email: String
    firstName: String
    lastName: String
    phone: String
    countryCode: String
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student!
    updateStudent(id: Int!, input: UpdateStudentInput!): Student!
    deleteStudent(id: Int!): Student!
  }
`
