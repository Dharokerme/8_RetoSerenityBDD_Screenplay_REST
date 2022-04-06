package co.com.sofka.runners.reqrespost;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith (CucumberWithSerenity.class)
@CucumberOptions(
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        features = {"src/test/resources/features/reqres/reqres-post.feature"},
        glue = "co.com.sofka.stepdefinitions.reqrespost",
        plugin = {"pretty", "html:target/cucumber-reports"}
)
public class ReqResPostTestRunner {
}
