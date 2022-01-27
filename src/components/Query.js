import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import Rule from "../Rule.json";
import { Button } from "./Button";
import Delete from "../assests/trash.svg";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const Query = ({ _, id, i, handleDelete, handleUpdate }) => {
  const [field, setField] = useState(_.field ?? Object.keys(Rule.fields)[0]);
  const [condition, setCondition] = useState(
    _.condition ?? Object.keys(Rule.conditions)[0]
  );
  const [value, setValue] = useState(_.value ?? Rule.fields[field][0]);
  const prevs = usePrevious({ field, condition, value });

  useEffect(() => {
    if (
      prevs?.field !== field ||
      prevs?.condition !== condition ||
      prevs?.value !== value
    ) {
      handleUpdate(id, i, { id: _.id, field, condition, value });
    }
  }, [field, condition, value, handleUpdate, i, id, _, prevs]);

  return (
    <div className="flex flex-wrap mb-2">
      <Dropdown
        value={field}
        options={Object.keys(Rule.fields)}
        onSelect={setField}
      />
      <Dropdown
        value={condition}
        options={Object.keys(Rule.conditions)}
        onSelect={setCondition}
      />
      <Dropdown
        value={value}
        options={Rule.fields[field]}
        onSelect={setValue}
      />
      {i !== 0 && (
        <Button
          onClick={() => handleDelete(id, i)}
          variant="secondary"
          className="hover:scale-150 h-fit py-2.5 px-2"
        >
          <img src={Delete} alt="del" />
        </Button>
      )}
    </div>
  );
};
