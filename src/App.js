import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider className="flex items-center">
      <Card className="w-4/5 max-w-3xl h-4/5">
        <div className="bg-blue-500 dark:bg-indigo-600 p-6">
          <div className="text-slate-100 font-semibold my-1">
            Create tag and query
          </div>
          <div className="text-slate-300 dark:text-slate-400 text-xs">
            The query you build will be saved in your active view
          </div>
        </div>
        <div className="p-8 flex grow items-center">
          <div className="w-full">
            <Card variant="flat" className="w-full p-4">
              <div>
                <Button>+ Add filter</Button>
              </div>
            </Card>
            <div className="h-4 w-px mx-4 bg-slate-300 dark:bg-slate-600" />
            <Button>+ Add new group filter</Button>
          </div>
        </div>
        <div className="p-5 flex justify-between">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Finish</Button>
        </div>
      </Card>
    </ThemeProvider>
  );
}

export default App;
