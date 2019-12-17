import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

// it("expect to render Card component", () => {
//   expect(shallow(<Card />).length).toEqual(1);
// });

it("expect to render Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});

//made a change
//========================================
// snapshot, if any changes made to component after snapshot made, it will immediately fail
// can update the snapshot as needed
//========================================

//shallow, will only render that component, not any linked components
// useful as enables you to test only one small unit at a time
// console.log(shallow(<Card />));

//===================================
// mount - full dom rendering - ideal where have components that interact with the dom api i.e. querySelectorAll etc
// Or component has a lifectcle method that want to test i.e. ComponentDidMount
// requires full DOM api to actually work/be available for the mount to happen
// has to tun in an environment that at least looks like the browser environment
// this can take time so may want to use something like a headless browser or JS-Dom (recommended to use with mount)
// so, tests can effect each other if all using the same DOM
// is rare to use as can get complicated and want to keep tests as simple as possible
//===================================
//===================================
// render - to render react components to static HTML
//===================================
// Snapshot testing
//===================================
