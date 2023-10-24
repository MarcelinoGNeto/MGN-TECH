import { Text } from "@mgn-tech/design-system/components/Text";
import { sum } from "@mgn-tech/utils/math/sum";

export function HomeScreen() {
  return (
    <div className="app">
      <Text tag="h1">Home</Text>
      <Text tag="p">
        import feito pelo &quot;@mgn-tech/utils/math - sum(2, 2): {sum(2, 2)}
        &quot;
      </Text>
    </div>
  );
}
