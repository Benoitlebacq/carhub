import { Car } from "./CarCard.model";

export type CarDetailsProps = {
  car: Car;
  closeModal: () => void;
  isOpen: boolean;
};
