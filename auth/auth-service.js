module.exports = {
  isValid,
  doesHaveAdminCode,
};

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}
function doesHaveAdminCode(user) {
  if (user.admin_code === "potluckPlanner") {
  }
}
