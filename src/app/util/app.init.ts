import { KeycloakService } from "keycloak-angular";

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: "http://localhost:8080", // Replace with your Keycloak server URL
            realm: "Keycloak", // Replace with your Keycloak realm name
            clientId: "Test" // Replace with your Keycloak client ID
          },
          loadUserProfileAtStartUp: true,
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: true,
          },
          bearerExcludedUrls: []
        });
        resolve("");
      } catch (error) {
        reject(error);
      }
    });
  };
}



// export function initializer(keycloak: KeycloakService):()=> Promise<boolean> {
//   return () =>
//     keycloak.init({
//       config: {
//         url: 'http://localhost:8180/auth',
//         realm: 'Test',
//         clientId: 'MuraaiAPP'
//       }
//       ,
//       initOptions: {
//         checkLoginIframe: true,
//         checkLoginIframeInterval:25,
//         onLoad: 'check-sso',
//         silentCheckSsoRedirectUri:
//           window.location.origin + '/assets/silent-check-sso.html'
//       }
//     });
// }



// frame-src 'self' ; frame-ancestors 'self'; object-src 'none';