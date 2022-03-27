package co.com.sofka.runners.reqres;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith (Cucumber.class)
@CucumberOptions(
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        features = {"src/test/resources/features/reqres/reqres-post.feature"},
        glue = "stepdefinitions.reqres",
        plugin = {"pretty", "html:target/cucumber-reports"}
)
public class ReqResPostTestRunner {
}
