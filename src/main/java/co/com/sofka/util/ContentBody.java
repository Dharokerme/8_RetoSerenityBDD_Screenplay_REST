package co.com.sofka.util;

public enum ContentBody {
    JSONBODY("{\n" +
            "    \"email\": \"eve.holt@reqres.in\",\n" +
            "    \"password\": \"pistol\"\n" +
            "}"),

    JSONBODYWITHOUPASSWORD("{\n" +
                                   "    \"email\": \"eve.holt@reqres.in\",\n" +
                                   "}");

    private final String value;

    ContentBody(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

