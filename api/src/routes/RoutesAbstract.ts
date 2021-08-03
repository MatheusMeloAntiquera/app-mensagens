import { Router } from "express";
export default abstract class RoutesAbstract {
  abstract getRouter(): Router;
  abstract setRotas(): void;
}
