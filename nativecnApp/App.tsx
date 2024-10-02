import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import { Profile } from "@/app/profile";

export default function App() {
  return (
    <>
      <Profile />
      <StatusBar style="light" />
    </>
  );
}
