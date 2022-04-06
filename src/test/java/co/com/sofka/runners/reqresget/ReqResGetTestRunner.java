package co.com.sofka.runners.reqresget;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith (CucumberWithSerenity.class)
@CucumberOptions(
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        features = {"src/test/resources/features/reqres/reqres-get.feature"},
        glue = "co.com.sofka.stepdefinitions.reqresget",
        plugin = {"pretty", "html:target/cucumber-reports"}
)
public class ReqResGetTestRunner {
}
