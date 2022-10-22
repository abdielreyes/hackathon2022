import MobileLayout from "./components/MobileLayout";
import Router from "./pages/Router";
function App() {
  return (
    <div className="bg-black flex justify-center items-center min-h-full">
      <MobileLayout>
        <Router />
      </MobileLayout>
    </div>
  );
}

export default App;
