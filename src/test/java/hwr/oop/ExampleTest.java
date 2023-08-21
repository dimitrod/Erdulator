package hwr.oop;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

// TODO Delete this placeholder test.
class ExampleTest {
    @Test
    void get_IsTrue() {
        Example example = new Example();
        boolean result = example.get();
        Assertions.assertThat(result).isTrue();
    }
}
