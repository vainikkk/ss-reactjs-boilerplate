import React from "react";
import { shallow } from "enzyme";
import Error from "./Error";

//  use for override i18next configuration
// jest.mock("react-i18next", () => ({
//   // this mock makes sure any components using the translate hook can use it without a warning being shown
//   useTranslation: () => {
//     return {
//       t: (str) => str,
//       i18n: {
//         changeLanguage: () => new Promise(() => {}),
//       },
//     };
//   },
// }));

describe("Error", () => {
  it("should render correctly without any error", () => {
    const component = shallow(<Error />);

    expect(component).toMatchSnapshot();
  });
});
