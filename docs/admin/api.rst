REST API
========

.. raw:: html

   <div class="swagger-section">
     <div id="swagger-ui-container" class="swagger-ui-wrap"></div>
   </div>

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/2.1.3/css/screen.min.css" />
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/jquery-1.8.0.min.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/jquery.slideto.min.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/jquery.wiggle.min.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/jquery.ba-bbq.min.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/handlebars-2.0.0.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/underscore-min.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/backbone-min.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/swagger-ui.min.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/highlight.7.3.pack.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/marked.js"></script>
   <script src="https://cdn.rawgit.com/swagger-api/swagger-ui/v2.1.3/dist/lib/swagger-oauth.js"></script>

   <script type="text/javascript">
     window.swaggerUi = new SwaggerUi({
        url: '../../_static/admin-api-swagger.yml',
        dom_id: "swagger-ui-container",
        supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
        onComplete: function(swaggerApi, swaggerUi){
          if(typeof initOAuth == "function") {
            initOAuth({
              clientId: "your-client-id",
              realm: "your-realms",
              appName: "your-app-name"
            });
          }
          $('pre code').each(function(i, e) {
            hljs.highlightBlock(e)
          });
          addApiKeyAuthorization();
        },
        onFailure: function(data) {
          log("Unable to Load SwaggerUI");
        },
        docExpansion: "none",
        apisSorter: "alpha",
        showRequestHeaders: false
      });
      function addApiKeyAuthorization(){
        var key = encodeURIComponent($('#input_apiKey')[0].value);
        if(key && key.trim() != "") {
          var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization("api_key", key, "query");
          window.swaggerUi.api.clientAuthorizations.add("api_key", apiKeyAuth);
          log("added key " + key);
        }
      }
      $('#input_apiKey').change(addApiKeyAuthorization);
      // if you have an apiKey you would like to pre-populate on the page for demonstration purposes...
      /*
       var apiKey = "myApiKeyXXXX123456789";
       $('#input_apiKey').val(apiKey);
       */
      window.swaggerUi.load();
      function log() {
        if ('console' in window) {
          console.log.apply(console, arguments);
        }
      }
    });
  </script>
