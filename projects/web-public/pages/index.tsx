import React from "react"
import { sum } from "@mgn-tech/utils/math";
import { Text } from "@mgn-tech/design-system/components/Text"

export default function HomeScreen() {
  return (
    <div className="app">
      <Text tag="h1">Home</Text>
      <Text tag="p">import feito pelo "@mgn-tech/utils/math - sum(2, 2): {sum(2,2)}"</Text>
    </div>
  )
}
