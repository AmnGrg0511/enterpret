import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Query } from "./components/Query";
import { ThemeProvider } from "./components/ThemeProvider";
import Rule from "./Rule.json";

const random = () => Math.floor(Math.random() * 16777215).toString(16);

function App() {
  const [query, setQuery] = useState({
    children: [{ children: [], conjuction: "&&" }],
    conjuction: "&&",
  });

  const handleAddFilter = (i) => {
    setQuery((prev) => ({
      ...prev,
      children: prev.children.map((_, id) =>
        i === id ? { ..._, children: [..._.children, { id: random() }] } : _
      ),
    }));
  };

  const handleDelete = (id, i) => {
    setQuery((prev) => ({
      ...prev,
      children: prev.children.map((_, idx) =>
        idx === id
          ? {
              ..._,
              children: [..._.children.slice(0, i), ..._.children.slice(i + 1)],
            }
          : _
      ),
    }));
  };

  const handleUpdate = (id, i, data) => {
    if (!Rule.fields[data.field].includes(data.value)) {
      data.value = Rule.fields[data.field][0];
    }
    setQuery((prev) => ({
      ...prev,
      children: prev.children.map((_, idx) =>
        idx === id
          ? {
              ..._,
              children: [
                ..._.children.slice(0, i),
                data,
                ..._.children.slice(i + 1),
              ],
            }
          : _
      ),
    }));
  };

  const handleAddGroupFilter = () => {
    setQuery((prev) => ({
      ...prev,
      children: [...prev.children, { children: [], conjuction: "&&" }],
    }));
  };

  const isQuery =
    query.children.length > 1 || query.children[0].children.length > 0;
  const queryString = `Query: "${query.children
    .map(
      (child) =>
        `(${child.children
          .map((_) => `${_.field} ${Rule.conditions[_.condition]} ${_.value}`)
          .join(` ${child.conjuction} `)})`
    )
    .join(` ${query.conjuction} `)}"`;

  return (
    <ThemeProvider className="flex items-center">
      <Card className="w-4/5 max-w-4xl h-5/6">
        <div className="bg-blue-500 dark:bg-indigo-600 p-6">
          <div className="text-slate-100 font-semibold my-1">
            {isQuery ? "Build your query" : "Create tag and query"}
          </div>
          <div
            className={`dark:text-${isQuery ? "white" : "slate-300"} text-${
              isQuery ? "white" : "slate-300"
            } py-2 text-xs ${
              isQuery ? "bg-blue-800 dark:bg-indigo-900 px-2 rounded" : ""
            }`}
          >
            {isQuery
              ? queryString
              : "The query you build will be saved in your active view"}
          </div>
        </div>
        <div className="p-8 flex grow items-center overflow-y-scroll h-full">
          <div className="w-full max-h-full">
            {query.children.map((query, id) => (
              <React.Fragment key={id}>
                <Card variant="flat" className="w-full p-4">
                  <div>
                    {query.children.map((_, i) => (
                      <Query
                        key={_.id}
                        {...{ _, i, id, handleDelete, handleUpdate }}
                      />
                    ))}
                    <Button onClick={() => handleAddFilter(id)}>
                      + Add filter
                    </Button>
                  </div>
                </Card>
                <div className="h-4 w-px mx-4 bg-zinc-300 dark:bg-zinc-600" />
              </React.Fragment>
            ))}
            <Button onClick={handleAddGroupFilter}>
              + Add new group filter
            </Button>
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
