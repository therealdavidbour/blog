import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

interface Env {
  __STATIC_CONTENT: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      // Try to serve the requested file from KV
      return await getAssetFromKV(
        {
          request,
          waitUntil: (promise) => {},
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: __STATIC_CONTENT_MANIFEST,
        }
      );
    } catch (error) {
      // Handle 404 - serve index.html for SPA routing
      if (request.method === 'GET') {
        const indexPage = await env.__STATIC_CONTENT.get(
          'index.html',
          'arrayBuffer'
        );
        if (indexPage) {
          return new Response(indexPage, {
            headers: {
              'content-type': 'text/html; charset=utf-8',
              'cache-control': 'public, max-age=3600',
            },
          });
        }
      }

      return new Response('Not Found', { status: 404 });
    }
  },
} as ExportedHandler<Env>;
