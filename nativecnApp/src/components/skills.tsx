import { View } from "react-native";
import { Title } from "@/components/title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./Badge";

export function Skills() {
  return (
    <View className="w-full">
      <Title> teste </Title>
      <View className="flex-row w-full flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <Badge key={skill.name} label={skill.name} />
        ))}
      </View>
    </View>
  );
}
