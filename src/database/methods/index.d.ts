type Module = () => void;

declare module "methods" {
    export { find } from "./find"
    export { findAndUpdate } from "./findAndUpdate"
}