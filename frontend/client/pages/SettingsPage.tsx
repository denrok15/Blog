import { Header } from "client/components";
export function SettingsPage() {
  return (
    <div className={"animate-fadeIn"}>
      <Header />
      <div className={"flex justify-center bg-gray-200"}>
        <h4 className={"text-2xl text-center"}>Настройки</h4>
      </div>
    </div>
  );
}
