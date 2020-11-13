module.exports = `
  input where {
    uuid: String
    id: Int
    status: String
    createdAt: String
    updatedAt: String
  }

  input paginate {
    page_number: Int
    limit: Int
    offset: Int
  }

  input auth {
    hash: String
  }

  type Test {
    codes: Code
    mock: String
  }

  type Code {
    name: String
    error: String
    code: String
    message: String
    status: String
    hash: String
  }

  type Mutation {
    test(auth: auth, paginate: paginate, where: where): Test
  }

  type Query {
    test(auth: auth, paginate: paginate, where: where): Test
  }
`
