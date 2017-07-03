---
services: active-directory-b2c
platforms: javascript
author: jmprieur
---

# Single-Page Application built on MSAL.js with Azure AD B2C

> **IMPORTANT NOTE: Silent renewing of access tokens is not supported by all social identity providers.**

This simple sample demonstrates how to use the [Microsoft Authentication Library Preview for JavaScript (msal.js)](https://github.com/AzureAD/microsoft-authentication-library-for-js) to get an access token and call an API secured by Azure AD B2C.

## How To Run This Sample

The sample is already configured to use a demo environment and can be run simply by downloading the code and running the app on your machine. Follow the instructions below if you would like to use your own Azure AD B2C configuration.

### Step 1:  Clone or download this repository

From your shell or command line:

```powershell
git clone https://github.com/Azure-Samples/active-directory-b2c-javascript-msal-singlepageapp.git
```

### [OPTIONAL] Step 2: Get your own Azure AD B2C tenant

You can also modify the sample to use your own Azure AD B2C tenant.  First, you'll need to create an Azure AD B2C tenant by following [these instructions](https://azure.microsoft.com/documentation/articles/active-directory-b2c-get-started).

> *IMPORTANT*: if you choose to perform one of the optional steps, you have to perform ALL of them for the sample to work as expected.

### [OPTIONAL] Step 3: Create your own policies

This sample uses three types of policies: a unified sign-up/sign-in policy & a profile editing policy.  Create one policy of each type by following [the instructions here](https://azure.microsoft.com/documentation/articles/active-directory-b2c-reference-policies).  You may choose to include as many or as few identity providers as you wish.

If you already have existing policies in your Azure AD B2C tenant, feel free to re-use those.  No need to create new ones just for this sample.

### [OPTIONAL] Step 4: Create your own Web API

This sample calls an API at https://fabrikamb2chello.azurewebsites.net which has the same code as the sample [Node.js Web API with Azure AD B2C](https://github.com/Azure-Samples/active-directory-b2c-javascript-nodejs-webapi). You'll need your own API or at the very least, you'll need to [register a Web API with Azure AD B2C](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-api) so that you can define the scopes that your single page application will request access tokens for. 

Your web API registration should include the following information:

- Enable the **Web App/Web API** setting for your application.
- Set the **Reply URL** to the appropriate value indicated in the sample or provide any URL if you're only doing the web api registration, for example `https://myapi`.
- Make sure you also provide a **AppID URI**, for example `demoapi`, this is used to construct the scopes that are configured in you single page application's code.
- (Optional) Once you're app is created, open the app's **Published Scopes** blade and add any extra scopes you want.
- Copy the **AppID URI** and **Published Scopes values**, so you can input them in your application's code.

### [OPTIONAL] Step 5: Create your own application

Now you need to [register your single page application in your B2C tenant](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-app-registration#register-a-web-application), so that it has its own Application ID. Don't forget to grant your application API Access to the web API you registered in the previous step.

Your single page application registration should include the following information:

- Enable the **Web App/Web API** setting for your application.
- Set the **Reply URL** for your app to `http://localhost:6420`
- Once your app is created, open the app's **API access** blade and **Add** the API you created in the previous step.
- Copy the Application ID generated for your application, so you can use it in the next step.

### [OPTIONAL] Step 6: Configure the sample to use your Azure AD B2C tenant

Now you can replace the app's default configuration with your own.  

1. Open the `index.html` file.
1. Find the assignment for `ClientID` and replace the value with the Application ID from Step 5.
1. Find the assignment for `authority` and replacing `b2c_1_susi`by the name of the policy you created in Step 3, and `fabrikamb2c.onmicrosoft.com` by the name of the Azure AD B2C tenant.
1. Find the assignment for the scopes `b2cScopes` replacing the URL by the scope URL you created for the Web API, as provided in the B2C application registration portal
1. Find the assignment for API URL `webApi` replacing the current URL by the URL where you deployed your Web API in Step 4.

```javascript
<script class="pre">
  // The current application coordinates were pre-registered in a B2C tenant.
  var applicationConfig = {
    clientID: 'e760cab2-b9a1-4c0d-86fb-ff7084abd902',
    authority: "https://login.microsoftonline.com/tfp/fabrikamb2c.onmicrosoft.com/b2c_1_susi",
    b2cScopes: ["https://fabrikamb2c.onmicrosoft.com/demoapi/demo.read"],
    webApi: 'https://fabrikamb2chello.azurewebsites.net/hello',
  };
</script>
```

### Step 7: Run the sample

1. Make sure you've [installed Node](https://nodejs.org/en/download/).
1. Install the node dependencies:        
    ```powershell
    cd active-directory-b2c-javascript-msal-singlepageapp
    npm install
    npm update
    ```       
1. Run the Web application       
    ```powershell
    node server.js
    ```      
1. With your favorite browser, navigate to `http://localhost:6420`.
1. Click the **login** button at the top of the application screen. The sample works exactly in the same way regardless of the account type you choose, apart from some visual differences in the authentication and consent experience. Upon successful sign in, the application screen will show buttons that allow you to call an API and sign out.
1. Click on the **Call Web API** and see the textual representation of the JSon object which is returned
1. Sign out by clicking the **Logout** button.  

## More information
For more information on Azure B2C, see [the Azure AD B2C documentation homepage](http://aka.ms/aadb2c). 

## Community Help and Support
We use Stack Overflow with the [msal](https://stackoverflow.com/questions/tagged/msal) and [azure-ad-b2c](https://stackoverflow.com/questions/tagged/azure-ad-b2c) tags to provide support. We highly recommend you ask your questions on Stack Overflow first and browse existing issues to see if someone has asked your question before. Make sure that your questions or comments are tagged with [msal.js].

If you find and bug or have a feature request, please raise the issue on [GitHub Issues](../../issues). 

To provide a recommendation, visit our [Feedback Forum](http://aka.ms/aadb2cuv).

## Contributing
If you'd like to contribute to this sample, see [CONTRIBUTING.MD](/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
