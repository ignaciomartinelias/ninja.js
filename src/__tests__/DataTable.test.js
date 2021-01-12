import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";
import DataTable from "../components/DataTable";

const mockStore = configureStore();
const store = mockStore({
  dataTableReducer: {
    currentPageNumber: 0,
    totalNumberOfPages: 2,
    rows: [
      {
        name1: "Mads L. Klausen",
        email: "MadsLKlausen@jourrapide.com",
        edit_path: "http://google.com",
        per_id: 1,
      },
      {
        name1: "Alfred K. Krogh",
        email: "AlfredKKrogh@armyspy.com",
        edit_path: "http://google.com",
        per_id: 2,
      },
      {
        name1: "Silas L. Bertelsen",
        email: "SilasLBertelsen@armyspy.com",
        edit_path: "http://google.com",
        per_id: 3,
      },
      {
        name1: "Mia A. Johnsen",
        email: "MiaAJohnsen@dayrep.com",
        edit_path: "http://google.com",
        per_id: 4,
      },
      {
        name1: "Alfred S. Schou",
        email: "AlfredSSchou@jourrapide.com",
        edit_path: "http://google.com",
        per_id: 5,
      },
      {
        name1: "Mads L. Klausen",
        email: "MadsLKlausen@jourrapide.com",
        edit_path: "http://google.com",
        per_id: 6,
      },
      {
        name1: "Alfred K. Krogh",
        email: "AlfredKKrogh@armyspy.com",
        edit_path: "http://google.com",
        per_id: 7,
      },
      {
        name1: "Silas L. Bertelsen",
        email: "SilasLBertelsen@armyspy.com",
        edit_path: "http://google.com",
        per_id: 8,
      },
      {
        name1: "Mia A. Johnsen",
        email: "MiaAJohnsen@dayrep.com",
        edit_path: "http://google.com",
        per_id: 9,
      },
      {
        name1: "Alfred S. Schou",
        email: "AlfredSSchou@jourrapide.com",
        edit_path: "http://google.com",
        per_id: 10,
      },
    ],
  },
});

it("renders 5 rows", () => {
  const wrapper = mount(
    <Provider store={store}>
      <DataTable locale='da' rowsPerPage={5} />
    </Provider>
  );
  expect(wrapper.find("tr").length).toBe(5);
});

it("filters rows based on input", () => {
  const wrapper = mount(
    <Provider store={store}>
      <DataTable locale='da' rowsPerPage={5} />
    </Provider>
  );

  wrapper.find("input").simulate("change", { target: { value: "k" } });
  expect(wrapper.find("tr").length).toBe(4);
});

it("generates 2 pages and first page is active", () => {
  const wrapper = mount(
    <Provider store={store}>
      <DataTable locale='da' rowsPerPage={5} />
    </Provider>
  );
  const pageButtons = wrapper.find("Pagination Page");
  expect(pageButtons.length).toBe(2);
  expect(pageButtons.at(0).find("button").prop("className")).toContain("button-outline");
});

it("Snapshot DataTable Component", () => {
  const wrapper = mount(
    <Provider store={store}>
      <DataTable locale='da' rowsPerPage={5} />
    </Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
