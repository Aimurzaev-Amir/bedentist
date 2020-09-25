const instance = axios.create({
  baseURL: "/api/meetings",
});
const MeetingsAPI = {
  getMeetingsData(date) {
    return instance.get("/getMeeting/" + date).then((response) => {
      return response.data;
    });
  },
  getAllMeetings() {
    return instance.get("/").then((response) => {
      return response.data;
    });
  },
  createMeeting(userName, date, month, time, number, info) {
    return instance
      .post("/create", { userName, date, month, time, number, info })
      .then((response) => {
        return response.data;
      });
  },
};
