export const events = [
  {
    id: 1,
    title: "Vacation one",
    description: "Description of vacation one",
    allDay: true,
    start: new Date(2022, 11, 5),
    end: new Date(2022, 11, 5)
  },
  {
    id: 2,
    title: "Vacation two",
    description: "Description of vacation two",
    allDay: true,
    start: new Date(2022, 11, 8),
    end: new Date(2022, 11, 8)
  },
  {
    id: 3,
    title: "Vacation three",
    description: "Description of vacation three",
    allDay: true,
    start: new Date(2022, 11, 22),
    end: new Date(2022, 11, 22)
  }
];

export const initialValue = {
  edit: false,
  id: "",
  title: "",
  description: "",
  allDay: true,
  start: new Date(),
  end: new Date()
};
export const initialToast = {
  label: "",
  display: false
};
