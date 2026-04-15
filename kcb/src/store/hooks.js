import { useDispatch, useSelector } from "react-redux";

/** @type {() => import("./index").AppDispatch} */
export const useAppDispatch = useDispatch;

/** @type {import("react-redux").TypedUseSelectorHook<import("./index").RootState>} */
export const useAppSelector = useSelector;
