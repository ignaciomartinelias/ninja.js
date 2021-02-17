import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";
import UserTable from "../components/UserTable/UserTable";

const mockStore = configureStore();
const store = mockStore({
  dataTableReducer: {
    currentPageNumber: 0
  },
  userReducer: {
    users: [
      {
        name: "Mads L. Klausen",
        email: "MadsLKlausen@jourrapide.com",
        edit_path: "http://google.com",
        id: 1,
      },
      {
        name: "Alfred K. Krogh",
        email: "AlfredKKrogh@armyspy.com",
        edit_path: "http://google.com",
        id: 2,
      },
      {
        name: "Silas L. Bertelsen",
        email: "SilasLBertelsen@armyspy.com",
        edit_path: "http://google.com",
        id: 3,
      },
      {
        name: "Mia A. Johnsen",
        email: "MiaAJohnsen@dayrep.com",
        edit_path: "http://google.com",
        id: 4,
      },
      {
        name: "Alfred S. Schou",
        email: "AlfredSSchou@jourrapide.com",
        edit_path: "http://google.com",
        id: 5,
      },
      {
        name: "Mads L. Klausen",
        email: "MadsLKlausen@jourrapide.com",
        edit_path: "http://google.com",
        id: 6,
      },
      {
        name: "Alfred K. Krogh",
        email: "AlfredKKrogh@armyspy.com",
        edit_path: "http://google.com",
        id: 7,
      },
      {
        name: "Silas L. Bertelsen",
        email: "SilasLBertelsen@armyspy.com",
        edit_path: "http://google.com",
        id: 8,
      },
      {
        name: "Mia A. Johnsen",
        email: "MiaAJohnsen@dayrep.com",
        edit_path: "http://google.com",
        id: 9,
      },
      {
        name: "Alfred S. Schou",
        email: "AlfredSSchou@jourrapide.com",
        edit_path: "http://google.com",
        id: 10,
      },
    ],
  },
});

it("renders 4 rows", () => {
  const wrapper = mount(
    <Provider store={store}>
      <UserTable />
    </Provider>
  );
  expect(wrapper.find("tr").length).toBe(4);
});

it("filters rows based on input", () => {
  const wrapper = mount(
    <Provider store={store}>
      <UserTable />
    </Provider>
  );

  wrapper.find("input").simulate("change", { target: { value: "k" } });
  expect(wrapper.find("tr").length).toBe(4);
});

it("generates 2 pages and first page is active", () => {
  const wrapper = mount(
    <Provider store={store}>
      <UserTable />
    </Provider>
  );
  const pageButtons = wrapper.find("Pagination Page");
  expect(pageButtons.length).toBe(4); // 2 per page plus the next button
  expect(pageButtons.at(0).find("button").prop("className")).toContain("button-outline");
});

it("Snapshot UserTable Component", () => {
  const wrapper = mount(
    <Provider store={store}>
      <UserTable />
    </Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
