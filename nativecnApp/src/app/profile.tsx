import { Skills } from "@/components/skills";
import { User } from "@/components/user";
import { View, Image } from "react-native";

export function Profile() {
  return (
    <View className="flex-1  bg-gray-700">
      <Image
        source={require("@/assets/banner.png")}
        className="w-full h-52 -mb-16"
      />
      <View className="flex-1 px-4 pb-4">
        <User />
        <Skills />
      </View>
    </View>
  );
}
