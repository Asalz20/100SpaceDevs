module.exports = {
  getIndex: (req, res) => {
    res.render("index");
  },
  getLaunch: (req, res) => {
    res.render("launch");
  }
  // getLogin: (req, res) => {
  //   res.render("index");
  // },
  // postLogin: (req, res) => {
  //   res.render("index");
  // },
};
