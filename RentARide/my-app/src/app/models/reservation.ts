export class Reservation {
  carId?: number;
  locationId?: string;
  name?: string;
  customerName?:string;
  creditCard?: number;
  CVC?: number;
  pickUp?: Date;
  dropOff?: Date;
  location?:string;
  pickUpDate?: string;
  dropOffDate?: string;
  vehicleId?:number;
  pickupLocationId?:number;
  signedCheckOut?: string;
  signedCheckIn?: string;
  securityCode?: string;
}
