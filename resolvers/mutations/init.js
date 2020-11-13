async function test(args){
  let response = {}

  Object.assign(response, {
    mock: JSON.stringify(args),
    codes: {name: "success", code: "200", status: "OK", message: "test msg", hash: args.newHash}
  })
  return response
}

module.exports = [
  {test: test}
]
