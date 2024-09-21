import Header from "./components/header/header.component";
import MainContent from "./components/main-content/main-content.component";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <MainContent />
    </div>
          
  );
}
