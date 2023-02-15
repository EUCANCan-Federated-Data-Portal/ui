export const sqonUrlQueryString = (field: string, value: string)=> (
  `sqon={"op":"and","content":[{"op":"in","content":{"field":"${field}","value":["${value}"]}}]}`
);
