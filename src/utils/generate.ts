export function removeMark(input: string): string {
  const removeMarkStr = input.replace(/\n{2,}/gi, "\n");
  const arr = removeMarkStr.split("\n");
  let i = 0;
  while (i < arr.length) {
    arr[i] = `"${arr[i]
      .replaceAll(/["]/gi, "'")
      .replaceAll(/[$]/gi, "\\\\$")}"${i === arr.length - 1 ? "" : ","}\n`;
    i++;
  }
  // arr.pop();
  return `${arr.join("\n")}`;
}

export function addPreBlanks(s: string): string {
  const arr = s.split("\n");
  let i = 0;
  while (i < arr.length) {
    arr[i] = `\t\t${arr[i]}`;
    i++;
  }
  return `${arr.join("\n")}`;
}

type A = {
  name: string;
  scope: string;
  prefix: string;
  body: string;
  description: string;
};

export function generateSample({
  name,
  scope,
  prefix,
  body,
  description,
}: A): string {
  return `"${name}":{
        "scope":"${scope}",
        "prefix":"${prefix}",
        "body":[\n${body}
        ],
        "description":"${description}"
    }`;
}
