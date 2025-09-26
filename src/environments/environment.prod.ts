export const environment = {
  production: true,
  firebaseApiKey: (process.env['NG_APP_FIREBASE_API_KEY'] as string) || ''
};
