interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly REACT_APP_API_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }