$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/reqres/reqres-post.feature");
formatter.feature({
  "name": "Registro de usuario",
  "description": "  como nuevo usuario de la pagina\n  quiero registrarme\n  para hacer transacciones",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Registro exitoso",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que el cliente entro a la pagina.",
  "keyword": "Given "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqrespost.ReqResPostStepDefinition.queElClienteEntroALaPagina()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "crea un usuario.",
  "keyword": "When "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqrespost.ReqResPostStepDefinition.creaUnUsuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "obtendra un token de autenticacion.",
  "keyword": "Then "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqrespost.ReqResPostStepDefinition.obtendraUnTokenDeAutenticacion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registro fallido",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que el cliente entro a la pagina.",
  "keyword": "Given "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqrespost.ReqResPostStepDefinition.queElClienteEntroALaPagina()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "crea un usuario sin contrasena.",
  "keyword": "When "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqrespost.ReqResPostStepDefinition.creaUnUsuarioSinContrasena()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recibira un mensaje de error",
  "keyword": "Then "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqrespost.ReqResPostStepDefinition.recibiraUnMensajeDeError()"
});
formatter.result({
  "status": "passed"
});
});