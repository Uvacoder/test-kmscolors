import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["graphql-client"]?: typeof import("nuxt-graphql-client").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    "graphql-client": {
        clients: any,
    },
  }
  interface PublicRuntimeConfig {
     GQL_HOST: string,

    "graphql-client": {
        clients: {
             default: {
                   token: {
                          type: string,

                          name: string,
                   },

                   proxyCookies: boolean,

                   tokenStorage: {
                          mode: string,

                          cookieOptions: {
                                  maxAge: number,

                                  secure: boolean,
                          },

                          name: string,
                   },

                   preferGETQueries: boolean,

                   host: string,
             },
        },
    },
  }
}