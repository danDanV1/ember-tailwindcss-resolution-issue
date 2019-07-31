import Component from "@ember/component";
import { merge } from "lodash";

export default Component.extend({
  init() {
    this._super(...arguments);

    const fruits = { fruits: ["apple", "orange", "mango"] };
    const colors = {
      blue: ["turquoise", "navy", "baby"],
      red: ["magenta", "fire", "passion"]
    };

    const properties = merge({}, fruits, colors);
    this.set("properties", properties);
  }
});
