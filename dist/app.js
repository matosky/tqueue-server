"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const user_route_1 = __importDefault(require("./routes/user.route"));
const customer_route_1 = __importDefault(require("./routes/customer.route"));
const dotenv_1 = __importDefault(require("dotenv"));
const auto_generate_planner_1 = require("./utils/auto-generate-planner");
const node_cron_1 = __importDefault(require("node-cron"));
const planner_route_1 = __importDefault(require("./routes/planner.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Schedule the cron job for periodic updates
node_cron_1.default.schedule("0 0 */7 * *", auto_generate_planner_1.autoGeneratePlanner);
const PORT = process.env.PORT || 8080;
app.use("/api/users", user_route_1.default);
app.use("/api/customers", customer_route_1.default);
app.use("/api/planners", planner_route_1.default);
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, config_1.connectToDb)();
            app.listen(PORT, () => {
                console.log("tqueue server live at port:", PORT);
            });
        }
        catch (error) {
            console.error("Error during app startup:", error);
            console.error("Error connecting to MongoDB:", error.message);
        }
    });
}
startApp();
