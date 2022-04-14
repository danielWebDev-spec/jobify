import { UnauthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.id === process.env.ADMIN) return;
  if (requestUser.id === resourceUserId.toString()) return;

  throw new UnauthenticatedError("Not Authorized to Access this Route");
};

export default checkPermissions;
