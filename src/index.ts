import buildApp from "./app"

async function start() {
  try {
    const app = await buildApp()
    await app.listen({ port: 3000 })
    console.log(app.printPlugins())
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()