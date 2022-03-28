$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/reqres/reqres-get.feature");
formatter.feature({
  "name": "Ver información de un usuario",
  "description": "  Como administrador de la pagina\n  quiero ver información de un usuario\n  para mantener un registro de usuarios",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Visualizar informacion de un usuario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el administrador ingresa a la pagina",
  "keyword": "Given "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqresget.ReqResGetStepDefinition.elAdministradorIngresaALaPagina()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el administrador ingresa el id del usuario",
  "keyword": "When "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqresget.ReqResGetStepDefinition.elAdministradorIngresaElIdDelUsuario()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: No BaseStepListener has been registered\r\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:900)\r\n\tat net.thucydides.core.steps.StepEventBus.getBaseStepListener(StepEventBus.java:138)\r\n\tat net.serenitybdd.screenplay.EventBusInterface.aStepHasFailedInTheCurrentExample(EventBusInterface.java:61)\r\n\tat net.serenitybdd.screenplay.Actor.anOutOfStepErrorOccurred(Actor.java:321)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:231)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:175)\r\n\tat co.com.sofka.task.DoGet.performAs(DoGet.java:26)\r\n\tat co.com.sofka.task.DoGet$ByteBuddy$47YFxMBq.performAs$accessor$HfNXD90F(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:488)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:468)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:441)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:197)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:184)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:77)\r\n\tat net.thucydides.core.steps.ProxyConfiguration$InterceptorDispatcher.intercept(ProxyConfiguration.java:51)\r\n\tat co.com.sofka.task.DoGet$ByteBuddy$47YFxMBq.performAs(Unknown Source)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:175)\r\n\tat co.com.sofka.stepdefinitions.reqresget.ReqResGetStepDefinition.elAdministradorIngresaElIdDelUsuario(ReqResGetStepDefinition.java:43)\r\n\tat ✽.el administrador ingresa el id del usuario(file:///D:/15_RetoSerenityBDD_Screenplay_REST/src/test/resources/features/reqres/reqres-get.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "el administrador visualiza la informacion del usuario",
  "keyword": "Then "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqresget.ReqResGetStepDefinition.elAdministradorVisualizaLaInformacionDelUsuario()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Visualizar informacion de un usuario inexistente",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el administrador ingresa a la pagina",
  "keyword": "Given "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqresget.ReqResGetStepDefinition.elAdministradorIngresaALaPagina()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el administrador ingresa el id del usuario inexistente",
  "keyword": "When "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqresget.ReqResGetStepDefinition.elAdministradorIngresaElIdDelUsuarioInexistente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el administrador no visualiza informacion.",
  "keyword": "Then "
});
formatter.match({
  "location": "co.com.sofka.stepdefinitions.reqresget.ReqResGetStepDefinition.elAdministradorNoVisualizaInformacion()"
});
formatter.result({
  "status": "passed"
});
});