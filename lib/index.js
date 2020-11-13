async function resolver(parent, args, context, callback){
  try {
      let { params } = context
      /* do stuff with params such as validation etc */
      if(true){ // any validation
          return await callback(args)
      }
      return {codes: {name: "error", status: "404", message: "error has hapend"}}
  } catch (e) {
      return {codes: {name: "error", code: "500", status: "fail", message: e.message || JSON.stringify(e)}}
  }
}

function assignResolver(entities){
  let result = {}
  for (let entity of entities){
    for (let q of entity){
      /* Here i am assigning resolver as main resolver
        p = parent
        a = args
        c = context
        o = options = Object
        callback only receives the parameter args because resolvers does the other part
      */
      Object.assign(result, {
        [Object.keys(q)[0]]: (p, a, c) => resolver(p, a, c, (a, o) => q[Object.keys(q)[0]](a, o))
      })
    }
  }
  return result
}

module.exports = {
  assignResolver
}
