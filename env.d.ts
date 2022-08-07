declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      DATABASE_URL: string;
      REACT_APP_GOOGLE_KEY: string;
    }
  }
}

export {}