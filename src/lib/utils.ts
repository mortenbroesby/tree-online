// Define a type that represents any valid JSON value
type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

// Define a type for JSON objects
interface JSONObject {
  [key: string]: JSONValue;
}

// Define a type for JSON arrays
interface JSONArray extends Array<JSONValue> {
  // JSON arrays are arrays of JSON values
}

// Function to parse a JSON string into a typed value
export function parseJSON<T extends JSONValue>(JSONString: string): T {
  return JSON.parse(JSONString) as T;
}
