const toCSV = <T = any>(arr: T[], delimiter = ",") => arr
  .map((v: any) => v.map((x: any) => `"${x}"`).join(delimiter)).join("\n");

export = toCSV;
