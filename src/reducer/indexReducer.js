import deleted from "../Img/delete.png";
import lock from "../Img/lock.png";

const data = {
  list: [
    {
      status: "Active",
      access: "Manager",
      progress: 25,
      icon: lock,
      click_reviewd: 2450,
      monthly_reviewd: 5000,
    },
    {
      status: "Inactive",
      access: "Manager",
      progress: 20,
      icon: deleted,
      click_reviewd: 2050,
      monthly_reviewd: 3000,
    },
    {
      status: "Inactive",
      access: "Manager",
      progress: 55,
      icon: deleted,
      click_reviewd: 2850,
      monthly_reviewd: 8000,
    },
    {
      status: "Inactive",
      access: "Manager",
      progress: 75,
      icon: deleted,
      click_reviewd: 2950,
      monthly_reviewd: 6000,
    },
    {
      status: "Inactive",
      access: "Manager",
      progress: 66,
      icon: deleted,
      click_reviewd: 2250,
      monthly_reviewd: 8600,
    },
    {
      status: "Inactive",
      access: "Manager",
      progress: 70,
      icon: deleted,
      click_reviewd: 3450,
      monthly_reviewd: 6800,
    },
  ],
  list1: [], //getting API data in this array
  hoverData: [],
  modalToggle: false,
};

const indexReducer = (state = data, action) => {
  switch (action.type) {
    case "showdata":
      return {
        ...state,
        list1: action.payload,
      };
    case "showmodal":
      const newToggle = !state.modalToggle;
      const hoverDatas = action.payload;
      return {
        ...state,
        modalToggle: newToggle,
        hoverData: hoverDatas,
      };

    default:
      return state;
  }
};
export default indexReducer;
