import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

const zFetch = async (): Promise<string> => {
   return 'zzz'
}

async function zFetchPlugin(
  fastify: FastifyInstance,
  _opts: FastifyPluginOptions,
): Promise<void> {
  fastify.decorate('zFetch', zFetch)
}

export default fp(zFetchPlugin, {
  name: 'zFetch',
})