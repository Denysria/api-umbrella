REST API
========

.. raw:: html

   <div class="swagger-section">
     <div id="swagger-ui-container" class="swagger-ui-wrap"></div>
   </div>

    <link href="https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.css" rel="stylesheet" />
   <script src="https://cdn.rawgit.com/jquery/jquery/2.1.4/dist/jquery.min.js"></script>
  <script src="https://cdn.rawgit.com/Automattic/expect.js/0.3.1/index.js"></script>
  <script src="http://sinonjs.org/releases/sinon-1.17.3.js"></script>
  <script src="https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.js"></script>
  <script>
    mocha.setup({
      ui: 'bdd',
      timeout: 10000
    });
  </script>

  <script src="../node_modules/superagent/superagent.js"></script>

  <script src="../src/ApiClient.js"></script>

  <script src="../src/model/Category.js"></script>
  <script src="../src/model/Tag.js"></script>
  <script src="../src/model/Pet.js"></script>
  <script src="../src/model/User.js"></script>

  <script src="../src/api/PetApi.js"></script>

  <script src="ApiClientTest.js"></script>
  <script src="api/PetApiTest.js"></script>

  <script>
    mocha.checkLeaks();
    mocha.globals(['jQuery']);
    mocha.run();
  </script>
   <script type="text/javascript">
     window.swaggerUi = new SwaggerUi({
       url: '../../_static/admin-api-swagger.yml',
       dom_id: 'swagger-ui-container'
     });

     window.swaggerUi.load();
   </script>
