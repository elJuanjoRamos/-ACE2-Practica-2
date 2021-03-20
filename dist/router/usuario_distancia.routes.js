"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_distancia_controller_1 = __importDefault(require("../controller/usuario_distancia.controller"));
var router = express_1.Router();
router.get('/distancia/usuario/:id', usuario_distancia_controller_1.default.getInstance().getAll);
router.post('/distancia/crear', usuario_distancia_controller_1.default.getInstance().create);
router.delete('/distancia/delete/:id', usuario_distancia_controller_1.default.getInstance().delete);
exports.default = router;
