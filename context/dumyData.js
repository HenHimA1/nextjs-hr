import moment from "moment";

export const dummyData = {
  employees: [
    {
      id: moment().unix(),
      name: "John",
      position: "Manager",
      age: "34",
      address: "Sesame Street",
    },
    {
      id: moment().add(1, "days").unix(),
      name: "Doe",
      position: "Staff",
      age: "25",
      address: "Night Street",
    },
  ],
  attendances: [
    ...Array(5)
      .fill(1)
      .map((value, index) => ({
        id: moment().unix() + index,
        employee: moment().unix(),
        date: `${moment().subtract(index, "days").format("YYYY-MM-DD")}`,
        check_in: `${moment()
          .subtract(Math.floor(Math.random() * 10), "minutes")
          .subtract(index, "days")
          .format("HH:mm")}`,
        check_out: `${moment()
          .subtract(index, "days")
          .add(8, "hours")
          .add(Math.floor(Math.random() * 10), "minutes")
          .format("HH:mm")}`,
      })),
    ...Array(5)
      .fill(1)
      .map((value, index) => ({
        id:
          moment()
            .subtract(index + 1, "days")
            .unix() + 1,
        employee: moment().add(1, "days").unix(),
        date: moment().subtract(index, "days").format("YYYY-MM-DD"),
        check_in: moment()
          .subtract(Math.floor(Math.random() * 10), "minutes")
          .subtract(index, "days")
          .format("HH:mm"),
        check_out: `${moment()
          .subtract(index, "days")
          .add(8, "hours")
          .add(Math.floor(Math.random() * 10), "minutes")
          .format("HH:mm")}`,
      })),
  ],
  timeoffs: [
    {
      id: moment().unix(),
      employee: moment().unix(),
      dateStart: moment().add(31, "days").format("YYYY-MM-DD"),
      dateEnd: moment().add(32, "days").format("YYYY-MM-DD"),
      description: "Sick",
      approved: false,
    },
    {
      id: moment().unix() + 1,
      employee: moment().add(1, "days").unix(),
      dateStart: moment().subtract(7, "days").format("YYYY-MM-DD"),
      dateEnd: moment().subtract(6, "days").format("YYYY-MM-DD"),
      description: "Legal Leave",
      approved: true,
    },
  ],
};

