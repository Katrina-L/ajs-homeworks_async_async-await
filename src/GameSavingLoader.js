import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static async load() {
      return await read().then( (data) => json(data) );
    }
}