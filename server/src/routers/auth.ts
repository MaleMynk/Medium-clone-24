import express from "express";
import {
  googleAuth,
  logout,
  tokenRefresh} from "../controllers/auth.controller";
const router = express.Router();
/*, googleOAuthHandler

router.get('/google/oauth', googleOAuthHandler);
*/
router.route("/google/oauth").get(googleAuth);

router.route("/logout").post(logout);

router.route("/token").post(tokenRefresh);

export default router;
